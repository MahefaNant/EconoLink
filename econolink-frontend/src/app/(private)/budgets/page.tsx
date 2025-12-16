/* eslint-disable indent */
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
import { Progress } from "@/components/ui/progress";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteDialog } from "../goals/components/delete-dialog";
import { GoalCard } from "../goals/components/goal-card";
import { GoalDialog } from "../goals/components/goal-dialog";
import { ProgressDialog } from "../goals/components/progress-dialog";
import { useGoals, useDeleteGoal } from "../goals/hooks/use-goals";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import BudgetsPageSkeleton from "./components/BudgetPageSkeleton";

export default function BudgetsPage() {
  const isReady = useDocumentReadyState();
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

  if (!isReady) {
    return <BudgetsPageSkeleton />;
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Objectifs totaux</CardDescription>
              <CardTitle className="text-2xl">{totalGoals}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {completedGoals} terminés
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Terminés</CardDescription>
              <CardTitle className="text-2xl">{completedGoals}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-xs text-muted-foreground">
                  {totalGoals > 0
                    ? `${Math.round(
                        (completedGoals / totalGoals) * 100
                      )}% du total`
                    : "Aucun objectif"}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total collecté</CardDescription>
              <CardTitle className="text-2xl">
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                }).format(totalCurrent)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <TrendingUp className="h-4 w-4 text-amber-500" />
                <span className="text-xs text-muted-foreground">
                  sur{" "}
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(totalTarget)}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Progression globale</CardDescription>
              <CardTitle className="text-2xl">
                {overallProgress.toFixed(1)}%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <Progress value={overallProgress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
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
              className="shrink-0"
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
              <Card key={i} className="animate-pulse">
                <CardHeader className="pb-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mt-2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-2 bg-muted rounded w-full mb-4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardContent>
              </Card>
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
          <Card className="text-center py-16">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {filters.search ? "Aucun objectif trouvé" : "Aucun objectif"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {filters.search
                  ? "Aucun objectif ne correspond à votre recherche."
                  : "Commencez par créer votre premier objectif financier."}
              </p>
              <Button onClick={() => setShowCreateDialog(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Créer un objectif
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Pagination Info */}
        {total > 0 && (
          <div className="mt-6 text-sm text-muted-foreground text-center">
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
