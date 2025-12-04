"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { CreateReminderDto, UpdateReminderDto } from "../types/reminder";
import { toast } from "sonner";

export const useCreateReminder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateReminderDto) =>
      fetcher("/reminders", { method: "POST", body: data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast.success("Votre rappel a été créé avec succès.");
    },
    onError: (error) => {
      toast.error(error.message || "Impossible de créer le rappel.");
    },
  });
};

export const useUpdateReminder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: { id: string } & UpdateReminderDto) =>
      fetcher(`/reminders/${id}`, { method: "PATCH", body: data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      queryClient.invalidateQueries({ queryKey: ["reminder", variables.id] });
      toast.success("Votre rappel a été mis à jour avec succès.");
    },
    onError: (error) => {
      toast.warning(error.message || "Impossible de mettre à jour le rappel.");
    },
  });
};

export const useDeleteReminder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      fetcher(`/reminders/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast("Votre rappel a été supprimé avec succès.");
    },
    onError: (error) => {
      toast.warning(error.message || "Impossible de supprimer le rappel.");
    },
  });
};

export const useToggleReminder = () => {
  const queryClient = useQueryClient();

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
          ? "Le rappel a été marqué comme complété."
          : "Le rappel a été réactivé."
      );
    },
    onError: (error) => {
      toast.warning(
        error.message || "Impossible de modifier le statut du rappel."
      );
    },
  });
};

export const useBulkUpdateReminders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ ids, data }: { ids: string[]; data: UpdateReminderDto }) =>
      fetcher("/reminders/bulk", { method: "PATCH", body: { ids, data } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast.info("Les rappels sélectionnés ont été mis à jour.");
    },
    onError: (error) => {
      toast.warning(
        error.message || "Impossible de mettre à jour les rappels."
      );
    },
  });
};

export const useBulkDeleteReminders = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ids: string[]) =>
      fetcher("/reminders/bulk", { method: "DELETE", body: { ids } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reminders"] });
      toast("Les rappels sélectionnés ont été supprimés.");
    },
    onError: (error) => {
      toast.warning(error.message || "Impossible de supprimer les rappels.");
    },
  });
};
