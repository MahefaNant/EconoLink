import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Budget } from "@/types/budget";
import { Badge } from "@/components/ui/badge";

interface ITopBudgetsProps {
  budgets: Budget[];
  loading: boolean;
}

export function TopBudgets({ budgets, loading }: ITopBudgetsProps) {
  // Top (5) budgets
  const topBudgetsByUsage = [...budgets]
    .sort((a, b) => {
      const usageA = (a.spent / a.amount) * 100;
      const usageB = (b.spent / b.amount) * 100;
      return usageB - usageA;
    })
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Budgets by Usage</CardTitle>
        <CardDescription>
          Budgets with highest spending percentage
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        ) : topBudgetsByUsage.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No budget data available
          </div>
        ) : (
          <div className="space-y-4">
            {topBudgetsByUsage.map((budget, index) => {
              const usage = (budget.spent / budget.amount) * 100;
              return (
                <div
                  key={budget.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium truncate">
                          {budget.name}
                        </span>
                        <Badge
                          variant={
                            budget.status === "EXCEEDED"
                              ? "destructive"
                              : budget.status === "ALERT"
                              ? "secondary"
                              : "default"
                          }
                          className="text-xs"
                        >
                          {budget.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ${budget.spent.toLocaleString()} / $
                        {budget.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-lg font-semibold ${
                        usage > 100
                          ? "text-destructive"
                          : usage > 80
                          ? "text-warning"
                          : "text-primary"
                      }`}
                    >
                      {usage.toFixed(1)}%
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {budget.period.toLowerCase()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
