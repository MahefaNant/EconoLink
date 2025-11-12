/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from "@/lib/fetcher";
import {
  CreateTransactionDto,
  ITransaction,
  PaginatedResponse,
  TransactionQueryParams,
  TransactionStats,
  UpdateTransactionDto,
} from "@/types/ITransaction";

export const transactionApi = {
  getAll: (params?: TransactionQueryParams) => {
    const queryString = params
      ? new URLSearchParams(params as any).toString()
      : "";
    const url = `/transaction${queryString ? `?${queryString}` : ""}`;

    console.log("Fetching transactions from URL:", url);

    return fetcher<PaginatedResponse<ITransaction>>(url, {
      includeCredentials: true,
      noStoreCache: true,
    });
  },
  getStats: (startDate?: string, endDate?: string) => {
    const params = new URLSearchParams();
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);

    return fetcher<TransactionStats>(
      `/transaction/stats?${params.toString()}`,
      {
        includeCredentials: true,
        noStoreCache: true,
      }
    );
  },
  getById: (id: string) =>
    fetcher<ITransaction>(`/transaction/${id}`, {
      includeCredentials: true,
      noStoreCache: true,
    }),
  create: (data: CreateTransactionDto) =>
    fetcher<ITransaction>("/transaction", {
      method: "POST",
      body: data,
      includeCredentials: true,
      noStoreCache: true,
    }),
  update: (id: string, data: UpdateTransactionDto) =>
    fetcher<ITransaction>(`/transaction/${id}`, {
      method: "PATCH",
      body: data,
      includeCredentials: true,
      noStoreCache: true,
    }),
  delete: (id: string) =>
    fetcher(`/transaction/${id}`, {
      method: "DELETE",
      includeCredentials: true,
      noStoreCache: true,
    }),
};
