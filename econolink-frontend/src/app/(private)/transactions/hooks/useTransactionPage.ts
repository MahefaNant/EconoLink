/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  ITransaction,
  TransactionStats,
  TransactionQueryParams,
  TransactionType,
} from "@/types/ITransaction";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { transactionApi } from "../lib/transaction";
import { dexieDb } from "@/lib/dexieDb";
import { checkApiConnection } from "@/lib/fetcher";
import { processSyncQueue } from "@/lib/sync";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTransactionStats } from "./useTransactionStats";

// Limite pour le stockage offline (3 mois)
const OFFLINE_DATE_LIMIT = 90 * 24 * 60 * 60 * 1000;

export function useTransactionPage() {
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;

  const {
    basicStats,
    advancedStats,
    loading: statsLoading,
    loadStats,
  } = useTransactionStats();

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const stats = advancedStats || basicStats;
  const [queryParams, setQueryParams] = useState<TransactionQueryParams>({
    page: 1,
    limit: 10,
    search: "",
    type: "ALL",
    sortBy: "date",
    sortOrder: "desc",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
    hasNext: false,
    hasPrev: false,
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Local state for search input and date filters
  const [searchInput, setSearchInput] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  // Fonction pour limiter les données offline par date
  const getOfflineDateLimit = () => {
    const limitDate = new Date(Date.now() - OFFLINE_DATE_LIMIT);
    return limitDate.toISOString().split("T")[0];
  };

  const loadTransactions = useCallback(async () => {
    if (!userId) return;

    try {
      setLoading(true);
      await processSyncQueue();

      const isApiConnected = await checkApiConnection();

      if (!isApiConnected) {
        // Mode offline
        const offlineLimitDate = getOfflineDateLimit();

        let collection = dexieDb.transactions
          .where("user_id")
          .equals(userId)
          .and((item) => new Date(item.date) >= new Date(offlineLimitDate));

        // Appliquer les filtres
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

        // Trier et paginer
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
        // Mode online
        const response = await transactionApi.getAll(queryParams);
        setTransactions(response.data);
        setPagination(response.pagination);

        // Mettre en cache les données
        await dexieDb.transactions.clear();
        await dexieDb.transactions.bulkAdd(response.data);
      }
    } catch {
      toast.error("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  }, [queryParams, userId]);

  useEffect(() => {
    loadTransactions();
    loadStats("month");
  }, [loadTransactions, loadStats]);

  // Initialize local states from queryParams on component mount
  useEffect(() => {
    setSearchInput(queryParams.search || "");
    setDateRange({
      startDate: queryParams.startDate || "",
      endDate: queryParams.endDate || "",
    });
  }, []);

  const handleSearch = () => {
    setQueryParams((prev) => ({
      ...prev,
      search: searchInput,
      page: 1,
    }));
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setQueryParams((prev) => ({
      ...prev,
      search: "",
      page: 1,
    }));
  };

  const handleTypeFilter = (type: TransactionType | "ALL") => {
    setQueryParams((prev) => ({
      ...prev,
      type,
      page: 1,
    }));
  };

  const handleDateFilterApply = () => {
    setQueryParams((prev) => ({
      ...prev,
      startDate: dateRange.startDate || undefined,
      endDate: dateRange.endDate || undefined,
      page: 1,
    }));
  };

  const handleDateFilterClear = () => {
    setDateRange({ startDate: "", endDate: "" });
    setQueryParams((prev) => {
      const newParams = { ...prev };
      delete newParams.startDate;
      delete newParams.endDate;
      newParams.page = 1;
      return newParams;
    });
  };

  const handlePageChange = (newPage: number) => {
    setQueryParams((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const handleSort = (sortBy: string, sortOrder: "asc" | "desc") => {
    setQueryParams((prev) => ({
      ...prev,
      sortBy,
      sortOrder,
      page: 1,
    }));
  };

  const handleEdit = (transaction: ITransaction) => {
    setSelectedTransaction(transaction);
  };

  const handleDelete = (transaction: ITransaction) => {
    setSelectedTransaction(transaction);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedTransaction) return;

    try {
      const isApiConnected = await checkApiConnection();

      if (!isApiConnected) {
        // Mode offline
        await dexieDb.transactions.delete(selectedTransaction.id);

        // Gérer la sync queue
        const existingTasks = await dexieDb.syncQueue
          .filter(
            (task) =>
              task.tempId === selectedTransaction.id ||
              task.url === `/transaction/${selectedTransaction.id}`
          )
          .toArray();

        if (existingTasks.length > 0) {
          // Supprimer toutes les tâches existantes
          await dexieDb.syncQueue
            .filter(
              (task) =>
                task.tempId === selectedTransaction.id ||
                task.url === `/transaction/${selectedTransaction.id}`
            )
            .delete();

          // Si c'était une transaction temporaire, on n'ajoute pas de DELETE
          if (!selectedTransaction.id.startsWith("temp-")) {
            await dexieDb.syncQueue.add({
              url: `/transaction/${selectedTransaction.id}`,
              method: "DELETE",
              createdAt: Date.now(),
            });
          }
        } else {
          // Aucune tâche existante - ajouter DELETE seulement pour les vrais IDs
          if (!selectedTransaction.id.startsWith("temp-")) {
            await dexieDb.syncQueue.add({
              url: `/transaction/${selectedTransaction.id}`,
              method: "DELETE",
              createdAt: Date.now(),
            });
          }
        }

        toast.success("Transaction deleted offline and queued for sync");
      } else {
        // Mode online
        await transactionApi.delete(selectedTransaction.id);
        toast.success("Transaction deleted successfully");
      }

      await loadTransactions();
      await loadStats();
    } catch {
      toast.error("Failed to delete transaction");
    } finally {
      setDeleteDialogOpen(false);
      setSelectedTransaction(null);
    }
  };

  return {
    transactions,
    loading,
    stats,
    queryParams,
    pagination,
    deleteDialogOpen,
    setDeleteDialogOpen,
    selectedTransaction,
    filtersOpen,
    setFiltersOpen,
    searchInput,
    setSearchInput,
    dateRange,
    setDateRange,
    handleSearch,
    handleClearSearch,
    handleTypeFilter,
    handleDateFilterApply,
    handleDateFilterClear,
    handlePageChange,
    handleSort,
    handleEdit,
    handleDelete,
    handleDeleteConfirm,
  };
}
