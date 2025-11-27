/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(dashboard)/budgets/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Budget, BudgetQueryParams } from "@/types/budget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, AlertTriangle, TrendingUp, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDebounce } from "@/hooks/useDebounce";
import { useBudgets } from "./hooks/useBudgets";
import { BudgetFilters } from "./components/BudgetFilters";
import { BudgetCard } from "./components/BudgetCard";
import { BudgetForm } from "./components/BudgetForm";
import { BudgetPagination } from "./components/BudgetPagination";

export default function BudgetsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);
  const [filters, setFilters] = useState<BudgetQueryParams>({
    page: 1,
    limit: 10,
    search: "",
    orderBy: "created_at",
    order: "desc",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const {
    budgets,
    pagination,
    loading,
    error,
    createBudget,
    getBudgets,
    updateBudget,
    deleteBudget,
    getStats,
  } = useBudgets();

  const [stats, setStats] = useState({
    total_amount: 0,
    total_spent: 0,
    alert_count: 0,
    exceeded_count: 0,
  });

  // Charger les données avec les filtres
  const loadData = useCallback(async () => {
    try {
      await getBudgets(filters);
    } catch {
      toast.error("Failed to load budgets");
    }
  }, [getBudgets, filters]);

  // Charger les stats séparément
  const loadStats = async () => {
    try {
      const statsData = await getStats();
      setStats(statsData);
    } catch {
      //console.error("Failed to load stats");
    }
  };

  useEffect(() => {
    loadData();
    loadStats();
  }, [loadData]);

  // Mettre à jour les filtres quand la recherche est debounced
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: debouncedSearch,
      page: 1, // Reset to first page when searching
    }));
  }, [debouncedSearch]);

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const handleFiltersChange = (newFilters: BudgetQueryParams) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      page: 1,
      limit: 10,
      search: "",
      orderBy: "created_at",
      order: "desc",
    });
    setSearchTerm("");
  };

  const handleCreateBudget = async (data: any) => {
    try {
      await createBudget(data);
      setShowCreateForm(false);
      toast.success("Budget created successfully");
    } catch {
      toast.error("Failed to create budget");
    }
  };

  const handleUpdateBudget = async (data: any) => {
    if (!editingBudget) return;

    try {
      await updateBudget(editingBudget.id, data);
      setEditingBudget(null);
      toast.success("Budget updated successfully");
    } catch {
      toast.error("Failed to update budget");
    }
  };

  const handleDeleteBudget = async (id: string) => {
    if (!confirm("Are you sure you want to delete this budget?")) return;

    try {
      await deleteBudget(id);
      toast.success("Budget deleted successfully");
    } catch {
      toast.error("Failed to delete budget");
    }
  };

  const totalRemaining = stats.total_amount - stats.total_spent;

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center text-destructive">
          <p>Error loading budgets: {error}</p>
          <Button onClick={loadData} className="mt-4">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Budgets</h1>
          <p className="text-muted-foreground">
            Manage your spending and track your budgets
          </p>
        </div>
        <Button onClick={() => setShowCreateForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Create Budget
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${stats.total_amount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Across {pagination.total} budgets
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${stats.total_spent.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              ${totalRemaining.toLocaleString()} remaining
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.alert_count}</div>
            <p className="text-xs text-muted-foreground">
              Budgets needing attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exceeded</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.exceeded_count}</div>
            <p className="text-xs text-muted-foreground">Over budget limits</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search budgets..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <BudgetFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onReset={handleResetFilters}
          />

          <Badge variant="outline" className="px-3 py-1">
            Total: {pagination.total}
          </Badge>
          {stats.alert_count > 0 && (
            <Badge variant="secondary" className="px-3 py-1">
              Alerts: {stats.alert_count}
            </Badge>
          )}
          {stats.exceeded_count > 0 && (
            <Badge variant="destructive" className="px-3 py-1">
              Exceeded: {stats.exceeded_count}
            </Badge>
          )}
        </div>
      </div>

      {/* Budgets Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(pagination.limit)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-2 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 flex-1" />
                  <Skeleton className="h-9 flex-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : budgets.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Wallet className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No budgets found</h3>
            <p className="text-muted-foreground text-center mb-4">
              {filters.search
                ? "Try adjusting your search terms"
                : "Get started by creating your first budget"}
            </p>
            {!filters.search && (
              <Button onClick={() => setShowCreateForm(true)}>
                Create Budget
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgets.map((budget) => (
              <BudgetCard
                key={budget.id}
                budget={budget}
                onEdit={setEditingBudget}
                onDelete={handleDeleteBudget}
              />
            ))}
          </div>

          {/* Pagination */}
          <BudgetPagination
            pagination={pagination}
            onPageChange={handlePageChange}
            className="mt-6"
          />
        </>
      )}

      {/* Create Budget Dialog */}
      <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
          </DialogHeader>
          <BudgetForm
            onSubmit={handleCreateBudget}
            onCancel={() => setShowCreateForm(false)}
            isLoading={loading}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Budget Dialog */}
      <Dialog
        open={!!editingBudget}
        onOpenChange={(open) => !open && setEditingBudget(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Budget</DialogTitle>
          </DialogHeader>
          {editingBudget && (
            <BudgetForm
              budget={editingBudget}
              onSubmit={handleUpdateBudget}
              onCancel={() => setEditingBudget(null)}
              isLoading={loading}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
