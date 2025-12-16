/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Goal } from "@/types/goal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  DollarSign,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useAddProgress } from "../hooks/use-goals";
import { useAuthStore } from "@/stores/useAuthStore";
import { fmtCurrency } from "@/lib/format";
import { Slider } from "@/components/ui/slider";
import { useTranslations } from "next-intl";

const formSchema = z.object({
  amount: z.coerce
    .number({
      message: "Le montant doit être un nombre valide",
    })
    .min(0.01, "Le montant doit être supérieur à 0")
    .max(1000000, "Montant trop élevé"),
});

interface ProgressDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  goal?: Goal | null;
}

export function ProgressDialog({
  open,
  onOpenChange,
  goal,
}: ProgressDialogProps) {
  const tG = useTranslations("Goals");
  const [quickAmounts] = useState([10, 50, 100, 500, 1000]);
  const addProgressMutation = useAddProgress();
  const user = useAuthStore((s) => s.user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      amount: 0,
    },
  });

  const amount = form.watch("amount") || 0;

  if (!goal) return null;

  const currentProgress =
    goal.current > 0 ? (goal.current / goal.target) * 100 : 0;
  const newProgress = ((goal.current + amount) / goal.target) * 100;
  const remaining = goal.target - goal.current;
  const willComplete = amount >= remaining;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!goal) return;

    await addProgressMutation.mutateAsync({
      id: goal.id,
      amount: values.amount,
    });

    onOpenChange(false);
    form.reset();
  };

  const handleQuickAmount = (amount: number) => {
    form.setValue("amount", amount, { shouldValidate: true });
  };

  const handleSliderChange = (value: number[]) => {
    form.setValue("amount", value[0], { shouldValidate: true });
  };

  const isLoading = addProgressMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
            >
              {goal.icon}
            </div>
            <div>
              <DialogTitle className="text-xl">
                {tG("dialog.button.create-progress")}
              </DialogTitle>
              <DialogDescription>{goal.name}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Progress */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {tG("dialog.progress-now")}
              </span>
              <span className="font-semibold">
                {currentProgress.toFixed(1)}%
              </span>
            </div>
            <Progress value={currentProgress} className="h-2" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Target className="h-3 w-3" />
                  <span>{tG("dialog.obj-tot")}</span>
                </div>
                <p className="font-semibold">
                  {fmtCurrency(
                    String(goal.target || 0),
                    user?.currency,
                    undefined,
                    true
                  )}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  <span>{tG("dialog.collected")}</span>
                </div>
                <p className="font-semibold text-emerald-600">
                  {fmtCurrency(
                    String(goal.current || 0),
                    user?.currency,
                    undefined,
                    true
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* New Progress Preview */}
          {amount > 0 && (
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-emerald-800">
                    {tG("dialog.new-progress")}
                  </span>
                  <Badge
                    variant={willComplete ? "default" : "outline"}
                    className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                  >
                    {newProgress.toFixed(1)}%
                  </Badge>
                </div>
                <Progress
                  value={newProgress > 100 ? 100 : newProgress}
                  className="h-2 bg-emerald-100 [&>div]:bg-emerald-600"
                />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-emerald-700">{tG("dialog.new-total")}</p>
                    <p className="font-semibold text-emerald-900">
                      {fmtCurrency(
                        String(goal.current + amount || 0),
                        user?.currency,
                        undefined,
                        true
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-emerald-700">{tG("dialog.rest")}</p>
                    <p className="font-semibold text-emerald-900">
                      {fmtCurrency(
                        String(
                          Math.max(0, goal.target - (goal.current + amount)) ||
                            0
                        ),
                        user?.currency,
                        undefined,
                        true
                      )}
                    </p>
                  </div>
                </div>

                {willComplete && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-100 rounded border border-emerald-200">
                    <AlertCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <p className="text-sm text-emerald-800">
                      {tG("dialog.congrats")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Quick Amounts */}
              <div className="space-y-3">
                <FormLabel>{tG("dialog.quick-amount")}</FormLabel>
                <div className="flex flex-wrap gap-2">
                  {quickAmounts.map((quickAmount) => (
                    <Button
                      key={quickAmount}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAmount(quickAmount)}
                      className={
                        amount === quickAmount
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : ""
                      }
                    >
                      {fmtCurrency(
                        String(quickAmount || 0),
                        user?.currency,
                        undefined,
                        true
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Amount Input */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {tG("dialog.amount-to-add")}
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            €
                          </div>
                          <Input
                            {...field}
                            type="number"
                            step="0.01"
                            min="0.01"
                            max={goal.target - goal.current}
                            placeholder="0.00"
                            className="pl-10 text-lg py-6"
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value) || 0)
                            }
                          />
                        </div>

                        <div className="px-2">
                          <Slider
                            value={[field.value || 0]}
                            min={0}
                            max={goal.target - goal.current}
                            step={1}
                            onValueChange={handleSliderChange}
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground mt-2">
                            <span>0 €</span>
                            <span>
                              {tG("dialog.until")}{" "}
                              {fmtCurrency(
                                String(goal.target - goal.current || 0),
                                user?.currency,
                                undefined,
                                true
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription>
                      {tG("dialog.it-rest")}{" "}
                      {fmtCurrency(
                        String(remaining || 0),
                        user?.currency,
                        undefined,
                        true
                      )}{" "}
                      {tG("dialog.to-collect")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isLoading}
                  className="flex-1"
                >
                  {tG("dialog.button.cancel")}
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || amount <= 0}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {tG("dialog.button.create-loading")}
                    </>
                  ) : (
                    <>
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Ajouter{" "}
                      {amount > 0
                        ? fmtCurrency(
                            String(amount || 0),
                            user?.currency,
                            undefined,
                            true
                          )
                        : ""}
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
