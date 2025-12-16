/* eslint-disable react-hooks/exhaustive-deps */

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
import { useTranslations } from "next-intl";

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
  const tR = useTranslations("Reminders");
  const isEditing = !!reminder;
  const createMutation = useCreateReminder();
  const updateMutation = useUpdateReminder();

  // Initiat the time with the time by default
  const [time, setTime] = useState<Date>(() => {
    if (reminder?.due_date) {
      return new Date(reminder.due_date);
    }

    // By default, today in 1 hour
    const oneHourLater = addHours(new Date(), 1);
    oneHourLater.setMinutes(0, 0, 0); // Round to the hour
    return oneHourLater;
  });

  const formSchema = z.object({
    title: z
      .string()
      .min(1, tR("form.message.title-required"))
      .max(200, tR("form.message.title-error")),
    description: z.string().optional(),
    due_date: z.date({
      error: tR("form.message.date-required"),
    }),
    is_recurring: z.boolean().default(false),
    recurring_rule: z.any().optional(),
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

  const selectedDate = form.watch("due_date");
  const [dateTimeError, setDateTimeError] = useState<string | null>(null);

  // Check if the date/time is in the past
  useEffect(() => {
    if (selectedDate && time) {
      // Create the full date with the selected time
      const fullDateTime = new Date(selectedDate);
      fullDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);

      const now = new Date();

      // Check if the date/time is in the past
      if (isBefore(fullDateTime, now)) {
        if (isToday(selectedDate)) {
          setDateTimeError(tR("form.message.time-past-error"));
        } else {
          setDateTimeError(tR("form.message.date-time-past"));
        }
      } else {
        setDateTimeError(null);
      }
    }
  }, [selectedDate, time]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Check one last time before submission
    const fullDateTime = new Date(values.due_date);
    fullDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);

    const now = new Date();
    if (isBefore(fullDateTime, now)) {
      setDateTimeError(tR("form.message.create-impossible"));
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
      // Handle the error
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  // Function to select today
  const handleSelectToday = () => {
    const today = startOfDay(new Date());
    const now = new Date();
    const currentHour = now.getHours();

    // Always keep today as the date
    form.setValue("due_date", today);

    // Adjust only the hour if necessary
    if (time.getHours() <= currentHour) {
      // If the current hour of the time picker has passed, propose a future hour
      const oneHourLater = addHours(now, 1);
      oneHourLater.setMinutes(0, 0, 0);
      setTime(oneHourLater);
    }
    // Otherwise, keep the currently selected hour in the time picker
  };

  // Simple function to select a date
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
            {isEditing ? tR("dialog.button.edit") : tR("dialog.button.create")}
          </DialogTitle>
          <DialogDescription>
            {isEditing ? tR("dialog.edit") : tR("dialog.create")}
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
                    <Input
                      {...field}
                      placeholder={tR("form.title-placeholder")}
                    />
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
                  <FormLabel>{tR("form.description")}</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={tR("form.desc-placeholder")}
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
                              <span>{tR("form.select-date")}</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <div className="p-3 border-b bg-muted/50">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {tR("form.select-date")}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={handleSelectToday}
                              className="text-xs"
                            >
                              {tR("form.today")}
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
                    {tR("form.select-time")}
                  </p>
                )}
              </FormItem>
            </div>

            {/* Display date/time error */}
            {dateTimeError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{dateTimeError}</AlertDescription>
              </Alert>
            )}

            {/* Display selected date/time */}
            {selectedDate && time && (
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm font-medium text-muted-foreground">
                  {tR("form.appel-programme")}
                </div>
                <div className="text-lg font-semibold mt-1">
                  {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}{" "}
                  {tR("form.at")} {format(time, "HH:mm")}
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
                    {tR("form.message.date-time-past")}
                  </div>
                ) : (
                  <div className="text-sm text-green-600 mt-1">
                    {tR("form.message.date-time-valide")}
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
                      {tR("form.appeall-rec")}
                    </FormLabel>
                    <p className="text-sm text-muted-foreground">
                      {tR("form.message.appeall-repeat-auto")}
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
                {tR("dialog.button.cancel")}
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !!dateTimeError}
                className={dateTimeError ? "opacity-50 cursor-not-allowed" : ""}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing
                      ? tR("dialog.button.editing")
                      : tR("dialog.button.creating")}
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    {isEditing
                      ? tR("dialog.button.edit-simple")
                      : tR("dialog.button.create-simple")}
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
