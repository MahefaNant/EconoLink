export type BudgetStatus = {
  id: string;
  name: string;
  amount: number;
  spent: number;
  category_name: string | null;
  percentage_used: number;
  status: "NORMAL" | "ALERT" | "EXCEEDED";
  user_id: string;
};
