/* eslint-disable @typescript-eslint/no-explicit-any */
// components/budget/BudgetFilters.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";
import {
  BudgetQueryParams,
  BudgetStatus,
  BudgetPeriod,
  BudgetSortEnum,
  OrderEnum,
} from "@/types/budget";
import { Badge } from "@/components/ui/badge";

interface BudgetFiltersProps {
  filters: BudgetQueryParams;
  onFiltersChange: (filters: BudgetQueryParams) => void;
  onReset: () => void;
}

export function BudgetFilters({
  filters,
  onFiltersChange,
  onReset,
}: BudgetFiltersProps) {
  const [open, setOpen] = useState(false);

  const activeFiltersCount = Object.values(filters).filter(
    (value) =>
      value !== undefined &&
      value !== "" &&
      value !== 1 &&
      value !== 10 &&
      value !== "created_at" &&
      value !== "desc"
  ).length;

  const handleFilterChange = (key: keyof BudgetQueryParams, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
      page: 1, // Reset to first page when filters change
    });
  };

  const handleReset = () => {
    onReset();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filter Budgets</SheetTitle>
          <SheetDescription>
            Refine your budget list using the filters below.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Status Filter */}
          <div className="space-y-3">
            <Label htmlFor="status">Status</Label>
            <Select
              value={filters.status || "all"}
              onValueChange={(value: BudgetStatus | "all") =>
                handleFilterChange(
                  "status",
                  value === "all" ? undefined : value
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="NORMAL">Normal</SelectItem>
                <SelectItem value="ALERT">Alert</SelectItem>
                <SelectItem value="EXCEEDED">Exceeded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Period Filter */}
          <div className="space-y-3">
            <Label htmlFor="period">Period</Label>
            <Select
              value={filters.period || "all"}
              onValueChange={(value: BudgetPeriod | "all") =>
                handleFilterChange(
                  "period",
                  value === "all" ? undefined : value
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="All periods" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All periods</SelectItem>
                <SelectItem value="MONTHLY">Monthly</SelectItem>
                <SelectItem value="WEEKLY">Weekly</SelectItem>
                <SelectItem value="YEARLY">Yearly</SelectItem>
                <SelectItem value="DAILY">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label htmlFor="orderBy">Sort By</Label>
              <Select
                value={filters.orderBy || "created_at"}
                onValueChange={(value: BudgetSortEnum) =>
                  handleFilterChange("orderBy", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="percentage_used">
                    Usage Percentage
                  </SelectItem>
                  <SelectItem value="created_at">Date Created</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="order">Order</Label>
              <Select
                value={filters.order || "desc"}
                onValueChange={(value: OrderEnum) =>
                  handleFilterChange("order", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Items per page */}
          <div className="space-y-3">
            <Label htmlFor="limit">Items per page</Label>
            <Select
              value={String(filters.limit || 10)}
              onValueChange={(value) =>
                handleFilterChange("limit", Number(value))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1 gap-2"
          >
            <X className="h-4 w-4" />
            Reset
          </Button>
          <Button onClick={() => setOpen(false)} className="flex-1">
            Apply
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
