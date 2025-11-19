/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useTransactionStats.ts
import { useState, useCallback } from "react";
import { transactionStatsApi } from "../lib/transaction-stats";
import { checkApiConnection } from "@/lib/fetcher";
import { dexieDb } from "@/lib/dexieDb";
import { useAuthStore } from "@/stores/useAuthStore";

export function useTransactionStats() {
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;

  const [advancedStats, setAdvancedStats] = useState<any>(null);
  const [basicStats, setBasicStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Calcul des stats basiques offline
  const calculateBasicOfflineStats = async () => {
    if (!userId) return null;

    const offlineData = await dexieDb.transactions
      .where("user_id")
      .equals(userId)
      .toArray();

    // EXCLURE LES TRANSFERS des calculs financiers
    const financialData = offlineData.filter((t) => t.type !== "TRANSFER");
    const transferData = offlineData.filter((t) => t.type === "TRANSFER");

    const totalCount = financialData.length;
    const totalIncome = financialData
      .filter((t) => t.type === "INCOME")
      .reduce((sum, t) => sum + Number(t.amount), 0);
    const totalExpense = financialData
      .filter((t) => t.type === "EXPENSE")
      .reduce((sum, t) => sum + Number(t.amount), 0);

    return {
      totalCount,
      totalIncome,
      totalExpense,
      net: totalIncome - totalExpense,
      transferCount: transferData.length,
      isBasic: true, // Marquer comme stats basiques
    };
  };

  const loadStats = useCallback(
    async (period: string = "month") => {
      if (!userId) return;

      const isApiConnected = await checkApiConnection();

      if (!isApiConnected) {
        // Mode offline - stats basiques seulement
        const offlineStats = await calculateBasicOfflineStats();
        setBasicStats(offlineStats);
        setAdvancedStats(null);
      } else {
        // Mode online - stats avancées
        setLoading(true);
        try {
          const [dashboardStats, basicOnlineStats] = await Promise.all([
            transactionStatsApi.getDashboardStats(period),
            transactionStatsApi.getBasicStats(),
          ]);

          setAdvancedStats(dashboardStats);
          setBasicStats(basicOnlineStats);
        } catch {
          const basic = await transactionStatsApi.getBasicStats();
          setBasicStats(basic);
        } finally {
          setLoading(false);
        }
      }
    },
    [userId]
  );

  return {
    advancedStats,
    basicStats,
    loading,
    loadStats,
  };
}
