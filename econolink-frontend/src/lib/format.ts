/* eslint-disable @typescript-eslint/no-explicit-any */
import { format, formatDistanceToNow, isToday, isTomorrow } from "date-fns";
import { fr } from "date-fns/locale";

export const currenciesList = ["AR", "EUR", "USD", "GBP", "JPY"];

export function formatMoney(val: number | string | null) {
  if (val == null) return "0.00";
  const n = typeof val === "string" ? Number(val) : val;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export const fmtCurrency = (
  v?: string,
  currency: string = "AR",
  display?: string,
  compact: boolean = false
) => {
  const n = typeof v === "number" ? v : Number(v);
  if (isNaN(n)) return "0";

  const upper = currency.toUpperCase();
  const realCurrency = upper === "AR" ? "MGA" : upper;

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: realCurrency,
    maximumFractionDigits: 2,
    ...(compact && {
      notation: "compact",
      compactDisplay: "short",
    }),
  });

  const parts = formatter.formatToParts(n);

  return parts
    .map((p) => {
      if (p.type === "currency") {
        if (display) return display;
        if (upper === "AR") return "Ar";
      }
      return p.value;
    })
    .join("");
};

// (ex: 1500 → 1.5K, 2,000,000 → 2M)
export const fmtNumberCompact = (v?: string | number) => {
  const n = typeof v === "number" ? v : Number(v);
  if (isNaN(n)) return "0";
  return n.toLocaleString(undefined, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  });
};

export const fmtDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString();
};

export function formatTime(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "HH:mm", { locale: fr });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "dd/MM/yyyy HH:mm", { locale: fr });
}

export function getRemainingTime(dateString: string): string {
  const date = new Date(dateString);

  if (isToday(date)) {
    return `Aujourd'hui à ${format(date, "HH:mm")}`;
  }

  if (isTomorrow(date)) {
    return `Demain à ${format(date, "HH:mm")}`;
  }

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: fr,
  });
}

export function groupRemindersByDate(reminders: any[]) {
  const groups: Record<string, any[]> = {
    today: [],
    tomorrow: [],
    upcoming: [],
    overdue: [],
    completed: [],
  };

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  reminders.forEach((reminder) => {
    const dueDate = new Date(reminder.due_date);

    if (reminder.is_completed) {
      groups.completed.push(reminder);
    } else if (dueDate < now) {
      groups.overdue.push(reminder);
    } else if (dueDate >= today && dueDate < tomorrow) {
      groups.today.push(reminder);
    } else if (
      dueDate >= tomorrow &&
      dueDate < new Date(tomorrow.getTime() + 86400000 * 7)
    ) {
      groups.upcoming.push(reminder);
    } else {
      groups.upcoming.push(reminder);
    }
  });

  return groups;
}
