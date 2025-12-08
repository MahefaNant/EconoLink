"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  Calendar,
} from "lucide-react";
import { Reminder } from "../types/reminder";
import { useTranslations } from "next-intl";

interface RemindersStatsProps {
  reminders: Reminder[];
}

export function RemindersStats({ reminders }: RemindersStatsProps) {
  const tR = useTranslations("Reminders");
  const total = reminders.length;
  const completed = reminders.filter((r) => r.is_completed).length;
  const pending = total - completed;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayReminders = reminders.filter((r) => {
    const dueDate = new Date(r.due_date);
    dueDate.setHours(0, 0, 0, 0);
    return !r.is_completed && dueDate.getTime() === today.getTime();
  });

  const overdueReminders = reminders.filter((r) => {
    return !r.is_completed && new Date(r.due_date) < new Date();
  });

  const upcomingReminders = reminders.filter((r) => {
    const dueDate = new Date(r.due_date);
    return !r.is_completed && dueDate > new Date() && dueDate <= tomorrow;
  });

  const recurringReminders = reminders.filter((r) => r.is_recurring);

  const stats = [
    {
      title: tR("stats.total"),
      value: total,
      icon: Bell,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      description: `${pending} ${tR("common.waiting")} ${completed} ${tR(
        "common.ended-mini"
      )}`,
    },
    {
      title: tR("stats.today"),
      value: todayReminders.length,
      icon: Calendar,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      description: tR("stats.today-desc"),
    },
    {
      title: tR("stats.late"),
      value: overdueReminders.length,
      icon: AlertCircle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      description: tR("stats.late-desc"),
    },
    {
      title: tR("stats.upcoming"),
      value: upcomingReminders.length,
      icon: Clock,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      description: tR("stats.upcoming-desc"),
    },
    {
      title: tR("stats.recurring"),
      value: recurringReminders.length,
      icon: TrendingUp,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      description: `${
        Math.round((recurringReminders.length / total) * 100) || 0
      }% ${tR("stats.recurring-desc")}`,
    },
    {
      title: tR("stats.completed"),
      value: completed,
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
      description: `${
        total > 0 ? Math.round((completed / total) * 100) : 0
      }% ${tR("stats.completed-desc")}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription className="text-sm">
                {stat.title}
              </CardDescription>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <CardTitle className="text-2xl">{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
