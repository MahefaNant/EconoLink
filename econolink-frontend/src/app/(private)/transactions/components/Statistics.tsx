/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Statistics.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowLeftRight } from "lucide-react";

interface StatisticsProps {
  stats: any;
  isOnline?: boolean;
}

export function Statistics({ stats, isOnline = true }: StatisticsProps) {
  if (!stats) return null;

  const financialStats = stats.financial || stats;
  const transferStats = stats.transfers;

  return (
    <div className="space-y-4">
      {/* Offline fashion banner */}
      {!isOnline && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-amber-800">
            <span>⚡</span>
            <span className="text-sm">
              Basic statistics - connect for advanced analytics
            </span>
          </div>
        </div>
      )}

      {/* Financial statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Income"
          value={financialStats.total_income}
          format="currency"
          icon={<TrendingUp className="h-4 w-4 text-green-500" />}
        />
        <StatCard
          title="Total Expense"
          value={financialStats.total_expense}
          format="currency"
          icon={<TrendingDown className="h-4 w-4 text-red-500" />}
        />
        <StatCard
          title="Net Cash Flow"
          value={financialStats.net || financialStats.net_cash_flow}
          format="currency"
          variant={financialStats.net >= 0 ? "default" : "destructive"}
        />
        <StatCard
          title="Transactions"
          value={financialStats.totalCount || financialStats.total_count}
          format="number"
        />
      </div>

      {/* Stats transfers */}
      {transferStats && transferStats.totalTransfers > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <ArrowLeftRight className="h-4 w-4 text-blue-500" />
              Internal Transfers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">
                  {transferStats.total_transfers}
                </p>
                <p className="text-sm text-muted-foreground">Total Transfers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(transferStats.total_transferred || 0)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Amount Transferred
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Advanced stats only online */}
      {isOnline && stats.topCategories && stats.topCategories.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Top Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {stats.topCategories
                .slice(0, 5)
                .map((category: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm">{category.category_name}</span>
                    <span className="text-sm font-medium">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(category.total_amount)}
                    </span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Composant StatCard helper
function StatCard({
  title,
  value,
  format = "currency",
  variant = "default",
  icon,
}: any) {
  const formattedValue =
    format === "currency"
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value || 0)
      : value;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div
          className={`text-2xl font-bold ${
            variant === "destructive" ? "text-red-500" : ""
          }`}
        >
          {formattedValue}
        </div>
      </CardContent>
    </Card>
  );
}
