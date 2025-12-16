/* eslint-disable indent */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useTransactionPage } from "../transactions/hooks/useTransactionPage";
import { Statistics } from "../transactions/components/Statistics";
import { StatsCharts } from "../budgets/stats/components/StatsCharts";
import { useBudgets } from "../budgets/hooks/useBudgets";
import { useEffect, useState } from "react";
import { RemindersStats } from "../reminders/components/reminders-stats";
import { useReminders } from "../reminders/hooks/use-reminders";
import { RemindersFilters } from "../reminders/types/reminder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, TrendingUp, Wallet, BellRing } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const { stats: transactionStats } = useTransactionPage();
  const tD = useTranslations("Dashboard");

  const [filters] = useState<RemindersFilters>({
    page: 1,
    limit: 12,
    orderBy: "due_date",
    order: "asc",
  });

  const { data: response, isLoading: remindersLoading } = useReminders(filters);
  const reminders = response?.data || [];

  const [budgetStats, setBudgetStats] = useState({
    total_amount: 0,
    total_spent: 0,
    alert_count: 0,
    exceeded_count: 0,
  });

  const {
    budgets,
    getStats,
    getBudgets,
    loading: budgetsLoading,
  } = useBudgets();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const statsData = await getStats();
      await getBudgets();
      setBudgetStats(statsData);
    } catch {
      // Handle error appropriately
    }
  };

  const totalReminders = reminders.length;
  const urgentReminders = reminders.filter(
    (r) =>
      new Date(r.due_date) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {tD("common.welcome")},{" "}
                <span className="text-primary">{user ? user.name : "..."}</span>
              </h1>
              <p className="text-muted-foreground mt-2">{tD("common.desc")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="px-3 py-1">
                <CalendarDays className="w-4 h-4 mr-1" />
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {tD("common.budget-total")}
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${budgetStats.total_amount.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {tD("common.category-all")}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {tD("common.spent-total")}
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${budgetStats.total_spent.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {budgetStats.total_amount > 0
                  ? `${(
                      (budgetStats.total_spent / budgetStats.total_amount) *
                      100
                    ).toFixed(1)}% of budget`
                  : "No budget set"}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {tD("common.reminders")}
              </CardTitle>
              <BellRing className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalReminders}</div>
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground">
                  {urgentReminders} {tD("common.urgent")}
                </p>
                {urgentReminders > 0 && (
                  <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {tD("common.budget-alert")}
              </CardTitle>
              <div className="relative">
                <BellRing className="h-4 w-4 text-muted-foreground" />
                {budgetStats.alert_count > 0 && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {budgetStats.alert_count}
              </div>
              <p className="text-xs text-muted-foreground">
                {budgetStats.exceeded_count} {tD("common.exceeded")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-flex">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {tD("common.overview")}
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="flex items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              {tD("common.transactions")}
            </TabsTrigger>
            <TabsTrigger value="budgets" className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              {tD("common.budgets")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Reminders Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <BellRing className="w-5 h-5" />
                    {tD("common.reminders-upcoming")}
                  </CardTitle>
                  <Badge variant="secondary">
                    {totalReminders} {tD("common.total")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {remindersLoading ? (
                  <div className="space-y-3">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                ) : (
                  <RemindersStats reminders={reminders} />
                )}
              </CardContent>
            </Card>

            {/* Transactions & Budgets Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    {tD("common.transactions-recent")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Statistics stats={transactionStats} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      {tD("common.budget-overview")}
                    </CardTitle>
                    <Badge variant="outline">
                      {budgets.length} {tD("common.categories")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {budgetsLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-48 w-full" />
                    </div>
                  ) : (
                    <StatsCharts budgets={budgets} loading={budgetsLoading} />
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>{tD("common.transaction-details")}</CardTitle>
              </CardHeader>
              <CardContent>
                <Statistics stats={transactionStats} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budgets">
            <Card>
              <CardHeader>
                <CardTitle>{tD("common.budget-analytics")}</CardTitle>
              </CardHeader>
              <CardContent>
                <StatsCharts budgets={budgets} loading={budgetsLoading} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions Footer */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <p className="text-sm text-muted-foreground text-center">
              {tD("common.last-updated")}:{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
