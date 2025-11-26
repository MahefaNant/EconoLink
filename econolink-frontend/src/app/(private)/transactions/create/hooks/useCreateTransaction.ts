/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/transactions/create/hooks/useCreateTransaction.ts
import { useState, useCallback } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { CreateTransactionDto } from "@/types/ITransaction";
import { transactionApi } from "../../lib/transaction";
import { dexieDb } from "@/lib/dexieDb";
import { checkApiConnection } from "@/lib/fetcher";
import { processSyncQueue } from "@/lib/sync";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function useCreateTransaction() {
  const tTr = useTranslations("Transaction");
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;

  const [loading, setLoading] = useState(false);

  // Function to manage conflicts in the synchronization queue
  const manageSyncQueueConflicts = async (
    tempId: string,
    url: string,
    method: "POST" | "PATCH" | "DELETE",
    payload: any
  ) => {
    const existingTasks = await dexieDb.syncQueue
      .filter(
        (task) =>
          task.tempId === tempId || (task.body && task.body.id === tempId)
      )
      .toArray();

    if (existingTasks.length === 0) {
      await dexieDb.syncQueue.add({
        url,
        method,
        body: payload,
        tempId: method === "POST" ? tempId : undefined,
        createdAt: Date.now(),
      });
      return;
    }

    for (const task of existingTasks) {
      if (method === "DELETE") {
        await dexieDb.syncQueue
          .filter(
            (t) => t.tempId === tempId || (t.body && t.body.id === tempId)
          )
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
        await dexieDb.syncQueue.update(task.id!, {
          body: { ...task.body, ...payload },
          createdAt: Date.now(),
        });
        return;
      }

      if (method === "PATCH" && task.method === "PATCH") {
        await dexieDb.syncQueue.update(task.id!, {
          body: { ...task.body, ...payload },
          createdAt: Date.now(),
        });
        return;
      }
    }

    await dexieDb.syncQueue.add({
      url,
      method,
      body: payload,
      tempId: method === "POST" ? tempId : undefined,
      createdAt: Date.now(),
    });
  };

  // Main function for creating a transaction
  const createTransaction = useCallback(
    async (dto: CreateTransactionDto) => {
      if (!userId) {
        throw new Error("User not authenticated");
      }

      setLoading(true);
      try {
        await processSyncQueue();
        const isApiConnected = await checkApiConnection();

        if (!isApiConnected) {
          // online
          const tempId = `temp-${crypto.randomUUID()}`;

          const transactionData = {
            ...dto,
            id: tempId,
            user_id: userId,
            date: dto.date || new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            is_synced: false,
            amount:
              typeof dto.amount === "string"
                ? parseFloat(dto.amount)
                : dto.amount,
          };

          // save localy
          await dexieDb.transactions.add(transactionData);

          // Manage the synchronization queue
          await manageSyncQueueConflicts(tempId, "/transaction", "POST", {
            ...dto,
            id: tempId,
          });

          toast.success(tTr("messages.create-offline"));
          return transactionData;
        } else {
          // Online
          const result = await transactionApi.create(dto);
          toast.success(tTr("messages.create-success"));
          return result;
        }
      } catch (error: any) {
        toast.error(error.message || tTr("messages.create-failed"));
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [userId]
  );

  return {
    loading,
    createTransaction,
  };
}
