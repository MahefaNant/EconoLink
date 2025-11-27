// lib/budget-utils.ts
import { BudgetPeriod } from "@/types/budget";

export const budgetPeriodConfig = {
  MONTHLY: {
    label: "Monthly",
    description: "Resets every month",
    icon: "📅",
    days: 30,
  },
  WEEKLY: {
    label: "Weekly",
    description: "Resets every week",
    icon: "📆",
    days: 7,
  },
  YEARLY: {
    label: "Yearly",
    description: "Resets every year",
    icon: "📊",
    days: 365,
  },
  DAILY: {
    label: "Daily",
    description: "Resets every day",
    icon: "☀️",
    days: 1,
  },
} as const;

export const budgetPeriodOptions = Object.entries(budgetPeriodConfig).map(
  ([value, config]) => ({
    value: value as BudgetPeriod,
    label: config.label,
    description: config.description,
    icon: config.icon,
  })
);

// Calculer la date de fin basée sur la période
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

// Vérifier si un budget doit être reset
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
