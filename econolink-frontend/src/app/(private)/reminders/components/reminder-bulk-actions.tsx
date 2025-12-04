"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Check,
  Trash2,
  Archive,
  Bell,
  RefreshCw,
  MoreHorizontal,
} from "lucide-react";
import {
  useBulkUpdateReminders,
  useBulkDeleteReminders,
} from "../hooks/use-reminder-mutations";

interface ReminderBulkActionsProps {
  selectedIds: string[];
  onSelectionChange: (ids: string[]) => void;
}

export function ReminderBulkActions({
  selectedIds,
  onSelectionChange,
}: ReminderBulkActionsProps) {
  const bulkUpdate = useBulkUpdateReminders();
  const bulkDelete = useBulkDeleteReminders();

  const handleMarkAsCompleted = () => {
    bulkUpdate.mutate({
      ids: selectedIds,
      data: { is_completed: true },
    });
    onSelectionChange([]);
  };

  const handleMarkAsPending = () => {
    bulkUpdate.mutate({
      ids: selectedIds,
      data: { is_completed: false },
    });
    onSelectionChange([]);
  };

  const handleDelete = () => {
    bulkDelete.mutate(selectedIds);
    onSelectionChange([]);
  };

  const handleSetRecurring = () => {
    bulkUpdate.mutate({
      ids: selectedIds,
      data: { is_recurring: true },
    });
    onSelectionChange([]);
  };

  const handleSetNonRecurring = () => {
    bulkUpdate.mutate({
      ids: selectedIds,
      data: { is_recurring: false },
    });
    onSelectionChange([]);
  };

  if (selectedIds.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="lg" className="rounded-full shadow-lg">
            <MoreHorizontal className="mr-2 h-4 w-4" />
            {selectedIds.length} sélectionné{selectedIds.length > 1 ? "s" : ""}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={handleMarkAsCompleted}>
            <Check className="mr-2 h-4 w-4" />
            Marquer comme complété
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleMarkAsPending}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Marquer comme en attente
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSetRecurring}>
            <Bell className="mr-2 h-4 w-4" />
            Définir comme récurrent
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSetNonRecurring}>
            <Archive className="mr-2 h-4 w-4" />
            Définir comme non récurrent
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete} className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Supprimer
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
