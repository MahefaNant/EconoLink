/* eslint-disable @typescript-eslint/no-explicit-any */
// Version avec recharts (optionnelle)
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useBudgets } from "../hooks/useBudgets";

// Types pour les données du graphique
interface StatusDataItem extends Record<string, unknown> {
  name: string;
  value: number;
}

interface BudgetChartItem {
  name: string;
  budget: number;
  spent: number;
  remaining: number;
  usage: string;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function BudgetStatsPage() {
  const [stats, setStats] = useState({
    total_amount: 0,
    total_spent: 0,
    alert_count: 0,
    exceeded_count: 0,
  });
  const { budgets, getStats, loading } = useBudgets();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const statsData = await getStats();
      setStats(statsData);
    } catch (err) {
      toast.error("Failed to load statistics");
    }
  };

  const budgetData: BudgetChartItem[] = budgets.map((budget) => ({
    name: budget.name,
    budget: budget.amount,
    spent: budget.spent,
    remaining: budget.amount - budget.spent,
    usage: ((budget.spent / budget.amount) * 100).toFixed(1),
  }));

  const statusData: StatusDataItem[] = [
    {
      name: "Normal",
      value: budgets.filter((b) => b.status === "NORMAL").length,
    },
    {
      name: "Alert",
      value: budgets.filter((b) => b.status === "ALERT").length,
    },
    {
      name: "Exceeded",
      value: budgets.filter((b) => b.status === "EXCEEDED").length,
    },
  ];

  // Custom label pour le pie chart
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    if (!percent) return null;

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header et Stats Cards restent identiques à la version précédente */}
      {/* ... */}

      {/* Charts avec recharts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget vs Spent Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Budget vs Spent</CardTitle>
            <CardDescription>
              Comparison of budgeted amounts vs actual spending
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-80 w-full" />
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis fontSize={12} />
                  <Tooltip
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      "",
                    ]}
                  />
                  <Bar dataKey="budget" fill="#0088FE" name="Budget" />
                  <Bar dataKey="spent" fill="#00C49F" name="Spent" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Status</CardTitle>
            <CardDescription>Distribution of budget statuses</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-80 w-full" />
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [value, "Count"]} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Reste du contenu... */}
    </div>
  );
}
