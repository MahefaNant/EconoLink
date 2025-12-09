"use client";

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { RemindersFilters, RemindersResponse } from "../types/reminder";

export const useReminders = (filters?: RemindersFilters) => {
  return useQuery<RemindersResponse, Error>({
    queryKey: ["reminders", filters],
    queryFn: () => {
      const params = new URLSearchParams();

      if (filters?.page) params.append("page", filters.page.toString());
      if (filters?.limit) params.append("limit", filters.limit.toString());
      if (filters?.search) params.append("search", filters.search);
      if (filters?.is_completed !== undefined)
        params.append("is_completed", filters.is_completed.toString());
      if (filters?.is_recurring !== undefined)
        params.append("is_recurring", filters.is_recurring.toString());
      if (filters?.date_from) params.append("date_from", filters.date_from);
      if (filters?.date_to) params.append("date_to", filters.date_to);
      if (filters?.orderBy) params.append("orderBy", filters.orderBy);
      if (filters?.order) params.append("order", filters.order);

      const queryString = params.toString();
      const url = queryString ? `/reminders?${queryString}` : "/reminders";

      return fetcher<RemindersResponse>(url);
    },
  });
};

export const useReminder = (id: string) => {
  return useQuery({
    queryKey: ["reminder", id],
    queryFn: () => fetcher(`/reminders/${id}`),
    enabled: !!id,
  });
};

export const useReminderStats = () => {
  return useQuery({
    queryKey: ["reminder-stats"],
    queryFn: () => fetcher("/reminders/stats"),
  });
};
