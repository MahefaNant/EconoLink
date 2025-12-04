"use client";

import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  date: Date;
  setDate: (date: Date) => void;
  className?: string;
}

export function TimePicker({ date, setDate, className }: TimePickerProps) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const timeValue = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const [hoursStr, minutesStr] = value.split(":");
      const newHours = parseInt(hoursStr, 10);
      const newMinutes = parseInt(minutesStr, 10);

      if (!isNaN(newHours) && !isNaN(newMinutes)) {
        const newDate = new Date(date);
        newDate.setHours(newHours, newMinutes, 0, 0);
        setDate(newDate);
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        type="time"
        value={timeValue}
        onChange={handleTimeChange}
        className="pl-10"
        step="300" // Pas de 5 minutes
      />
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">
        HH:MM
      </div>
    </div>
  );
}
