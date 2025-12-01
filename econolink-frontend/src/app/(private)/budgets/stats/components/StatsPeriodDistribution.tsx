import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Budget } from "@/types/budget";
import { useTranslations } from "next-intl";

interface IStatsPeriodDistributionProps {
  loading: boolean;
  budgets: Budget[];
}

export function StatsPeriodDistribution({
  loading,
  budgets,
}: IStatsPeriodDistributionProps) {
  // Stats per period
  const periodStats = {
    monthly: budgets.filter((b) => b.period === "MONTHLY").length,
    weekly: budgets.filter((b) => b.period === "WEEKLY").length,
    yearly: budgets.filter((b) => b.period === "YEARLY").length,
    daily: budgets.filter((b) => b.period === "DAILY").length,
  };

  const tB = useTranslations("Budgets");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{tB("stats.periods.title")}</CardTitle>
        <CardDescription>{tB("stats.periods.desc")}</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {Object.entries(periodStats).map(([period, count]) => (
              <div key={period} className="flex items-center justify-between">
                <span className="text-sm font-medium capitalize">{period}</span>
                <div className="flex items-center gap-3">
                  <Progress
                    value={(count / budgets.length) * 100}
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground w-8 text-right">
                    {count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
