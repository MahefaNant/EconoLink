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

export function useTransactionPage() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<TransactionStats | null>(null);
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

  const loadTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await transactionApi.getAll(queryParams);
      setTransactions(response.data);
      setPagination(response.pagination);
    } catch {
      toast.error("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  }, [queryParams]);

  const loadStats = useCallback(async () => {
    try {
      const statsData = await transactionApi.getStats(
        queryParams.startDate,
        queryParams.endDate
      );
      setStats(statsData);
    } catch {
      //   console.error("Failed to load stats");
    }
  }, [queryParams.startDate, queryParams.endDate]);

  useEffect(() => {
    loadTransactions();
    loadStats();
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
      page: 1, // Reset to first page on search
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
    // Clear local state
    setDateRange({ startDate: "", endDate: "" });

    // Clear query params and trigger reload
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
      await transactionApi.delete(selectedTransaction.id);
      toast.success("Transaction deleted successfully");
      loadTransactions();
      loadStats();
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
