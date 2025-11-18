"use client";

import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plus,
  ArrowUp,
  ArrowDown,
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { TransactionType } from "@/types/ITransaction";
import DeleteDialog from "./components/DeleteDialog";
import { TransactionCard } from "./components/TransactionCard";
import Link from "next/link";
import { useTransactionPage } from "./hooks/useTransactionPage";
import { Statistics } from "./components/Statistics";
import { FilterTransaction } from "./components/FilterTransaction";

export default function TransactionsPage() {
  const {
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
  } = useTransactionPage();

  const typeIcons: Record<TransactionType, JSX.Element> = {
    INCOME: <ArrowUp className="h-4 w-4 text-green-500" />,
    EXPENSE: <ArrowDown className="h-4 w-4 text-red-500" />,
    TRANSFER: <ArrowLeftRight className="h-4 w-4 text-blue-500" />,
  };

  const getTypeIcon = (type: TransactionType) => typeIcons[type];

  const typeVariants: Record<
    TransactionType,
    "default" | "destructive" | "secondary"
  > = {
    INCOME: "default",
    EXPENSE: "destructive",
    TRANSFER: "secondary",
  };

  const getTypeVariant = (type: TransactionType) => typeVariants[type];

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
        <Link href="/transactions/create">
          <Button className="sm:self-stretch">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </Link>
      </div>

      {/* Statistics */}
      <Statistics stats={stats} />

      {/* Filters and Search */}
      <FilterTransaction
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        queryParams={queryParams}
        handleTypeFilter={handleTypeFilter}
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
        handleSort={handleSort}
        dateRange={dateRange}
        setDateRange={setDateRange}
        handleDateFilterApply={handleDateFilterApply}
        handleDateFilterClear={handleDateFilterClear}
      />

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
      <DeleteDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        transaction={selectedTransaction}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
