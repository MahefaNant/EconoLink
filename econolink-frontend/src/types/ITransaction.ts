/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type TransactionType = "INCOME" | "EXPENSE" | "TRANSFER";

export interface TransactionQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: TransactionType | "ALL";
  startDate?: string;
  endDate?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface TransactionStats {
  totalCount: number;
  totalIncome: number;
  totalExpense: number;
  net: number;
}

export interface ITransaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  type: TransactionType;
  notes?: string;
  location?: string;
  receipt_image?: string;
  is_recurring?: boolean;
  recurring_id?: string;
  recurring_rule?: any;
  account_id: string;
  to_account_id?: string;
  category_id?: string;
  user_id: string;
  local_id?: string;
  is_synced?: boolean;
  last_sync_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateTransactionDto {
  amount: number;
  description: string;
  date?: string;
  type: TransactionType;
  notes?: string;
  location?: string;
  receipt_image?: string;
  is_recurring?: boolean;
  recurring_id?: string;
  recurring_rule?: any;
  account_id: string;
  to_account_id?: string;
  category_id?: string;
  local_id?: string;
  is_synced?: boolean;
}

export interface UpdateTransactionDto extends Partial<CreateTransactionDto> {}
