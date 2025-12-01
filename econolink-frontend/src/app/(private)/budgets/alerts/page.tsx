/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// app/(dashboard)/budgets/alerts/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Budget } from "@/types/budget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useBudgets } from "../hooks/useBudgets";
import { BudgetCard } from "../components/BudgetCard";
import { useTranslations } from "next-intl";

export default function BudgetAlertsPage() {
  const tB = useTranslations("Budgets");
  const [alerts, setAlerts] = useState<Budget[]>([]);
  const { getAlerts, deleteBudget, loading } = useBudgets();

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    try {
      const alertBudgets = await getAlerts();
      setAlerts(alertBudgets);
    } catch (err) {
      toast.error(tB("messages.failed-load-alert"));
    }
  };

  const handleDeleteBudget = async (id: string) => {
    if (!confirm(tB("dialog.delete-desc"))) return;

    try {
      await deleteBudget(id);
      toast.success(tB("messages.deleted-success"));
      await loadAlerts();
    } catch (err) {
      toast.error(tB("messages.deleted-failed"));
    }
  };

  const handleEditBudget = (budget: Budget) => {
    // Navigate to edit page or open modal
    // For now, we'll just show an alert
    alert(`Edit budget: ${budget.name}`);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/budgets">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <AlertTriangle className="h-8 w-8 text-warning" />
            {tB("alerts.title")}
          </h1>
          <p className="text-muted-foreground">{tB("stats.attention")}</p>
        </div>
      </div>

      {/* Alerts Content */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-2 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 flex-1" />
                  <Skeleton className="h-9 flex-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : alerts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {tB("messages.no-found-alert")}
            </h3>
            <p className="text-muted-foreground text-center mb-4">
              {tB("alerts.limits")}
            </p>
            <Button asChild>
              <Link href="/budgets">{tB("view-all")}</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((budget) => (
            <BudgetCard
              key={budget.id}
              budget={budget}
              onEdit={handleEditBudget}
              onDelete={handleDeleteBudget}
            />
          ))}
        </div>
      )}
    </div>
  );
}
