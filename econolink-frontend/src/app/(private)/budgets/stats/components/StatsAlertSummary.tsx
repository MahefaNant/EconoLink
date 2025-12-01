import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const tB = useTranslations("Budgets");
  return (
    <Card className="border-warning">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-warning">
          <AlertTriangle className="h-5 w-5" />
          {tB("stats.attention")}
        </CardTitle>
        <CardDescription>{tB("stats.require")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.alert_count > 0 && (
            <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning">
              <div>
                <div className="font-medium">{tB("stats.alert")}</div>
                <div className="text-sm text-muted-foreground">
                  {tB("stats.spend-limit")}
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
                <div className="font-medium">{tB("stats.exceeded-budget")}</div>
                <div className="text-sm text-muted-foreground">
                  {tB("stats.over-spend-limit")}
                </div>
              </div>
              <div className="text-2xl font-bold text-destructive">
                {stats.exceeded_count}
              </div>
            </div>
          )}
        </div>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/budgets/alerts">{tB("stats.all-alerts")}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
