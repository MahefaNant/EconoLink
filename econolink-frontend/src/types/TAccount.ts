export type TAccount = {
  id: string;
  name: string;
  type: string;
  balance: string | number | null;
  color: string | null;
  icon: string | null;
  is_active: boolean | null;
  user_id: string;
  created_at: string | null;
  updated_at: string | null;
  isTemporary?: boolean;
};
