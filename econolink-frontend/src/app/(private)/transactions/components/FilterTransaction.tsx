"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Download, X } from "lucide-react";

import { TransactionQueryParams, TransactionType } from "@/types/ITransaction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SetStateAction } from "react";
import { useTranslations } from "next-intl";

interface FilterTransactionProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: () => void;
  handleClearSearch: () => void;
  queryParams: TransactionQueryParams;
  handleTypeFilter: (type: TransactionType | "ALL") => void;
  setFiltersOpen: (open: boolean) => void;
  filtersOpen: boolean;
  handleSort: (sortBy: string, sortOrder: "asc" | "desc") => void;
  dateRange: { startDate: string; endDate: string };
  setDateRange: (
    value: SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  ) => void;
  handleDateFilterApply: () => void;
  handleDateFilterClear: () => void;
}

export function FilterTransaction({
  searchInput,
  setSearchInput,
  handleSearch,
  handleClearSearch,
  queryParams,
  handleTypeFilter,
  setFiltersOpen,
  filtersOpen,
  handleSort,
  dateRange,
  setDateRange,
  handleDateFilterApply,
  handleDateFilterClear,
}: FilterTransactionProps) {
  const tTr = useTranslations("Transaction.Filter");
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Input with Button */}
            <div className="relative flex-1 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={tTr("search-placeholder")}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  className="pl-10 pr-10"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button
                onClick={handleSearch}
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                {tTr("search")}
              </Button>
            </div>

            <div className="flex gap-2">
              <Select
                value={queryParams.type}
                onValueChange={(value: TransactionType | "ALL") =>
                  handleTypeFilter(value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">{tTr("type.all")}</SelectItem>
                  <SelectItem value="INCOME">{tTr("type.income")}</SelectItem>
                  <SelectItem value="EXPENSE">{tTr("type.expense")}</SelectItem>
                  <SelectItem value="TRANSFER">
                    {tTr("type.transfer")}
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <Filter className="h-4 w-4" />
              </Button>

              <Select
                value={`${queryParams.sortBy}-${queryParams.sortOrder}`}
                onValueChange={(value) => {
                  const [sortBy, sortOrder] = value.split("-") as [
                    string,
                    "asc" | "desc"
                  ];
                  handleSort(sortBy, sortOrder);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">
                    {tTr("sort.newest")}
                  </SelectItem>
                  <SelectItem value="date-asc">{tTr("sort.oldest")}</SelectItem>
                  <SelectItem value="amount-desc">
                    {tTr("sort.hight-low")}
                  </SelectItem>
                  <SelectItem value="amount-asc">
                    {tTr("sort.low-hight")}
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {filtersOpen && (
            <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-muted/50">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">
                  {tTr("range")}
                </label>
                <div className="flex gap-2">
                  <Input
                    type="date"
                    value={dateRange.startDate}
                    onChange={(e) =>
                      setDateRange((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                    className="flex-1"
                  />
                  <Input
                    type="date"
                    value={dateRange.endDate}
                    onChange={(e) =>
                      setDateRange((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                    className="flex-1"
                  />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <Button onClick={handleDateFilterApply}>{tTr("apply")}</Button>
                <Button variant="outline" onClick={handleDateFilterClear}>
                  {tTr("clear")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
