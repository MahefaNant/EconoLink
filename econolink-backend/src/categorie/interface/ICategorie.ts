export type Ttransaction_type = "INCOME" | "EXPENSE" | "TRANSFER";

export interface ICategorie {
  user_id?: string;
  name: string;
  description?: string;
  color?: string;
  icon?: string;
  type: Ttransaction_type;
}
