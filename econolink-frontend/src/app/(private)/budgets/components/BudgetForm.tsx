/* eslint-disable indent */
// components/budget/BudgetForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Budget, CreateBudgetDto, BudgetFormData } from "@/types/budget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CategorySelectWithCreate } from "../../transactions/create/components/CategorySelectWithCreate";
import { BudgetPeriodSelect } from "./BudgetPeriodSelect";
import { useTranslations } from "next-intl";

interface BudgetFormProps {
  budget?: Budget;
  onSubmit: (data: CreateBudgetDto) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

export function BudgetForm({
  budget,
  onSubmit,
  onCancel,
  isLoading = false,
}: BudgetFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const tB = useTranslations("Budgets");

  // plan with REQUIRED  category_id
  const budgetFormSchema = z.object({
    name: z.string().min(1, tB("form.name-required")),
    amount: z
      .string()
      .min(1, tB("form.amount-required"))
      .refine(
        (val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0,
        tB("form.amount-greater")
      ),
    period: z.enum(["MONTHLY", "WEEKLY", "YEARLY", "DAILY"]),
    start_date: z.date(),
    end_date: z.date().optional().nullable(),
    alert_at: z
      .string()
      .optional()
      .nullable()
      .refine(
        (val) =>
          val === null ||
          val === "" ||
          (!isNaN(parseFloat(val || "0")) &&
            parseFloat(val || "0") >= 0 &&
            parseFloat(val || "0") <= 100),
        tB("form.alert-between")
      ),
    category_id: z.string().min(1, tB("form.category-required")),
  });

  const form = useForm<BudgetFormData>({
    resolver: zodResolver(budgetFormSchema),
    defaultValues: {
      name: budget?.name || "",
      amount: budget?.amount ? budget.amount.toString() : "",
      period: budget?.period || "MONTHLY",
      start_date: budget?.start_date ? new Date(budget.start_date) : new Date(),
      end_date: budget?.end_date ? new Date(budget.end_date) : null,
      alert_at: budget?.alert_at ? budget.alert_at.toString() : null,
      category_id: budget?.category_id || "",
    },
  });

  const handleSubmit = async (data: BudgetFormData) => {
    setIsSubmitting(true);
    try {
      // Convertir les strings en numbers pour l'API
      const submitData: CreateBudgetDto = {
        name: data.name,
        amount: parseFloat(data.amount),
        period: data.period,
        start_date: data.start_date.toISOString().split("T")[0],
        end_date: data.end_date
          ? data.end_date.toISOString().split("T")[0]
          : undefined,
        alert_at:
          data.alert_at && data.alert_at !== ""
            ? parseFloat(data.alert_at)
            : undefined,
        category_id: data.category_id,
      };

      await onSubmit(submitData);
    } catch {
      //console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tB("form.name-budget")}</FormLabel>
              <FormControl>
                <Input placeholder={tB("form.name-placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tB("form.amount")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="period"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tB("form.period")}</FormLabel>
                <FormControl>
                  <BudgetPeriodSelect
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alert_at"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{tB("form.alert")} (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="80"
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{tB("form.start-date")}</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>{tB("form.pick-date")}</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{tB("form.end-date")} (Optional)</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>{tB("form.pick-date")}</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value || undefined}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tB("form.category")}</FormLabel>
              <FormControl>
                <CategorySelectWithCreate
                  value={field.value}
                  onValueChange={field.onChange}
                  type="EXPENSE"
                  placeholder={tB("form.category-placeholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3 justify-end pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting || isLoading}
          >
            {tB("dialog.button.cancel")}
          </Button>
          <Button type="submit" disabled={isSubmitting || isLoading}>
            {isSubmitting
              ? tB("dialog.button.save-loading")
              : budget
              ? tB("dialog.button.udapte")
              : tB("dialog.button.create")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
