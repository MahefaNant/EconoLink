import { fetcher } from "@/lib/fetcher";

// lib/transaction-stats.ts
export const transactionStatsApi = {
  getDashboardStats: (period: string = "month") =>
    fetcher(`/transaction/dashboard?period=${period}`, {
      includeCredentials: true,
      noStoreCache: true,
    }),

  getBasicStats: (startDate?: string, endDate?: string) => {
    const params = new URLSearchParams();
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);

    return fetcher(`/transaction/basic?${params.toString()}`, {
      includeCredentials: true,
      noStoreCache: true,
    });
  },
};
