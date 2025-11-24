/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useEditTransaction.ts
import { useState, useEffect, useCallback } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { ITransaction, UpdateTransactionDto } from "@/types/ITransaction";
import { transactionApi } from "@/app/(private)/transactions/lib/transaction";
import { dexieDb } from "@/lib/dexieDb";
import { checkApiConnection } from "@/lib/fetcher";
import { toast } from "sonner";

export function useEditTransaction(transactionId: string) {
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;

  const [transaction, setTransaction] = useState<ITransaction | null>(null);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);

  // load transaction
  const loadTransaction = useCallback(async () => {
    if (!transactionId || !userId) {
      setFetching(false);
      return;
    }

    try {
      setFetching(true);

      const isApiConnected = await checkApiConnection();

      if (!isApiConnected) {
        // offline
        const localTransaction = await dexieDb.transactions.get(transactionId);
        if (localTransaction) {
          setTransaction(localTransaction);
        } else {
          toast.error("Transaction not found in local storage");
        }
      } else {
        // online
        const apiTransaction = await transactionApi.getById(transactionId);
        if (apiTransaction) {
          setTransaction(apiTransaction);
        } else {
          toast.error("Transaction not found");
        }
      }
    } catch (error: any) {
      // Fallback
      try {
        const fallbackTransaction = await dexieDb.transactions.get(
          transactionId
        );
        if (fallbackTransaction) {
          setTransaction(fallbackTransaction);
          toast.info("Transaction loaded from cache");
        } else {
          toast.error(error.message || "Failed to load transaction");
        }
      } catch (fallbackError) {
        toast.error(error.message || "Failed to load transaction");
      }
    } finally {
      setFetching(false);
    }
  }, [transactionId, userId]);

  // update transaction
  const updateTransaction = async (id: string, dto: UpdateTransactionDto) => {
    if (!userId) throw new Error("User not authenticated");

    setLoading(true);
    try {
      const isApiConnected = await checkApiConnection();

      if (!isApiConnected) {
        // offline
        const existingTransaction = await dexieDb.transactions.get(id);
        if (!existingTransaction) {
          throw new Error("Transaction not found");
        }

        await dexieDb.transactions.update(id, {
          ...dto,
          updated_at: new Date().toISOString(),
          is_synced: false,
        });

        // Maj local state
        setTransaction((prev) => (prev ? { ...prev, ...dto } : null));

        await dexieDb.syncQueue.add({
          url: `/transaction/${id}`,
          method: "PATCH",
          body: dto,
          createdAt: Date.now(),
        });

        toast.success("Transaction updated offline and queued for sync");
      } else {
        // online
        await transactionApi.update(id, dto);

        // load datas
        const updatedTransaction = await transactionApi.getById(id);
        setTransaction(updatedTransaction);

        toast.success("Transaction updated successfully");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to update transaction");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteTransaction = async () => {
    if (!transaction) return;

    setLoading(true);
    try {
      const isApiConnected = await checkApiConnection();

      if (!isApiConnected) {
        // offline
        await dexieDb.transactions.delete(transaction.id);

        if (!transaction.id.startsWith("temp-")) {
          await dexieDb.syncQueue.add({
            url: `/transaction/${transaction.id}`,
            method: "DELETE",
            createdAt: Date.now(),
          });
        }

        toast.success("Transaction deleted offline and queued for sync");
      } else {
        // online
        await transactionApi.delete(transaction.id);
        toast.success("Transaction deleted successfully");
      }

      return true;
    } catch (error: any) {
      toast.error(error.message || "Failed to delete transaction");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTransaction();
  }, [loadTransaction]);

  return {
    transaction,
    fetching,
    loading,
    updateTransaction,
    deleteTransaction,
    reloadTransaction: loadTransaction,
  };
}
