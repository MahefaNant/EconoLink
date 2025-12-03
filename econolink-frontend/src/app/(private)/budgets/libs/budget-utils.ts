/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/budget-utils.ts
import { BudgetPeriod } from "@/types/budget";

export const budgetPeriodConfig = (t: any) => ({
  MONTHLY: {
    label: t("stats.periods.config.monthly-label"),
    description: t("stats.periods.config.monthly-desc"),
    icon: "📅",
    days: 30,
  },
  WEEKLY: {
    label: t("stats.periods.config.weekly-label"),
    description: t("stats.periods.config.weekly-desc"),
    icon: "📆",
    days: 7,
  },
  YEARLY: {
    label: t("stats.periods.config.yearly-label"),
    description: t("stats.periods.config.yearly-label"),
    icon: "📊",
    days: 365,
  },
  DAILY: {
    label: t("stats.periods.config.daily-label"),
    description: t("stats.periods.config.daily-label"),
    icon: "☀️",
    days: 1,
  },
});

export const budgetPeriodOptions = (t: any) =>
  Object.entries(budgetPeriodConfig(t)).map(([value, config]) => ({
    value: value as BudgetPeriod,
    label: config.label,
    description: config.description,
    icon: config.icon,
  }));

// Calcule the end date based on the period
export const calculateEndDate = (
  startDate: Date,
  period: BudgetPeriod
): Date => {
  const endDate = new Date(startDate);

  switch (period) {
    case "DAILY":
      endDate.setDate(endDate.getDate() + 1);
      break;
    case "WEEKLY":
      endDate.setDate(endDate.getDate() + 7);
      break;
    case "MONTHLY":
      endDate.setMonth(endDate.getMonth() + 1);
      break;
    case "YEARLY":
      endDate.setFullYear(endDate.getFullYear() + 1);
      break;
    default:
      endDate.setMonth(endDate.getMonth() + 1); // Default to monthly
  }

  return endDate;
};

// Chech if a budget have to be reset
export const shouldResetBudget = (budget: {
  period: BudgetPeriod;
  start_date: string;
}): boolean => {
  const startDate = new Date(budget.start_date);
  const now = new Date();

  switch (budget.period) {
    case "DAILY":
      return now.getDate() !== startDate.getDate();
    case "WEEKLY":
      const weekAgo = new Date(now);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return startDate < weekAgo;
    case "MONTHLY":
      return now.getMonth() !== startDate.getMonth();
    case "YEARLY":
      return now.getFullYear() !== startDate.getFullYear();
    default:
      return false;
  }
};
