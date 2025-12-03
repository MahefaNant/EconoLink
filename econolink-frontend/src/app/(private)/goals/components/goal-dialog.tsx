/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Goal, CreateGoalDto } from "@/types/goal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { CalendarIcon, Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { useCreateGoal, useUpdateGoal } from "../hooks/use-goals";
import { useTranslations } from "next-intl";

interface GoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  goal?: Goal | null;
}

export function GoalDialog({ open, onOpenChange, goal }: GoalDialogProps) {
  const tG = useTranslations("Goals");
  const isEditing = !!goal;
  const createMutation = useCreateGoal();
  const updateMutation = useUpdateGoal();

  const formSchema = z.object({
    name: z.string().min(1, tG("form.name-required")),
    description: z.string().optional(),
    target: z.coerce.number().positive(tG("form.amount-positive")),
    deadline: z.date().optional(),
    color: z.string().default("#10B981"),
    icon: z.string().default("🎯"),
    auto_transfer: z.boolean().default(false),
  });

  const colors = [
    { value: "#10B981", label: tG("colors.emerald") },
    { value: "#3B82F6", label: tG("colors.blue") },
    { value: "#8B5CF6", label: tG("colors.purple") },
    { value: "#EF4444", label: tG("colors.red") },
    { value: "#F59E0B", label: tG("colors.amber") },
    { value: "#EC4899", label: tG("colors.pink") },
  ];

  const icons = [
    { value: "🎯", label: tG("icons.target") },
    { value: "💰", label: tG("icons.money") },
    { value: "🏠", label: tG("icons.house") },
    { value: "🚗", label: tG("icons.car") },
    { value: "✈️", label: tG("icons.travel") },
    { value: "🎓", label: tG("icons.education") },
    { value: "💎", label: tG("icons.jewelry") },
    { value: "📱", label: tG("icons.phone") },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: goal?.name || "",
      description: goal?.description || "",
      target: goal?.target || 0,
      deadline: goal?.deadline ? new Date(goal.deadline) : undefined,
      color: goal?.color || "#10B981",
      icon: goal?.icon || "🎯",
      auto_transfer: goal?.auto_transfer || false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data: CreateGoalDto = {
      ...values,
      deadline: values.deadline ? values.deadline.toISOString() : undefined,
    };

    if (isEditing) {
      await updateMutation.mutateAsync({ id: goal.id, ...data });
    } else {
      await createMutation.mutateAsync(data);
    }

    onOpenChange(false);
    form.reset();
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? tG("dialog.button.edit") : tG("dialog.new")}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icône</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                          >
                            <span className="text-xl">{field.value}</span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher une icône..." />
                          <CommandEmpty>{tG("dialog.no-icon")}</CommandEmpty>
                          <CommandGroup>
                            <div className="grid grid-cols-4 gap-2 p-2">
                              {icons.map((icon) => (
                                <CommandItem
                                  key={icon.value}
                                  value={icon.value}
                                  onSelect={() => field.onChange(icon.value)}
                                  className="p-2 cursor-pointer"
                                >
                                  <div
                                    className={cn(
                                      "w-10 h-10 rounded-lg flex items-center justify-center text-xl",
                                      field.value === icon.value &&
                                        "ring-2 ring-emerald-500"
                                    )}
                                  >
                                    {icon.value}
                                  </div>
                                </CommandItem>
                              ))}
                            </div>
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Couleur</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="w-full justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: field.value }}
                              />
                              <span>
                                {
                                  colors.find((c) => c.value === field.value)
                                    ?.label
                                }
                              </span>
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher une couleur..." />
                          <CommandEmpty>{tG("dialog.no-color")}</CommandEmpty>
                          <CommandGroup>
                            {colors.map((color) => (
                              <CommandItem
                                key={color.value}
                                value={color.value}
                                onSelect={() => field.onChange(color.value)}
                                className="cursor-pointer"
                              >
                                <div className="flex items-center gap-3 px-2 py-1.5">
                                  <div
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: color.value }}
                                  />
                                  <span>{color.label}</span>
                                  {field.value === color.value && (
                                    <Check className="ml-auto h-4 w-4" />
                                  )}
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{tG("form.name")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={tG("form.name-placeholder")}
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
                  <FormLabel>{tG("form.desc")}</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={tG("form.desc-placeholder")}
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
                name="target"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{tG("form.amount-target")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{tG("form.date-limit")}</FormLabel>
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
                              <span>{tG("form.select-date")}</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          locale={fr}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                {tG("dialog.button.cancel")}
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing
                      ? tG("dialog.button.edit-loading")
                      : tG("dialog.button.create-loading")}
                  </>
                ) : (
                  <>
                    {isEditing
                      ? tG("dialog.button.edit-simple")
                      : tG("dialog.button.create-simple")}
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
