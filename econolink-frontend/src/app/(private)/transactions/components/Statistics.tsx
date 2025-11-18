import { Card, CardContent } from "@/components/ui/card";
import { TransactionStats } from "@/types/ITransaction";

export function Statistics({ stats }: { stats: TransactionStats | null }) {
  {
    if (stats) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Total
              </div>
              <div className="text-2xl font-bold">{stats.totalCount || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Income
              </div>
              <div className="text-2xl font-bold text-green-600">
                ${(stats.totalIncome || 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Expense
              </div>
              <div className="text-2xl font-bold text-red-600">
                ${(stats.totalExpense || 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">
                Net
              </div>
              <div
                className={`text-2xl font-bold ${
                  (stats.net || 0) >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ${(stats.net || 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return null;
  }
}
