/* eslint-disable indent */
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, Filter, CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { RemindersFilters } from "../types/reminder";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

interface ReminderFiltersProps {
  filters: RemindersFilters;
  onFiltersChange: (filters: RemindersFilters) => void;
}

export function ReminderFilters({
  filters,
  onFiltersChange,
}: ReminderFiltersProps) {
  const tR = useTranslations("Reminders");
  const handleSearch = (search: string) => {
    onFiltersChange({ ...filters, search, page: 1 });
  };

  const handleStatusChange = (value: string) => {
    const is_completed =
      value === "completed" ? true : value === "pending" ? false : undefined;
    onFiltersChange({ ...filters, is_completed, page: 1 });
  };

  const handleRecurringChange = (value: string) => {
    const is_recurring =
      value === "recurring"
        ? true
        : value === "non-recurring"
        ? false
        : undefined;
    onFiltersChange({ ...filters, is_recurring, page: 1 });
  };

  const handleDateFromChange = (date: Date | undefined) => {
    onFiltersChange({
      ...filters,
      date_from: date ? format(date, "yyyy-MM-dd") : undefined,
      page: 1,
    });
  };

  const handleDateToChange = (date: Date | undefined) => {
    onFiltersChange({
      ...filters,
      date_to: date ? format(date, "yyyy-MM-dd") : undefined,
      page: 1,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      page: 1,
      limit: filters.limit,
      orderBy: filters.orderBy,
      order: filters.order,
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.is_completed !== undefined ||
    filters.is_recurring !== undefined ||
    filters.date_from ||
    filters.date_to;

  return (
    <div className="space-y-4">
      {/* search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder={tR("form.search-placeholder")}
            value={filters.search || ""}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Advanced Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <Select
          value={
            filters.is_completed === undefined
              ? "all"
              : filters.is_completed
              ? "completed"
              : "pending"
          }
          onValueChange={handleStatusChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{tR("filter.all-status")}</SelectItem>
            <SelectItem value="pending">{tR("filter.waiting")}</SelectItem>
            <SelectItem value="completed">{tR("filter.completed")}</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={
            filters.is_recurring === undefined
              ? "all"
              : filters.is_recurring
              ? "recurring"
              : "non-recurring"
          }
          onValueChange={handleRecurringChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{tR("filter.all-type")}</SelectItem>
            <SelectItem value="recurring">{tR("filter.recurring")}</SelectItem>
            <SelectItem value="non-recurring">
              {tR("filter.non-recurring")}
            </SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !filters.date_from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.date_from
                ? format(new Date(filters.date_from), "dd/MM/yyyy")
                : tR("common.from")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={
                filters.date_from ? new Date(filters.date_from) : undefined
              }
              onSelect={handleDateFromChange}
              initialFocus
              locale={fr}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !filters.date_to && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {filters.date_to
                ? format(new Date(filters.date_to), "dd/MM/yyyy")
                : tR("common.to")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={filters.date_to ? new Date(filters.date_to) : undefined}
              onSelect={handleDateToChange}
              initialFocus
              locale={fr}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {tR("filter.filter-active")}
          </span>
          <div className="flex flex-wrap gap-2">
            {filters.search && (
              <Badge variant="secondary" className="gap-1">
                {tR("filter.search")} {filters.search}
                <button onClick={() => handleSearch("")} className="ml-1">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.is_completed !== undefined && (
              <Badge variant="secondary" className="gap-1">
                {tR("filter.status")}{" "}
                {filters.is_completed ? "Complétés" : "En attente"}
                <button
                  onClick={() => handleStatusChange("all")}
                  className="ml-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.is_recurring !== undefined && (
              <Badge variant="secondary" className="gap-1">
                {tR("filter.type")}{" "}
                {filters.is_recurring
                  ? tR("filter.recurring")
                  : tR("filter.non-recurring")}
                <button
                  onClick={() => handleRecurringChange("all")}
                  className="ml-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {(filters.date_from || filters.date_to) && (
              <Badge variant="secondary" className="gap-1">
                {tR("filter.period")} {filters.date_from || "∞"} -{" "}
                {filters.date_to || "∞"}
                <button
                  onClick={() => {
                    handleDateFromChange(undefined);
                    handleDateToChange(undefined);
                  }}
                  className="ml-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-1 h-3 w-3" />
              {tR("dialog.delete-all-simple")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
