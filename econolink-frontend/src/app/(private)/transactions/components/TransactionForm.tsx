/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ITransaction, TransactionType } from "@/types/ITransaction";
import { useState } from "react";

export function TransactionForm({
  initial,
  onCancel,
  onSave,
}: {
  initial?: Partial<ITransaction>;
  onCancel: () => void;
  onSave: (payload: any) => Promise<void>;
}) {
  const [payload, setPayload] = useState<Partial<ITransaction>>(initial || {});
  const [saving, setSaving] = useState(false);
  const handleChange = (k: keyof ITransaction, v: any) =>
    setPayload((s) => ({ ...s, [k]: v }));

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSaving(true);
    try {
      await onSave(payload);
    } catch (err) {
      alert(String(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-muted-foreground">
          Amount
        </label>
        <Input
          type="number"
          step="0.01"
          value={payload.amount ?? ""}
          onChange={(e) => handleChange("amount", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground">
          Description
        </label>
        <Input
          value={payload.description ?? ""}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground">
          Date
        </label>
        <Input
          type="datetime-local"
          value={
            payload.date
              ? new Date(payload.date).toISOString().slice(0, 16)
              : ""
          }
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground">
          Type
        </label>
        <select
          className="w-full rounded-lg border px-3 py-2 text-sm"
          value={payload.type ?? "EXPENSE"}
          onChange={(e) =>
            handleChange("type", e.target.value as TransactionType)
          }
        >
          <option value="EXPENSE">Expense</option>
          <option value="INCOME">Income</option>
          <option value="TRANSFER">Transfer</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground">
          Category
        </label>
        <Input
          value={payload.category_id ?? ""}
          onChange={(e) => handleChange("category_id", e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" className="flex-1" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 rounded-2xl border px-4 py-2 text-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
