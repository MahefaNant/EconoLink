"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Goal, GoalFilters } from "@/types/goal";
import {
  Search,
  Plus,
  Filter,
  TrendingUp,
  ArrowUpDown,
  Target,
  CheckCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDeleteGoal, useGoals } from "./hooks/use-goals";
import { Progress } from "@/components/ui/progress";
import { GoalCard } from "./components/goal-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GoalDialog } from "./components/goal-dialog";
import { ProgressDialog } from "./components/progress-dialog";
import { DeleteDialog } from "./components/delete-dialog";

export default function GoalsPage() {
  const [filters, setFilters] = useState<GoalFilters>({
    page: 1,
    limit: 9,
    orderBy: "created_at",
    order: "desc",
  });
  const [searchInput, setSearchInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [actionType, setActionType] = useState<
    "edit" | "progress" | "delete" | null
  >(null);

  const { data: response, isLoading } = useGoals(filters);
  const deleteMutation = useDeleteGoal();

  const goals = response?.data || [];
  const total = response?.total || 0;
  const pages = response?.pages || 1;
  const currentPage = response?.page || 1;

  const filteredGoals = goals.filter((goal) => {
    const isCompleted = goal.current >= goal.target;
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && isCompleted) ||
      (statusFilter === "in-progress" && !isCompleted);

    return matchesStatus;
  });

  const totalGoals = total;
  const completedGoals = goals.filter((g) => g.current >= g.target).length;
  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);
  const totalCurrent = goals.reduce((sum, g) => sum + g.current, 0);
  const overallProgress =
    totalTarget > 0 ? (totalCurrent / totalTarget) * 100 : 0;

  const handleEdit = (goal: Goal) => {
    setSelectedGoal(goal);
    setActionType("edit");
  };

  const handleAddProgress = (goal: Goal) => {
    setSelectedGoal(goal);
    setActionType("progress");
  };

  const handleDelete = (goal: Goal) => {
    setSelectedGoal(goal);
    setActionType("delete");
  };

  const handleConfirmDelete = () => {
    if (selectedGoal) {
      deleteMutation.mutate(selectedGoal.id);
    }
    setActionType(null);
    setSelectedGoal(null);
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const handleSearch = () => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      search: searchInput || undefined,
    }));
  };

  const handleOrderChange = (orderBy: string, order: "asc" | "desc") => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      orderBy,
      order,
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleSort = () => {
    const newOrder = filters.order === "asc" ? "desc" : "asc";
    handleOrderChange(filters.orderBy || "created_at", newOrder);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Mes Objectifs</h1>
          <p className="text-muted-foreground mt-2">
            Suivez et gérez vos objectifs financiers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Objectifs totaux</p>
                <p className="text-2xl font-bold mt-2">{totalGoals}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Terminés</p>
                <p className="text-2xl font-bold mt-2">{completedGoals}</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total collecté</p>
                <p className="text-2xl font-bold mt-2">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(totalCurrent)}
                </p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-sm border">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Progression globale</p>
                <span className="text-sm font-semibold">
                  {overallProgress.toFixed(1)}%
                </span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Rechercher un objectif..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10"
              />
            </div>
            <Button
              onClick={handleSearch}
              variant="outline"
              className="shrink-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-3">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrer par statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les objectifs</SelectItem>
                <SelectItem value="in-progress">En cours</SelectItem>
                <SelectItem value="completed">Terminés</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={toggleSort} variant="outline" className="shrink-0">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              {filters.order === "asc" ? "Croissant" : "Décroissant"}
            </Button>

            <Button
              onClick={() => setShowCreateDialog(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shrink-0"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nouvel objectif
            </Button>
          </div>
        </div>

        {/* Goals Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: filters.limit || 9 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-xl h-64"></div>
              </div>
            ))}
          </div>
        ) : filteredGoals.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredGoals.map((goal) => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onAddProgress={handleAddProgress}
                />
              ))}
            </div>

            {/* Pagination */}
            {pages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: Math.min(5, pages) }).map((_, i) => {
                      let pageNum;
                      if (pages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= pages - 2) {
                        pageNum = pages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            onClick={() => handlePageChange(pageNum)}
                            isActive={currentPage === pageNum}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          handlePageChange(Math.min(pages, currentPage + 1))
                        }
                        className={
                          currentPage === pages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 rounded-xl border">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {filters.search ? "Aucun objectif trouvé" : "Aucun objectif"}
            </h3>
            <p className="text-gray-500 mb-6">
              {filters.search
                ? "Aucun objectif ne correspond à votre recherche."
                : "Commencez par créer votre premier objectif financier."}
            </p>
            <Button onClick={() => setShowCreateDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Créer un objectif
            </Button>
          </div>
        )}

        {/* Pagination Info */}
        {total > 0 && (
          <div className="mt-6 text-sm text-gray-500 text-center">
            Affichage de {(currentPage - 1) * (filters.limit || 10) + 1} à{" "}
            {Math.min(currentPage * (filters.limit || 10), total)} sur {total}{" "}
            objectifs
          </div>
        )}

        {/* Dialogs */}
        <GoalDialog
          open={showCreateDialog || actionType === "edit"}
          onOpenChange={(open) => {
            if (!open) {
              setShowCreateDialog(false);
              setActionType(null);
              setSelectedGoal(null);
            }
          }}
          goal={selectedGoal}
        />

        <ProgressDialog
          open={actionType === "progress"}
          onOpenChange={(open) => {
            if (!open) {
              setActionType(null);
              setSelectedGoal(null);
            }
          }}
          goal={selectedGoal}
        />

        <DeleteDialog
          open={actionType === "delete"}
          onOpenChange={(open) => {
            if (!open) {
              setActionType(null);
              setSelectedGoal(null);
            }
          }}
          onConfirm={handleConfirmDelete}
          goalName={selectedGoal?.name}
          isLoading={deleteMutation.isPending}
        />
      </div>
    </div>
  );
}
