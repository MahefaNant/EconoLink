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

  cursor?: string;
}
