// hooks/useBudgets.ts
import { useState, useCallback } from "react";
import {
  Budget,
  CreateBudgetDto,
  UpdateBudgetDto,
  BudgetStats,
  BudgetsResponse,
  BudgetQueryParams,
} from "@/types/budget";
import { fetcher } from "@/lib/fetcher";
import { useTranslations } from "next-intl";

export const useBudgets = () => {
  const tB = useTranslations("Budgets");
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBudgets = useCallback(
    async (params: BudgetQueryParams = {}): Promise<BudgetsResponse> => {
      setLoading(true);
      setError(null);
      try {
        const queryString = new URLSearchParams();

        // add non-undefined parameter
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            queryString.append(key, String(value));
          }
        });

        const endpoint = `/budgets${
          queryString.toString() ? `?${queryString.toString()}` : ""
        }`;
        const response = await fetcher<BudgetsResponse>(endpoint);

        setBudgets(response.items);

        // paginate calculation
        const totalPages = Math.ceil(response.total / response.limit);
        setPagination({
          page: response.page,
          limit: response.limit,
          total: response.total,
          totalPages,
          hasNext: response.page < totalPages,
          hasPrev: response.page > 1,
        });

        return response;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const createBudget = useCallback(
    async (dto: CreateBudgetDto): Promise<Budget> => {
      setLoading(true);
      setError(null);
      try {
        const newBudget = await fetcher<Budget>("/budgets", {
          method: "POST",
          body: dto,
        });
        // Load budgets after creation
        await getBudgets({
          page: pagination.page,
          limit: pagination.limit,
          orderBy: "created_at",
          order: "desc",
        });
        return newBudget;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getBudgets, pagination.page, pagination.limit]
  );

  const getBudget = useCallback(async (id: string): Promise<Budget> => {
    setLoading(true);
    setError(null);
    try {
      return await fetcher<Budget>(`/budgets/${id}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBudget = useCallback(
    async (id: string, dto: UpdateBudgetDto): Promise<Budget> => {
      setLoading(true);
      setError(null);
      try {
        const updatedBudget = await fetcher<Budget>(`/budgets/${id}`, {
          method: "PATCH",
          body: dto,
        });
        // Load budgets after update
        await getBudgets({
          page: pagination.page,
          limit: pagination.limit,
        });
        return updatedBudget;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getBudgets, pagination.page, pagination.limit]
  );

  const deleteBudget = useCallback(
    async (id: string): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        await fetcher(`/budgets/${id}`, { method: "DELETE" });
        // Load budgets after delete
        await getBudgets({
          page: pagination.page,
          limit: pagination.limit,
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [getBudgets, pagination.page, pagination.limit]
  );

  const getAlerts = useCallback(async (): Promise<Budget[]> => {
    setLoading(true);
    setError(null);
    try {
      return await fetcher<Budget[]>("/budgets/alerts/all");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getStats = useCallback(async (): Promise<BudgetStats> => {
    setLoading(true);
    setError(null);
    try {
      return await fetcher<BudgetStats>("/budgets/stats/all");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    budgets,
    pagination,
    loading,
    error,
    createBudget,
    getBudgets,
    getBudget,
    updateBudget,
    deleteBudget,
    getAlerts,
    getStats,
  };
};
