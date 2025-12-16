"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { CreateReminderDto, UpdateReminderDto } from "../types/reminder";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export const useCreateReminder = () => {
  const tR = useTranslations("Reminders");
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateReminderDto) =>
      fetcher("/reminders", { method: "POST", body: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast.success(tR("message.create-success"));
    },
    onError: (error) => {
      toast.error(error.message || tR("message.create-failed"));
    },
  });
};

export const useUpdateReminder = () => {
  const queryClient = useQueryClient();
  const tR = useTranslations("Reminders");

  return useMutation({
    mutationFn: ({ id, ...data }: { id: string } & UpdateReminderDto) =>
      fetcher(`/reminders/${id}`, { method: "PATCH", body: data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      queryClient.invalidateQueries({ queryKey: ["reminder", variables.id] });
      toast.success(tR("message.edit-success"));
    },
    onError: (error) => {
      toast.warning(error.message || tR("message.edit-failed"));
    },
  });
};

export const useDeleteReminder = () => {
  const queryClient = useQueryClient();
  const tR = useTranslations("Reminders");
  return useMutation({
    mutationFn: (id: string) =>
      fetcher(`/reminders/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast.success(tR("message.delete-success"));
    },
    onError: (error) => {
      toast.warning(error.message || tR("message.delete-failed"));
    },
  });
};

export const useToggleReminder = () => {
  const queryClient = useQueryClient();
  const tR = useTranslations("Reminders");
  return useMutation({
    mutationFn: ({ id, is_completed }: { id: string; is_completed: boolean }) =>
      fetcher(`/reminders/${id}`, {
        method: "PATCH",
        body: { is_completed },
      }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      queryClient.invalidateQueries({ queryKey: ["reminder", variables.id] });
      toast.info(
        variables.is_completed
          ? tR("message.appeall-complete")
          : tR("message.appeall-reactive")
      );
    },
    onError: (error) => {
      toast.warning(error.message || tR("message.appeall-failed"));
    },
  });
};

export const useBulkUpdateReminders = () => {
  const queryClient = useQueryClient();
  const tR = useTranslations("Reminders");
  return useMutation({
    mutationFn: ({ ids, data }: { ids: string[]; data: UpdateReminderDto }) =>
      fetcher("/reminders/bulk", { method: "PATCH", body: { ids, data } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast.info(tR("message.bulk-update-success"));
    },
    onError: (error) => {
      toast.warning(error.message || tR("message.bulk-update-failed"));
    },
  });
};

export const useBulkDeleteReminders = () => {
  const queryClient = useQueryClient();
  const tR = useTranslations("Reminders");
  return useMutation({
    mutationFn: (ids: string[]) =>
      fetcher("/reminders/bulk", { method: "DELETE", body: { ids } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast.success(tR("message.bulk-delete-success"));
    },
    onError: (error) => {
      toast.warning(error.message || tR("message.bulk-delete-failed"));
    },
  });
};
