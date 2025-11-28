/* eslint-disable react-hooks/exhaustive-deps */

// Version avec recharts (optionnelle)
"use client";

import { useState, useEffect } from "react";
import { useBudgets } from "../hooks/useBudgets";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PieChart as PieChartIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { StatsOverView } from "./components/StatsOverview";
import { StatsCharts } from "./components/StatsCharts";
import { StatsPeriodDistribution } from "./components/StatsPeriodDistribution";
import { TopBudgets } from "./components/TopBudgets";
import { StatsAlertSummary } from "./components/StatsAlertSummary";

export default function BudgetStatsPage() {
  const [stats, setStats] = useState({
    total_amount: 0,
    total_spent: 0,
    alert_count: 0,
    exceeded_count: 0,
  });
  const { budgets, getStats, getBudgets, loading } = useBudgets();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const statsData = await getStats();
      await getBudgets();
      setStats(statsData);
    } catch {
      toast.error("Failed to load statistics");
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/budgets">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <PieChartIcon className="h-8 w-8 text-primary" />
            Budget Statistics
          </h1>
          <p className="text-muted-foreground">
            Insights and analytics for your budgets
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <StatsOverView budgets={budgets} stats={stats} />

      {/* Charts Section */}
      <StatsCharts budgets={budgets} loading={loading} />

      {/* Period Distribution */}
      <StatsPeriodDistribution budgets={budgets} loading={loading} />

      {/* Top Budgets by Usage */}
      <TopBudgets budgets={budgets} loading={loading} />

      {/* Alert Summary */}
      {(stats.alert_count > 0 || stats.exceeded_count > 0) && (
        <StatsAlertSummary stats={stats} />
      )}
    </div>
  );
}
