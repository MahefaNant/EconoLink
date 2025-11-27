/* eslint-disable @typescript-eslint/no-empty-object-type */
// types/budget.ts
export type BudgetPeriod = "MONTHLY" | "WEEKLY" | "YEARLY" | "DAILY";

export type BudgetStatus = "NORMAL" | "ALERT" | "EXCEEDED";

export type BudgetSortEnum = "created_at" | "percentage_used" | "name";
export type OrderEnum = "asc" | "desc";

export interface Budget {
  id: string;
  name: string;
  amount: number;
  spent: number;
  period: BudgetPeriod;
  start_date: string;
  end_date?: string;
  alert_at?: number;
  category_id?: string;
  user_id: string;
  category_name?: string | null;
  percentage_used?: number;
  status?: BudgetStatus;
}

export interface CreateBudgetDto {
  name: string;
  amount: number;
  period?: BudgetPeriod;
  start_date: string;
  end_date?: string;
  alert_at?: number;
  category_id?: string;
}

export interface UpdateBudgetDto extends Partial<CreateBudgetDto> {}

export interface BudgetStats {
  total_amount: number;
  total_spent: number;
  alert_count: number;
  exceeded_count: number;
}

export interface BudgetsResponse {
  page: number;
  limit: number;
  total: number;
  items: Budget[];
}

export interface BudgetQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: BudgetStatus;
  period?: BudgetPeriod;
  orderBy?: BudgetSortEnum;
  order?: OrderEnum;
}

export interface StatusDataItem {
  name: string;
  value: number;
  [key: string]: unknown;
}

export interface BudgetChartItem {
  name: string;
  budget: number;
  spent: number;
  remaining: number;
  usage: string;
  [key: string]: unknown;
}

export type BudgetFormData = {
  name: string;
  amount: string; // Toujours string dans le form
  period: BudgetPeriod;
  start_date: Date;
  end_date?: Date | null;
  alert_at?: string | null; // Toujours string dans le form
  category_id?: string | null;
};
