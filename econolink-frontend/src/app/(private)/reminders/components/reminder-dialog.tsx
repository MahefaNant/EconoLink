/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useCreateReminder,
  useUpdateReminder,
} from "../hooks/use-reminder-mutations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Check, Loader2, AlertCircle } from "lucide-react";
import { format, isToday, isBefore, startOfDay, addHours } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { CreateReminderDto, Reminder } from "../types/reminder";
import { TimePicker } from "@/components/ui/time-picker";
import { Alert, AlertDescription } from "./alert";

const formSchema = z.object({
  title: z
    .string()
    .min(1, "Le titre est requis")
    .max(200, "Le titre ne doit pas dépasser 200 caractères"),
  description: z.string().optional(),
  due_date: z.date({
    error: "La date est requise",
  }),
  is_recurring: z.boolean().default(false),
  recurring_rule: z.any().optional(),
});

interface ReminderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reminder?: Reminder | null;
}

export function ReminderDialog({
  open,
  onOpenChange,
  reminder,
}: ReminderDialogProps) {
  const isEditing = !!reminder;
  const createMutation = useCreateReminder();
  const updateMutation = useUpdateReminder();

  // Initialiser le time avec l'heure par défaut
  const [time, setTime] = useState<Date>(() => {
    if (reminder?.due_date) {
      return new Date(reminder.due_date);
    }

    // Par défaut, aujourd'hui dans 1 heure
    const oneHourLater = addHours(new Date(), 1);
    oneHourLater.setMinutes(0, 0, 0); // Arrondir à l'heure
    return oneHourLater;
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      title: reminder?.title || "",
      description: reminder?.description || "",
      due_date: reminder?.due_date ? new Date(reminder.due_date) : time,
      is_recurring: reminder?.is_recurring || false,
      recurring_rule: reminder?.recurring_rule || undefined,
    },
  });

  // Surveiller la date sélectionnée
  const selectedDate = form.watch("due_date");
  const [dateTimeError, setDateTimeError] = useState<string | null>(null);

  // Vérifier si la date/heure est dans le passé
  useEffect(() => {
    if (selectedDate && time) {
      // Créer la date complète avec l'heure sélectionnée
      const fullDateTime = new Date(selectedDate);
      fullDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);

      const now = new Date();

      // Vérifier si la date/heure est dans le passé
      if (isBefore(fullDateTime, now)) {
        if (isToday(selectedDate)) {
          setDateTimeError(
            "L'heure sélectionnée est déjà passée pour aujourd'hui. Veuillez choisir une heure future."
          );
        } else {
          setDateTimeError(
            "La date et l'heure sélectionnées sont déjà passées."
          );
        }
      } else {
        setDateTimeError(null);
      }
    }
  }, [selectedDate, time]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Vérifier une dernière fois avant soumission
    const fullDateTime = new Date(values.due_date);
    fullDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);

    const now = new Date();
    if (isBefore(fullDateTime, now)) {
      setDateTimeError("Impossible de créer un rappel dans le passé.");
      return;
    }

    const data: CreateReminderDto = {
      ...values,
      due_date: fullDateTime.toISOString(),
    };

    try {
      if (isEditing) {
        await updateMutation.mutateAsync({ id: reminder.id, ...data });
      } else {
        await createMutation.mutateAsync(data);
      }

      onOpenChange(false);
      form.reset();
      setDateTimeError(null);
    } catch {
      // Gérer l'erreur
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  // Fonction pour sélectionner aujourd'hui
  const handleSelectToday = () => {
    const today = startOfDay(new Date());
    const now = new Date();
    const currentHour = now.getHours();

    // Toujours garder aujourd'hui comme date
    form.setValue("due_date", today);

    // Ajuster seulement l'heure si nécessaire
    if (time.getHours() <= currentHour) {
      // Si l'heure actuelle du time picker est passée, proposer une heure future
      const oneHourLater = addHours(now, 1);
      oneHourLater.setMinutes(0, 0, 0);
      setTime(oneHourLater);
    }
    // Sinon, garder l'heure actuellement sélectionnée dans le time picker
  };

  // Fonction simple pour sélectionner une date
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      form.setValue("due_date", date);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Modifier le rappel" : "Nouveau rappel"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Modifiez les détails de votre rappel."
              : "Créez un nouveau rappel pour ne rien oublier."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: Réunion d'équipe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Détails supplémentaires..."
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="due_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP", { locale: fr })
                            ) : (
                              <span>Sélectionner une date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <div className="p-3 border-b bg-muted/50">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              Sélectionnez une date
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={handleSelectToday}
                              className="text-xs"
                            >
                              Aujourd'hui
                            </Button>
                          </div>
                        </div>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={handleDateSelect}
                          initialFocus
                          locale={enUS}
                          disabled={(date) => {
                            const today = startOfDay(new Date());
                            const compareDate = startOfDay(date);
                            return compareDate < today;
                          }}
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Heure *</FormLabel>
                <TimePicker date={time} setDate={setTime} />
                {selectedDate && isToday(selectedDate) && dateTimeError && (
                  <p className="text-xs text-destructive mt-1">
                    Choisissez une heure future
                  </p>
                )}
              </FormItem>
            </div>

            {/* Afficher l'erreur de date/heure */}
            {dateTimeError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{dateTimeError}</AlertDescription>
              </Alert>
            )}

            {/* Affichage de la date/heure sélectionnée */}
            {selectedDate && time && (
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm font-medium text-muted-foreground">
                  Rappel programmé pour :
                </div>
                <div className="text-lg font-semibold mt-1">
                  {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })} à{" "}
                  {format(time, "HH:mm")}
                </div>
                {isBefore(
                  new Date(selectedDate).setHours(
                    time.getHours(),
                    time.getMinutes(),
                    0,
                    0
                  ),
                  new Date()
                ) ? (
                  <div className="text-sm text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Cette date/heure est dans le passé
                  </div>
                ) : (
                  <div className="text-sm text-green-600 mt-1">
                    ✓ Date/heure valide
                  </div>
                )}
              </div>
            )}

            <FormField
              control={form.control}
              name="is_recurring"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Rappel récurrent
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">
                      Ce rappel se répètera automatiquement
                    </p>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !!dateTimeError}
                className={dateTimeError ? "opacity-50 cursor-not-allowed" : ""}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing ? "Modification..." : "Création..."}
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    {isEditing ? "Modifier" : "Créer"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
