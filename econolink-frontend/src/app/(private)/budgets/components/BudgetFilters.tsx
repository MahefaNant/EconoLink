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
import { useTranslations } from "next-intl";

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
  const tB = useTranslations("Budgets");

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
      page: 1,
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
          {tB("filters.title")}
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{tB("filters.t-b")}</SheetTitle>
          <SheetDescription>{tB("filters.desc")}</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6 m-4">
          {/* Status Filter */}
          <div className="space-y-3">
            <Label htmlFor="status">{tB("filters.status")}</Label>
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
                <SelectItem value="all">{tB("filters.select.all")}</SelectItem>
                <SelectItem value="NORMAL">
                  {tB("filters.select.normal")}
                </SelectItem>
                <SelectItem value="ALERT">
                  {tB("filters.select.alert")}
                </SelectItem>
                <SelectItem value="EXCEEDED">
                  {tB("filters.select.exceeded")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Period Filter */}
          <div className="space-y-3">
            <Label htmlFor="period">{tB("filters.period")}</Label>
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
                <SelectValue placeholder={tB("filters.all")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{tB("filters.all")}</SelectItem>
                <SelectItem value="MONTHLY">
                  {tB("filters.select.monthly")}
                </SelectItem>
                <SelectItem value="WEEKLY">
                  {tB("filters.select.weekly")}
                </SelectItem>
                <SelectItem value="YEARLY">
                  {tB("filters.select.yearly")}
                </SelectItem>
                <SelectItem value="DAILY">
                  {tB("filters.select.daily")}
                </SelectItem>
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
                  <SelectItem value="name">{tB("form.name")}</SelectItem>
                  <SelectItem value="percentage_used">
                    {tB("filters.use-percentage")}
                  </SelectItem>
                  <SelectItem value="created_at">
                    {tB("filters.date-create")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="order"> {tB("filters.order")}</Label>
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
                  <SelectItem value="asc">{tB("filters.ascending")}</SelectItem>
                  <SelectItem value="desc">
                    {tB("filters.descending")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Items per page */}
          <div className="space-y-3">
            <Label htmlFor="limit">{tB("filters.item-per-page")}</Label>
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

        <div className="flex gap-3 m-4">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1 gap-2"
          >
            <X className="h-4 w-4" />
            {tB("dialog.button.reset")}
          </Button>
          <Button onClick={() => setOpen(false)} className="flex-1">
            {tB("dialog.button.apply")}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
