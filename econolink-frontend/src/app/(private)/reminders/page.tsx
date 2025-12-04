/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Bell } from "lucide-react";
import { useReminders } from "./hooks/use-reminders";
import {
  useDeleteReminder,
  useToggleReminder,
} from "./hooks/use-reminder-mutations";
import { ReminderCard } from "./components/reminder-card";
import { ReminderDialog } from "./components/reminder-dialog";
import { RemindersStats } from "./components/reminders-stats";
import { ReminderFilters } from "./components/reminder-filters";
import { ReminderBulkActions } from "./components/reminder-bulk-actions";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reminder, RemindersFilters } from "./types/reminder";

export default function RemindersPage() {
  const [filters, setFilters] = useState<RemindersFilters>({
    page: 1,
    limit: 12,
    orderBy: "due_date",
    order: "asc",
  });
  const [selectedReminders, setSelectedReminders] = useState<string[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState<Reminder | null>(
    null
  );
  const [viewMode, setViewMode] = useState<"list" | "today" | "upcoming">(
    "list"
  );

  const { data: response, isLoading } = useReminders(filters);
  //   const { data: stats } = useReminderStats();
  const deleteMutation = useDeleteReminder();
  const toggleMutation = useToggleReminder();

  const reminders = response?.data || [];
  const total = response?.total || 0;
  const pages = response?.pages || 1;
  const currentPage = response?.page || 1;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const filteredReminders = reminders.filter((reminder) => {
    const dueDate = new Date(reminder.due_date);
    dueDate.setHours(0, 0, 0, 0);

    switch (viewMode) {
      case "today":
        return !reminder.is_completed && dueDate.getTime() === today.getTime();
      case "upcoming":
        return !reminder.is_completed && dueDate > today && dueDate <= tomorrow;
      default:
        return true;
    }
  });

  const handleEdit = (reminder: Reminder) => {
    setSelectedReminder(reminder);
    setShowCreateDialog(true);
  };

  const handleDelete = (reminder: Reminder) => {
    if (
      confirm(
        `Êtes-vous sûr de vouloir supprimer le rappel "${reminder.title}" ?`
      )
    ) {
      deleteMutation.mutate(reminder.id);
    }
  };

  const handleToggle = (reminder: Reminder) => {
    toggleMutation.mutate({
      id: reminder.id,
      is_completed: !reminder.is_completed,
    });
  };

  const handleSelect = (id: string, selected: boolean) => {
    if (selected) {
      setSelectedReminders((prev) => [...prev, id]);
    } else {
      setSelectedReminders((prev) =>
        prev.filter((reminderId) => reminderId !== id)
      );
    }
  };

  const handleSelectAll = () => {
    if (selectedReminders.length === filteredReminders.length) {
      setSelectedReminders([]);
    } else {
      setSelectedReminders(filteredReminders.map((r) => r.id));
    }
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Bell className="h-8 w-8" />
              Mes Rappels
            </h1>
            <p className="text-muted-foreground mt-2">
              Gérez vos rappels et ne manquez plus rien d'important
            </p>
          </div>
          <Button onClick={() => setShowCreateDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nouveau rappel
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <RemindersStats reminders={reminders} />
        </div>

        {/* Filtres et Tabs */}
        <Card className="p-6 mb-8">
          <Tabs
            defaultValue="list"
            value={viewMode}
            onValueChange={setViewMode as any}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="list">Tous les rappels</TabsTrigger>
                <TabsTrigger value="today">Aujourd'hui</TabsTrigger>
                <TabsTrigger value="upcoming">À venir</TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                {selectedReminders.length > 0 && (
                  <Button variant="outline" size="sm" onClick={handleSelectAll}>
                    {selectedReminders.length === filteredReminders.length
                      ? "Tout désélectionner"
                      : "Tout sélectionner"}
                  </Button>
                )}
              </div>
            </div>

            <TabsContent value={viewMode} className="mt-0">
              <ReminderFilters filters={filters} onFiltersChange={setFilters} />
            </TabsContent>
          </Tabs>
        </Card>

        {/* Reminders Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: filters.limit || 12 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48"></div>
              </Card>
            ))}
          </div>
        ) : filteredReminders.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {filteredReminders.map((reminder) => (
                <ReminderCard
                  key={reminder.id}
                  reminder={reminder}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onToggle={handleToggle}
                  isSelected={selectedReminders.includes(reminder.id)}
                  onSelect={handleSelect}
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
            <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
              <Bell className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Aucun rappel trouvé</h3>
            <p className="text-muted-foreground mb-6">
              {filters.search
                ? "Aucun rappel ne correspond à votre recherche."
                : viewMode === "today"
                ? "Vous n'avez aucun rappel pour aujourd'hui."
                : viewMode === "upcoming"
                ? "Vous n'avez aucun rappel à venir."
                : "Commencez par créer votre premier rappel."}
            </p>
            <Button className="mx-4" onClick={() => setShowCreateDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Créer un rappel
            </Button>
          </Card>
        )}

        {/* Pagination Info */}
        {total > 0 && (
          <div className="mt-6 text-sm text-muted-foreground text-center">
            Affichage de {(currentPage - 1) * (filters.limit || 12) + 1} à{" "}
            {Math.min(currentPage * (filters.limit || 12), total)} sur {total}{" "}
            rappels
          </div>
        )}

        {/* Bulk Actions */}
        <ReminderBulkActions
          selectedIds={selectedReminders}
          onSelectionChange={setSelectedReminders}
        />

        {/* Dialog */}
        <ReminderDialog
          open={showCreateDialog}
          onOpenChange={(open) => {
            setShowCreateDialog(open);
            if (!open) setSelectedReminder(null);
          }}
          reminder={selectedReminder}
        />
      </div>
    </div>
  );
}
