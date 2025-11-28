// components/budget/BudgetCard.tsx
import { Budget } from "@/types/budget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, Tag, Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface BudgetCardProps {
  budget: Budget;
  onEdit: (budget: Budget) => void;
  onDelete: (id: string) => void;
}

const statusConfig = {
  NORMAL: {
    label: "Normal",
    variant: "default" as const,
    color: "text-primary",
  },
  ALERT: {
    label: "Alert",
    variant: "secondary" as const,
    color: "text-warning",
  },
  EXCEEDED: {
    label: "Exceeded",
    variant: "destructive" as const,
    color: "text-destructive",
  },
};

const periodConfig = {
  MONTHLY: { label: "Monthly", icon: Calendar },
  WEEKLY: { label: "Weekly", icon: Calendar },
  YEARLY: { label: "Yearly", icon: Calendar },
  DAILY: { label: "Daily", icon: Calendar },
};

export function BudgetCard({ budget, onEdit, onDelete }: BudgetCardProps) {
  const percentageUsed = budget.percentage_used
    ? Number(budget.percentage_used)
    : budget.amount > 0
    ? (budget.spent / budget.amount) * 100
    : 0;

  // Or with a sup security :
  const safePercentageUsed = Math.min(
    typeof percentageUsed === "number" ? percentageUsed : 0,
    100
  );
  const statusInfo = statusConfig[budget.status || "NORMAL"];
  const PeriodIcon = periodConfig[budget.period].icon;

  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-200 border-l-4",
        budget.status === "EXCEEDED" && "border-l-destructive",
        budget.status === "ALERT" && "border-l-warning",
        budget.status === "NORMAL" && "border-l-primary"
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <AlertTriangle className={cn("h-5 w-5", statusInfo.color)} />
            {budget.name}
          </CardTitle>
          <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              ${budget.spent.toLocaleString()} / $
              {budget.amount.toLocaleString()}
            </span>
            <span className="font-medium">
              {safePercentageUsed.toFixed(1)}%
            </span>
          </div>
          <Progress
            value={Math.min(percentageUsed, 100)}
            className={cn(
              "h-2",
              budget.status === "EXCEEDED" && "bg-destructive/20",
              budget.status === "ALERT" && "bg-warning/20",
              budget.status === "NORMAL" && "bg-primary/20"
            )}
          />
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <PeriodIcon className="h-4 w-4" />
              <span>{periodConfig[budget.period].label}</span>
            </div>

            {budget.category_name && (
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{budget.category_name}</span>
              </div>
            )}
          </div>

          {budget.alert_at && (
            <Badge variant="outline" className="text-xs">
              Alert at {budget.alert_at}%
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(budget)}
            className="flex-1 gap-2"
          >
            <Edit className="h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(budget.id)}
            className="flex-1 gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
