import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { fmtCurrency } from "@/lib/format";
import { useAuthStore } from "@/stores/useAuthStore";
import { Budget } from "@/types/budget";
import { Progress } from "@radix-ui/react-progress";
import { Wallet, TrendingUp, BarChart3, Target } from "lucide-react";
import { useTranslations } from "next-intl";

interface IStatsOverViewProps {
  stats: {
    total_amount: number;
    total_spent: number;
    alert_count: number;
    exceeded_count: number;
  };
  budgets: Budget[];
}

export function StatsOverView({ stats, budgets }: IStatsOverViewProps) {
  // Calculate sup stats
  const user = useAuthStore((s) => s.user);
  const tB = useTranslations("Budgets");
  const totalRemaining = stats.total_amount - stats.total_spent;
  const overallUsage =
    stats.total_amount > 0 ? (stats.total_spent / stats.total_amount) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {tB("stats.overview.total")}
          </CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {fmtCurrency(
              String(stats.total_amount || "0"),
              user?.currency,
              undefined,
              true
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {tB("stats.across")} {budgets.length} {tB("title")}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {tB("stats.total-spent")}
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {fmtCurrency(
              String(stats.total_spent || "0"),
              user?.currency,
              undefined,
              true
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {fmtCurrency(
              String(totalRemaining || "0"),
              user?.currency,
              undefined,
              true
            )}{" "}
            {tB("stats.remaining")}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {tB("stats.overview.usage")}
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{overallUsage.toFixed(1)}%</div>
          <Progress value={overallUsage} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {tB("stats.overview.active")}
          </CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{budgets.length}</div>
          <p className="text-xs text-muted-foreground">
            {stats.alert_count + stats.exceeded_count}{" "}
            {tB("stats.overview.attention")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
