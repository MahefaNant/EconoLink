/* eslint-disable react-hooks/exhaustive-deps */
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
import { useTranslations } from "next-intl";

export function useEditTransaction(transactionId: string) {
  const tTr = useTranslations("Transaction");
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
          toast.error(tTr("messages.not-found-local"));
        }
      } else {
        // online
        const apiTransaction = await transactionApi.getById(transactionId);
        if (apiTransaction) {
          setTransaction(apiTransaction);
        } else {
          toast.error(tTr("messages.not-found"));
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
          toast.info(tTr("messages.loaded-cache"));
        } else {
          toast.error(error.message || tTr("messages.not-found"));
        }
      } catch (fallbackError) {
        toast.error(error.message || tTr("messages.not-found"));
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
          throw new Error(tTr("messages.not-found"));
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

        toast.success(tTr("messages.update-offline"));
      } else {
        // online
        await transactionApi.update(id, dto);

        // load datas
        const updatedTransaction = await transactionApi.getById(id);
        setTransaction(updatedTransaction);

        toast.success(tTr("messages.update-success"));
      }
    } catch (error: any) {
      toast.error(error.message || tTr("messages.update-failed"));
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

        toast.success(tTr("messages.delete-offline"));
      } else {
        // online
        await transactionApi.delete(transaction.id);
        toast.success(tTr("messages.delete-success"));
      }

      return true;
    } catch (error: any) {
      toast.error(error.message || tTr("messages.delete-failed"));
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
