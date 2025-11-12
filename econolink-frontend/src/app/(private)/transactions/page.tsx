/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type {
  ITransaction,
  TransactionQueryParams,
  TransactionStats,
} from "@/types/ITransaction";
import { TransactionType } from "@/types/ITransaction";
import { transactionApi } from "./lib/transaction";
import { toast } from "sonner";
import TransactionDialog from "./components/TransactionDialog";
import DeleteDialog from "./components/DeleteDialog";
import { TransactionCard } from "./components/TransactionCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TransactionsPage() {
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const loadTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await transactionApi.getAll(queryParams);
      setTransactions(response.data);
      setPagination(response.pagination);
    } catch (error) {
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
    } catch (error) {
      console.error("Failed to load stats");
    }
  }, [queryParams.startDate, queryParams.endDate]);

  useEffect(() => {
    loadTransactions();
    loadStats();
  }, [loadTransactions, loadStats]);

  const handleSearch = (searchTerm: string) => {
    setQueryParams((prev) => ({
      ...prev,
      search: searchTerm,
      page: 1, // Reset to first page on search
    }));
  };

  const handleTypeFilter = (type: TransactionType | "ALL") => {
    setQueryParams((prev) => ({
      ...prev,
      type,
      page: 1,
    }));
  };

  const handleDateFilter = (startDate?: string, endDate?: string) => {
    setQueryParams((prev) => ({
      ...prev,
      startDate,
      endDate,
      page: 1,
    }));
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
    setDialogOpen(true);
  };

  const handleDelete = (transaction: ITransaction) => {
    setSelectedTransaction(transaction);
    setDeleteDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedTransaction(null);
    loadTransactions();
    loadStats();
  };

  const handleDeleteConfirm = async () => {
    if (!selectedTransaction) return;

    try {
      await transactionApi.delete(selectedTransaction.id);
      toast.success("Transaction deleted successfully");
      loadTransactions();
      loadStats();
    } catch (error) {
      toast.error("Failed to delete transaction");
    } finally {
      setDeleteDialogOpen(false);
      setSelectedTransaction(null);
    }
  };

  const getTypeIcon = (type: TransactionType) => {
    switch (type) {
      case "INCOME":
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case "EXPENSE":
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      case "TRANSFER":
        return <ArrowLeftRight className="h-4 w-4 text-blue-500" />;
    }
  };

  const getTypeVariant = (type: TransactionType) => {
    switch (type) {
      case "INCOME":
        return "default";
      case "EXPENSE":
        return "destructive";
      case "TRANSFER":
        return "secondary";
    }
  };

  if (loading && transactions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">
            Manage your financial transactions
          </p>
        </div>
        <Button onClick={() => setDialogOpen(true)} className="sm:self-stretch">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Statistics */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Total
              </div>
              <div className="text-2xl font-bold">{stats.totalCount || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Income
              </div>
              <div className="text-2xl font-bold text-green-600">
                ${(stats.totalIncome || 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Expense
              </div>
              <div className="text-2xl font-bold text-red-600">
                ${(stats.totalExpense || 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Net
              </div>
              <div
                className={`text-2xl font-bold ${
                  (stats.net || 0) >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ${(stats.net || 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  value={queryParams.search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select
                  value={queryParams.type}
                  onValueChange={(value: TransactionType | "ALL") =>
                    handleTypeFilter(value)
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ALL">All Types</SelectItem>
                    <SelectItem value="INCOME">Income</SelectItem>
                    <SelectItem value="EXPENSE">Expense</SelectItem>
                    <SelectItem value="TRANSFER">Transfer</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                >
                  <Filter className="h-4 w-4" />
                </Button>

                <Select
                  value={`${queryParams.sortBy}-${queryParams.sortOrder}`}
                  onValueChange={(value) => {
                    const [sortBy, sortOrder] = value.split("-") as [
                      string,
                      "asc" | "desc"
                    ];
                    handleSort(sortBy, sortOrder);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">
                      Date: Newest First
                    </SelectItem>
                    <SelectItem value="date-asc">Date: Oldest First</SelectItem>
                    <SelectItem value="amount-desc">
                      Amount: High to Low
                    </SelectItem>
                    <SelectItem value="amount-asc">
                      Amount: Low to High
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {filtersOpen && (
              <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-muted/50">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">
                    Date Range
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="date"
                      value={queryParams.startDate}
                      onChange={(e) =>
                        handleDateFilter(e.target.value, queryParams.endDate)
                      }
                      className="flex-1"
                    />
                    <Input
                      type="date"
                      value={queryParams.endDate}
                      onChange={(e) =>
                        handleDateFilter(queryParams.startDate, e.target.value)
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => handleDateFilter(undefined, undefined)}
                  >
                    Clear Dates
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transactions</CardTitle>
          <div className="text-sm text-muted-foreground">
            Showing {transactions.length} of {pagination.total}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-2 p-4">
            {transactions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No transactions found
              </div>
            ) : (
              transactions.map((transaction) => (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  getTypeIcon={getTypeIcon}
                  getTypeVariant={getTypeVariant}
                />
              ))
            )}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-muted-foreground">
                Page {pagination.page} of {pagination.pages}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={!pagination.hasPrev}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={!pagination.hasNext}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dialogs */}
      <TransactionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        transaction={selectedTransaction}
        onSuccess={handleDialogClose}
      />

      <DeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        transaction={selectedTransaction}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
