"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import {
  Goal,
  CreateGoalDto,
  UpdateGoalDto,
  GoalsResponse,
  GoalFilters,
} from "@/types/goal";

export const useGoals = (filters?: GoalFilters) => {
  return useQuery({
    queryKey: ["goals", filters],
    queryFn: () => {
      const params = new URLSearchParams();

      if (filters?.page) params.append("page", filters.page.toString());
      if (filters?.limit) params.append("limit", filters.limit.toString());
      if (filters?.search) params.append("search", filters.search);
      if (filters?.orderBy) params.append("orderBy", filters.orderBy);
      if (filters?.order) params.append("order", filters.order);

      const queryString = params.toString();
      const url = queryString ? `/goals?${queryString}` : "/goals";

      return fetcher<GoalsResponse>(url);
    },
    placeholderData: (previousData) => previousData,
  });
};

export const useGoal = (id: string) => {
  return useQuery({
    queryKey: ["goal", id],
    queryFn: () => fetcher<Goal>(`/goals/${id}`),
    enabled: !!id,
  });
};

export const useCreateGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGoalDto) =>
      fetcher<Goal>("/goals", { method: "POST", body: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });
};

export const useUpdateGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: { id: string } & UpdateGoalDto) =>
      fetcher<Goal>(`/goals/${id}`, { method: "PATCH", body: data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
      queryClient.invalidateQueries({ queryKey: ["goal", variables.id] });
    },
  });
};

export const useDeleteGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => fetcher(`/goals/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
    },
  });
};

export const useAddProgress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      fetcher<Goal>(`/goals/${id}/add-progress`, {
        method: "PATCH",
        body: { amount },
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["goals"] });
      queryClient.invalidateQueries({ queryKey: ["goal", variables.id] });
    },
  });
};
