import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Budget } from "@/types/budget";
import { Progress } from "@radix-ui/react-progress";
import { Wallet, TrendingUp, BarChart3, Target } from "lucide-react";

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
  const totalRemaining = stats.total_amount - stats.total_spent;
  const overallUsage =
    stats.total_amount > 0 ? (stats.total_spent / stats.total_amount) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${stats.total_amount.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            Across {budgets.length} budgets
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${stats.total_spent.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            ${totalRemaining.toLocaleString()} remaining
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Overall Usage</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{overallUsage.toFixed(1)}%</div>
          <Progress value={overallUsage} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Budgets</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{budgets.length}</div>
          <p className="text-xs text-muted-foreground">
            {stats.alert_count + stats.exceeded_count} need attention
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
