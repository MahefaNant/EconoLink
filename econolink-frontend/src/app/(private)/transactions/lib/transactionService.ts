/* eslint-disable @typescript-eslint/no-explicit-any */
import { dexieDb } from "@/lib/dexieDb";
import { checkApiConnection } from "@/lib/fetcher";
import {
  CreateTransactionDto,
  ITransaction,
  TransactionQueryParams,
  UpdateTransactionDto,
} from "@/types/ITransaction";
import { transactionApi } from "./transaction";
import { Dispatch, SetStateAction } from "react";
import { processSyncQueue } from "@/lib/sync";
import { IPagination } from "@/interface/IPagination";
import { toast } from "sonner";

// limit for offline stockage (3 months)
const OFFLINE_DATE_LIMIT = 90 * 24 * 60 * 60 * 1000;

const getOfflineDateLimit = () => {
  const limitDate = new Date(Date.now() - OFFLINE_DATE_LIMIT);
  return limitDate.toISOString().split("T")[0];
};

//---------------------------------------------------
//--------------LOAD TRANSACTION---------------
//---------------------------------------------------

export const loadTransactionsServ = async (
  userId: string | undefined,
  queryParams: TransactionQueryParams,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>,
  setPagination: Dispatch<SetStateAction<IPagination>>
) => {
  if (!userId) return;

  try {
    setLoading(true);
    await processSyncQueue();

    const isApiConnected = await checkApiConnection();

    if (!isApiConnected) {
      // offline Mode
      const offlineLimitDate = getOfflineDateLimit();

      let collection = dexieDb.transactions
        .where("user_id")
        .equals(userId)
        .and((item) => new Date(item.date) >= new Date(offlineLimitDate));

      // Apply filters
      if (queryParams.search) {
        const searchTerm = queryParams.search.toLowerCase();
        collection = collection.filter(
          (item) =>
            (item.description?.toLowerCase().includes(searchTerm) ?? false) ||
            (item.notes?.toLowerCase().includes(searchTerm) ?? false)
        );
      }

      if (queryParams.type && queryParams.type !== "ALL") {
        collection = collection.filter(
          (item) => item.type === queryParams.type
        );
      }

      if (queryParams.startDate) {
        collection = collection.filter((item) =>
          queryParams.startDate
            ? new Date(item.date) >= new Date(queryParams.startDate)
            : true
        );
      }

      if (queryParams.endDate) {
        collection = collection.filter((item) =>
          queryParams.endDate
            ? new Date(item.date) <= new Date(queryParams.endDate as string)
            : true
        );
      }

      // Sort and paginate
      const allData = await collection.toArray();
      const sortedData = allData.sort((a, b) => {
        const aVal = a[queryParams.sortBy as keyof ITransaction];
        const bVal = b[queryParams.sortBy as keyof ITransaction];

        if (queryParams.sortOrder === "desc") {
          return aVal < bVal ? 1 : -1;
        }
        return aVal > bVal ? 1 : -1;
      });

      const startIndex =
        ((queryParams.page ?? 1) - 1) * (queryParams.limit ?? 10);
      const paginatedData = sortedData.slice(
        startIndex,
        startIndex + (queryParams.limit ?? 10)
      );

      setTransactions(paginatedData);
      setPagination({
        page: queryParams.page ?? 1,
        limit: queryParams.limit ?? 10,
        total: allData.length,
        pages: Math.ceil(allData.length / (queryParams.limit ?? 10)),
        hasNext: startIndex + (queryParams.limit ?? 10) < allData.length,
        hasPrev: (queryParams.page ?? 1) > 1,
      });
    } else {
      // Online Mode
      const response = await transactionApi.getAll(queryParams);
      setTransactions(response.data);
      setPagination(response.pagination);

      // Cache data
      await dexieDb.transactions.clear();
      await dexieDb.transactions.bulkAdd(response.data);
    }
  } catch {
    // toast.error("Failed to load transactions");
  } finally {
    setLoading(false);
  }
};

//---------------------------------------------------
//--------------DELETE CONFIRM---------------
//---------------------------------------------------

export const handleDeleteConfirmServ = async (
  tTr: any,
  loadTransactions: () => Promise<void>,
  loadStats: (period?: string) => Promise<void>,
  selectedTransaction: ITransaction | null,
  setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>,
  setSelectedTransaction: Dispatch<SetStateAction<ITransaction | null>>
) => {
  if (!selectedTransaction) return;

  try {
    const isApiConnected = await checkApiConnection();

    if (!isApiConnected) {
      // Mode offline
      await dexieDb.transactions.delete(selectedTransaction.id);

      // Manage sync queue
      const existingTasks = await dexieDb.syncQueue
        .filter(
          (task) =>
            task.tempId === selectedTransaction.id ||
            task.url === `/transaction/${selectedTransaction.id}`
        )
        .toArray();

      if (existingTasks.length > 0) {
        // delete all existing tasks
        await dexieDb.syncQueue
          .filter(
            (task) =>
              task.tempId === selectedTransaction.id ||
              task.url === `/transaction/${selectedTransaction.id}`
          )
          .delete();

        // If it was a temp transaction, we don't add DELETE
        if (!selectedTransaction.id.startsWith("temp-")) {
          await dexieDb.syncQueue.add({
            url: `/transaction/${selectedTransaction.id}`,
            method: "DELETE",
            createdAt: Date.now(),
          });
        }
      } else {
        // no existant task - add DELETE only for real IDs
        if (!selectedTransaction.id.startsWith("temp-")) {
          await dexieDb.syncQueue.add({
            url: `/transaction/${selectedTransaction.id}`,
            method: "DELETE",
            createdAt: Date.now(),
          });
        }
      }

      toast.success(tTr("messages.delete-offline"));
    } else {
      // Online MOde
      await transactionApi.delete(selectedTransaction.id);
      toast.success(tTr("messages.delete-success"));
    }

    await loadTransactions();
    await loadStats();
  } catch {
    toast.error(tTr("messages.delete-failed"));
  } finally {
    setDeleteDialogOpen(false);
    setSelectedTransaction(null);
  }
};

//---------------------------------------------------
//--------------QUEUE CONFLICT---------------
//---------------------------------------------------

// Function to manage conflicts in the synchronization queue (same as categories)
async function manageSyncQueueConflicts(
  tempId: string,
  url: string,
  method: "POST" | "PATCH" | "DELETE",
  payload: any
) {
  // Find all existing tasks for this ID
  const existingTasks = await dexieDb.syncQueue
    .filter(
      (task) => task.tempId === tempId || (task.body && task.body.id === tempId)
    )
    .toArray();

  if (existingTasks.length === 0) {
    // No task exists, we simply add
    await dexieDb.syncQueue.add({
      url,
      method,
      body: payload,
      tempId: method === "POST" ? tempId : undefined,
      createdAt: Date.now(),
    });
    return;
  }

  // Operations Merger Logic
  for (const task of existingTasks) {
    if (method === "DELETE") {
      // If we delete, we delete all previous tasks.
      await dexieDb.syncQueue
        .filter((t) => t.tempId === tempId || (t.body && t.body.id === tempId))
        .delete();

      await dexieDb.syncQueue.add({
        url,
        method: "DELETE",
        tempId: tempId,
        createdAt: Date.now(),
      });
      return;
    }

    if (method === "PATCH" && task.method === "POST") {
      // If we modify a transaction that has not yet been created online
      await dexieDb.syncQueue.update(task.id!, {
        body: { ...task.body, ...payload },
        createdAt: Date.now(),
      });
      return;
    }

    if (method === "PATCH" && task.method === "PATCH") {
      // Merging of changes
      await dexieDb.syncQueue.update(task.id!, {
        body: { ...task.body, ...payload },
        createdAt: Date.now(),
      });
      return;
    }
  }

  // If no merge logic applies, the new task is added.
  await dexieDb.syncQueue.add({
    url,
    method,
    body: payload,
    tempId: method === "POST" ? tempId : undefined,
    createdAt: Date.now(),
  });
}

//---------------------------------------------------
//--------------CREATE TRANSACTION---------------
//---------------------------------------------------
// Function to update a transaction (online + offline)
export const createTransactionServ = async (
  tTr: any,
  userId: string | undefined,
  dto: CreateTransactionDto,
  loadTransactions: () => Promise<void>
) => {
  try {
    const isApiConnected = await checkApiConnection();

    if (!isApiConnected) {
      // Offline mode - same logic as for categories
      const tempId = `temp-${crypto.randomUUID()}`;

      const transactionData: ITransaction = {
        ...dto,
        id: tempId,
        user_id: userId!,
        date: dto.date || new Date().toISOString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        is_synced: false,
        amount:
          typeof dto.amount === "string" ? parseFloat(dto.amount) : dto.amount,
      };

      // Save locally
      await dexieDb.transactions.add(transactionData);

      // Manage the sync queue with the new logic
      await manageSyncQueueConflicts(tempId, "/transaction", "POST", {
        ...dto,
        id: tempId,
      });

      toast.success(tTr("messages.create-offline"));
      await loadTransactions();
      return transactionData;
    } else {
      // online Mode
      const result = await transactionApi.create(dto);
      toast.success(tTr("messages.create-success"));
      await loadTransactions();
      return result;
    }
  } catch (error: any) {
    toast.error(error.message || tTr("messages.create-failed"));
    throw error;
  }
};

//---------------------------------------------------
//--------------Update Transaction---------------
//---------------------------------------------------

export const updateTransactionServ = async (
  tTr: any,
  id: string,
  dto: UpdateTransactionDto,
  loadTransactions: () => Promise<void>
) => {
  try {
    const isApiConnected = await checkApiConnection();

    if (!isApiConnected) {
      // Offline mode - same logic as for categories
      const existingTransaction = await dexieDb.transactions.get(id);
      if (!existingTransaction) {
        throw new Error(tTr("messages.not-found"));
      }

      // Update locally
      await dexieDb.transactions.update(id, {
        ...dto,
        updated_at: new Date().toISOString(),
        is_synced: false,
        amount: dto.amount
          ? typeof dto.amount === "string"
            ? parseFloat(dto.amount)
            : dto.amount
          : existingTransaction.amount,
      });

      // Manage the sync queue
      const url = `/transaction/${id}`;
      const method = "PATCH";

      await manageSyncQueueConflicts(id, url, method, dto);

      toast.success(tTr("messages.update-offline"));
      await loadTransactions();
      return;
    } else {
      // Online Mode
      await transactionApi.update(id, dto);
      toast.success(tTr("messages.update-success"));
      await loadTransactions();
    }
  } catch (error: any) {
    toast.error(error.message || tTr("messages.update-failed"));
    throw error;
  }
};

//---------------------------------------------------
//--------------Transaction By Id---------------
//---------------------------------------------------

export const getTransactionByIdServ = async (
  tTr: any,
  id: string,
  userId: string | undefined
): Promise<ITransaction | null> => {
  if (!userId) return null;

  try {
    const isApiConnected = await checkApiConnection();

    if (!isApiConnected) {
      // Offline mode - search in IndexedDB
      const transaction = await dexieDb.transactions.get(id);
      if (!transaction) {
        throw new Error(tTr("messages.not-found-local"));
      }
      return transaction;
    } else {
      // Online mode - normal API call
      return await transactionApi.getById(id);
    }
  } catch (error: any) {
    throw error;
  }
};

//---------------------------------------------------
