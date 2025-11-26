/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Statistics.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fmtCurrency, fmtNumberCompact } from "@/lib/format";
import { useAuthStore } from "@/stores/useAuthStore";
import { TrendingUp, TrendingDown, ArrowLeftRight, Eye } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { getTranslatedCategorie } from "../../category/lib/category";

interface StatisticsProps {
  stats: any;
  isOnline?: boolean;
}

export function Statistics({ stats, isOnline = true }: StatisticsProps) {
  const t = useTranslations();
  const tTr = useTranslations("Transaction");

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
            <span className="text-sm">{tTr("Statistics.offline-desc")}</span>
          </div>
        </div>
      )}

      {/* Financial statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title={tTr("Statistics.total-income")}
          value={financialStats.total_income}
          icon={<TrendingUp className="h-4 w-4 text-green-500" />}
        />
        <StatCard
          title={tTr("Statistics.total-expense")}
          value={financialStats.total_expense}
          icon={<TrendingDown className="h-4 w-4 text-red-500" />}
        />
        <StatCard
          title={tTr("Statistics.net")}
          value={financialStats.net || financialStats.net_cash_flow}
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
              {tTr("Statistics.transfert-desc")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ValueWithPopover
                  value={transferStats.total_transfers}
                  format="number"
                  title={tTr("Statistics.total-transfer")}
                />
              </div>
              <div>
                <ValueWithPopover
                  value={transferStats.total_transferred || 0}
                  format="currency"
                  title={tTr("Statistics.amount-transfer")}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Advanced stats only online */}
      {isOnline && stats.topCategories && stats.topCategories.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">
              {tTr("Statistics.top-categories")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {stats.topCategories
                .slice(0, 5)
                .map((category: any, index: number) => {
                  const categorieTr = getTranslatedCategorie(
                    t,
                    category.category_name,
                    null
                  );
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center group"
                    >
                      <span className="text-sm">{categorieTr.name}</span>
                      <ValueWithPopover
                        value={category.total_amount}
                        format="currency"
                        compact={true}
                        className="text-sm font-medium"
                      />
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ValueWithPopover component
interface ValueWithPopoverProps {
  value: number;
  format: "currency" | "number";
  title?: string;
  compact?: boolean;
  className?: string;
}

function ValueWithPopover({
  value,
  format,
  title,
  compact = true,
  className = "",
}: ValueWithPopoverProps) {
  const user = useAuthStore((s) => s.user);
  const [isOpen, setIsOpen] = useState(false);

  // Format the compact value
  const formattedCompact =
    format === "currency"
      ? fmtCurrency(String(value), user?.currency, undefined, compact)
      : fmtNumberCompact(value);

  // Format the full value
  const formattedFull =
    format === "currency"
      ? fmtCurrency(String(value), user?.currency, undefined, false)
      : new Intl.NumberFormat().format(value);

  return (
    <div className="flex items-center gap-1">
      {title ? (
        <>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 hover:bg-transparent"
                aria-label="Show full value"
              >
                <Eye className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 text-sm" align="start">
              <div className="font-mono">{formattedFull}</div>
            </PopoverContent>
          </Popover>
          <div>
            <p className="text-2xl font-bold">{formattedCompact}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </>
      ) : (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span
                className={`${className} group-hover:opacity-80 transition-opacity`}
              >
                {formattedCompact}
              </span>
              <Eye className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2 text-sm" align="end">
            <div className="font-mono">{formattedFull}</div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

// Composant StatCard helper
function StatCard({
  title,
  value,
  format = undefined,
  variant = "default",
  icon,
}: any) {
  const user = useAuthStore((s) => s.user);
  const [isOpen, setIsOpen] = useState(false);

  const formattedValue = format
    ? fmtNumberCompact(value)
    : fmtCurrency(value, user?.currency, undefined, true);

  const fullValue = format
    ? new Intl.NumberFormat().format(value)
    : fmtCurrency(value, user?.currency, undefined, false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 hover:bg-transparent"
                aria-label="Show full value"
              >
                <Eye className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 text-sm">
              <div className="font-mono">{fullValue}</div>
            </PopoverContent>
          </Popover>
          <div
            className={`text-2xl font-bold ${
              variant === "destructive" ? "text-red-500" : ""
            }`}
          >
            {formattedValue}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
