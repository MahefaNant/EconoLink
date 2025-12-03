/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface Goal {
  id: string;
  name: string;
  description?: string;
  target: number;
  current: number;
  deadline?: string;
  color: string;
  icon: string;
  auto_transfer: boolean;
  transfer_account_id?: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreateGoalDto {
  name: string;
  description?: string;
  target: number;
  deadline?: string;
  color?: string;
  icon?: string;
  auto_transfer?: boolean;
  transfer_account_id?: string;
}

export interface UpdateGoalDto extends Partial<CreateGoalDto> {}

export interface GoalsResponse {
  data: Goal[];
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface GoalFilters {
  page?: number;
  limit?: number;
  search?: string;
  orderBy?: string;
  order?: "asc" | "desc";
}
