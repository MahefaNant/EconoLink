// components/budget/BudgetPeriodSelect.tsx
import { BudgetPeriod } from "@/types/budget";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { budgetPeriodConfig } from "../libs/budget-utils";
import { useTranslations } from "next-intl";

interface BudgetPeriodSelectProps {
  value: BudgetPeriod;
  onValueChange: (value: BudgetPeriod) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function BudgetPeriodSelect({
  value,
  onValueChange,
  placeholder = "Select period...",
  disabled = false,
}: BudgetPeriodSelectProps) {
  const tB = useTranslations("Budgets");
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {value && (
            <div className="flex items-center gap-2">
              <span>{budgetPeriodConfig(tB)[value].icon}</span>
              <span>{budgetPeriodConfig(tB)[value].label}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(budgetPeriodConfig(tB)).map(([periodKey, config]) => (
          <SelectItem key={periodKey} value={periodKey}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span>{config.icon}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{config.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {config.description}
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {config.days}d
              </Badge>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
