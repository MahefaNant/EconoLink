/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  ITransaction,
  TransactionQueryParams,
  TransactionType,
  CreateTransactionDto,
  UpdateTransactionDto,
} from "@/types/ITransaction";
import { useState, useCallback, useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTransactionStats } from "./useTransactionStats";
import {
  createTransactionServ,
  getTransactionByIdServ,
  handleDeleteConfirmServ,
  loadTransactionsServ,
  updateTransactionServ,
} from "../lib/transactionService";
import { IPagination } from "@/interface/IPagination";

export function useTransactionPage() {
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;

  const { basicStats, advancedStats, loadStats } = useTransactionStats();

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
  const [pagination, setPagination] = useState<IPagination>({
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

  const loadTransactions = useCallback(
    async () =>
      loadTransactionsServ(
        userId,
        queryParams,
        setLoading,
        setTransactions,
        setPagination
      ),
    [queryParams, userId]
  );

  useEffect(() => {
    loadTransactions();
    loadStats("month");
  }, [userId, queryParams]);

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

  const handleDeleteConfirm = async () =>
    handleDeleteConfirmServ(
      loadTransactions,
      loadStats,
      selectedTransaction,
      setDeleteDialogOpen,
      setSelectedTransaction
    );

  // Function to create a transaction (online + offline)
  const createTransaction = async (dto: CreateTransactionDto) =>
    createTransactionServ(userId, dto, loadTransactions);

  // Function to update a transaction (online + offline)
  const updateTransaction = async (id: string, dto: UpdateTransactionDto) =>
    updateTransactionServ(id, dto, loadTransactions);

  // In useTransactionPage.ts - Add this function
  const getTransactionById = async (id: string) =>
    await getTransactionByIdServ(id, userId);

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
    createTransaction,
    updateTransaction,
    deleteTransaction: handleDeleteConfirm,
    loadTransactions,
    getTransactionById,
  };
}
