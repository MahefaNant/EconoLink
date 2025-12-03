"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Goal } from "@/types/goal";
import {
  Calendar,
  Target,
  Edit2,
  Trash2,
  TrendingUp,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { fmtCurrency, fmtDate } from "@/lib/format";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTranslations } from "next-intl";

interface GoalCardProps {
  goal: Goal;
  onEdit: (goal: Goal) => void;
  onDelete: (goal: Goal) => void;
  onAddProgress: (goal: Goal) => void;
}

export function GoalCard({
  goal,
  onEdit,
  onDelete,
  onAddProgress,
}: GoalCardProps) {
  const tG = useTranslations("Goals");
  const progress = goal.current > 0 ? (goal.current / goal.target) * 100 : 0;
  //   const remaining = goal.target - goal.current;
  const isCompleted = goal.current >= goal.target;
  const user = useAuthStore((s) => s.user);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
              style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
            >
              {goal.icon}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">
                {goal.name}
              </CardTitle>
              {goal.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {goal.description}
                </p>
              )}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(goal)}>
                <Edit2 className="mr-2 h-4 w-4" />
                {tG("dialog.button.edit-simple")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onAddProgress(goal)}
                className="text-emerald-600"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                {tG("dialog.button.create-progress")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete(goal)}
                className="text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {tG("dialog.button.delete-simple")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {tG("dialog.progress")}
              </span>
              <span className="font-semibold">{progress.toFixed(1)}%</span>
            </div>
            <Progress
              value={progress}
              className={cn(
                "h-2",
                isCompleted && "bg-emerald-100 [&>div]:bg-emerald-600"
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Target className="h-3 w-3" />
                <span>{tG("common.obj")}</span>
              </div>
              <p className="font-semibold">
                {fmtCurrency(
                  String(goal.target || 0),
                  user?.currency,
                  undefined,
                  true
                )}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>{tG("common.collect")}</span>
              </div>
              <p className="font-semibold text-emerald-600">
                {fmtCurrency(
                  String(goal.current || 0),
                  user?.currency,
                  undefined,
                  true
                )}
              </p>
            </div>
          </div>

          {goal.deadline && (
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{tG("common.du-date")}</span>
              </div>
              <Badge variant={isCompleted ? "default" : "outline"}>
                {fmtDate(goal.deadline)}
              </Badge>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onAddProgress(goal)}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              {tG("dialog.button.create-simple")}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onEdit(goal)}
            >
              <Edit2 className="mr-2 h-4 w-4" />
              {tG("dialog.button.edit-simple")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
