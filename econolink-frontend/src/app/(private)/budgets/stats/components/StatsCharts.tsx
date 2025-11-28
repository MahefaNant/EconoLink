/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Budget, BudgetChartItem, StatusDataItem } from "@/types/budget";
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

interface IStatsChartsProps {
  loading: boolean;
  budgets: Budget[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export function StatsCharts({ loading, budgets }: IStatsChartsProps) {
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

  const budgetData: BudgetChartItem[] = budgets.map((budget) => ({
    name:
      budget.name.length > 10
        ? budget.name.substring(0, 10) + "..."
        : budget.name,
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
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
          ) : budgetData.length === 0 ? (
            <div className="h-80 flex items-center justify-center text-muted-foreground">
              No budget data available
            </div>
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
                <Bar
                  dataKey="budget"
                  fill="#0088FE"
                  name="Budget"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="spent"
                  fill="#00C49F"
                  name="Spent"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Status</CardTitle>
          <CardDescription>Distribution of budget statuses</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="h-80 w-full" />
          ) : statusData.length === 0 ? (
            <div className="h-80 flex items-center justify-center text-muted-foreground">
              No status data available
            </div>
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
  );
}
