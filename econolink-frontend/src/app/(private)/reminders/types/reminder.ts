/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Reminder {
  id: string;
  title: string;
  description?: string;
  due_date: string;
  is_completed: boolean;
  is_recurring: boolean;
  recurring_rule?: any;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreateReminderDto {
  title: string;
  description?: string;
  due_date: string;
  is_recurring?: boolean;
  recurring_rule?: any;
}

export interface UpdateReminderDto extends Partial<CreateReminderDto> {
  is_completed?: boolean;
}

export interface RemindersResponse {
  data: Reminder[];
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export type RemindersOrderField =
  | "created_at"
  | "updated_at"
  | "due_date"
  | "title";

export interface RemindersFilters {
  page?: number;
  limit?: number;
  search?: string;
  is_completed?: boolean;
  is_recurring?: boolean;
  date_from?: string;
  date_to?: string;
  orderBy?: RemindersOrderField;
  order?: "asc" | "desc";
}
