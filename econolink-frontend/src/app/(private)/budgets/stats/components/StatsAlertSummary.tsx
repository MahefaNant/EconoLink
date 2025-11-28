import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

interface IStatsAlertSummaryProps {
  stats: {
    total_amount: number;
    total_spent: number;
    alert_count: number;
    exceeded_count: number;
  };
}

export function StatsAlertSummary({ stats }: IStatsAlertSummaryProps) {
  return (
    <Card className="border-warning">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-warning">
          <AlertTriangle className="h-5 w-5" />
          Attention Needed
        </CardTitle>
        <CardDescription>
          Budgets that require your immediate attention
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.alert_count > 0 && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning">
              <div>
                <div className="font-medium">Alert Budgets</div>
                <div className="text-sm text-muted-foreground">
                  Approaching spending limits
                </div>
              </div>
              <div className="text-2xl font-bold text-warning">
                {stats.alert_count}
              </div>
            </div>
          )}
          {stats.exceeded_count > 0 && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive">
              <div>
                <div className="font-medium">Exceeded Budgets</div>
                <div className="text-sm text-muted-foreground">
                  Over spending limits
                </div>
              </div>
              <div className="text-2xl font-bold text-destructive">
                {stats.exceeded_count}
              </div>
            </div>
          )}
        </div>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/budgets/alerts">View All Alerts</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
