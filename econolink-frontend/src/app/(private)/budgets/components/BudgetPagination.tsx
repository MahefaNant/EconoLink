// components/budget/BudgetPagination.tsx
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface BudgetPaginationProps {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  onPageChange: (page: number) => void;
  className?: string;
}

export function BudgetPagination({
  pagination,
  onPageChange,
  className,
}: BudgetPaginationProps) {
  const tB = useTranslations("Budgets");
  const { page, totalPages, hasNext, hasPrev, total } = pagination;

  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, page - delta);
      i <= Math.min(totalPages - 1, page + delta);
      i++
    ) {
      range.push(i);
    }

    if (page - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (page + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className={cn("flex items-center justify-between px-2", className)}>
      <div className="flex-1 text-sm text-muted-foreground">
        {tB("showing")} {(page - 1) * pagination.limit + 1}-
        {Math.min(page * pagination.limit, total)} / {total} {tB("title")}
      </div>

      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={!hasPrev}
          className="gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          {tB("dialog.button.previous")}
        </Button>

        {getVisiblePages().map((pageNum, index) =>
          pageNum === "..." ? (
            <Button
              key={index}
              variant="outline"
              size="sm"
              disabled
              className="w-9 px-0"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              key={index}
              variant={pageNum === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(pageNum as number)}
              className="w-9 px-0"
            >
              {pageNum}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={!hasNext}
          className="gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
