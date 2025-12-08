/* eslint-disable indent */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  Clock,
  Edit2,
  Trash2,
  CheckCircle,
  RefreshCw,
  Bell,
  MoreVertical,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Reminder } from "../types/reminder";
import { fmtDate, formatTime, getRemainingTime } from "@/lib/format";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";

interface ReminderCardProps {
  reminder: Reminder;
  onEdit: (reminder: Reminder) => void;
  onDelete: (reminder: Reminder) => void;
  onToggle: (reminder: Reminder) => void;
  isSelected?: boolean;
  onSelect?: (id: string, selected: boolean) => void;
}

export function ReminderCard({
  reminder,
  onEdit,
  onDelete,
  onToggle,
  isSelected = false,
  onSelect,
}: ReminderCardProps) {
  const tR = useTranslations("Reminders");
  const [isHovered, setIsHovered] = useState(false);

  const isOverdue =
    new Date(reminder.due_date) < new Date() && !reminder.is_completed;
  const remainingTime = getRemainingTime(reminder.due_date);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-md",
        isSelected && "ring-2 ring-primary",
        reminder.is_completed && "opacity-70"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            {onSelect && (
              <Checkbox
                checked={isSelected}
                onCheckedChange={(checked) =>
                  onSelect?.(reminder.id, checked as boolean)
                }
                className="mt-1"
              />
            )}
            <div className="flex-1 min-w-0">
              <CardTitle
                className={cn(
                  "text-lg font-semibold truncate",
                  reminder.is_completed && "line-through text-muted-foreground"
                )}
              >
                {reminder.title}
              </CardTitle>
              {reminder.description && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {reminder.description}
                </p>
              )}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "opacity-0 transition-opacity",
                  (isHovered || isSelected) && "opacity-100"
                )}
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onToggle(reminder)}>
                {reminder.is_completed ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    {tR("common.reactive")}
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    {tR("bulk.mark-complete")}
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(reminder)}>
                <Edit2 className="mr-2 h-4 w-4" />
                {tR("dialog.button.edit-simple")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(reminder)}
                className="text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {tR("dialog.button.delete-simple")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {/* Date and Time */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{fmtDate(reminder.due_date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{formatTime(reminder.due_date)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {reminder.is_recurring && (
                <Badge variant="outline" className="gap-1">
                  <RefreshCw className="h-3 w-3" />
                  {tR("common.recurent")}
                </Badge>
              )}

              <Badge
                variant={
                  reminder.is_completed
                    ? "secondary"
                    : isOverdue
                    ? "destructive"
                    : "default"
                }
                className={cn(
                  reminder.is_completed &&
                    "bg-emerald-100 text-emerald-800 hover:bg-emerald-100",
                  isOverdue && "bg-red-100 text-red-800 hover:bg-red-100"
                )}
              >
                {reminder.is_completed ? (
                  <>
                    <CheckCircle className="mr-1 h-3 w-3" />
                    {tR("common.ended")}
                  </>
                ) : isOverdue ? (
                  <>
                    <Bell className="mr-1 h-3 w-3" />
                    {tR("common.late")}
                  </>
                ) : (
                  <>
                    <Bell className="mr-1 h-3 w-3" />
                    {remainingTime}
                  </>
                )}
              </Badge>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onToggle(reminder)}
            >
              {reminder.is_completed ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  {tR("common.reactive")}
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  {tR("bulk.mark-done")}
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onEdit(reminder)}
            >
              <Edit2 className="mr-2 h-4 w-4" />
              {tR("dialog.button.edit-simple")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
