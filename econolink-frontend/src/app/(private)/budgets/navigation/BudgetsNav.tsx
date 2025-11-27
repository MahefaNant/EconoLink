// components/navigation/BudgetsNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Wallet, AlertTriangle, BarChart3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "All Budgets",
    href: "/budgets",
    icon: Wallet,
  },
  {
    name: "Alerts",
    href: "/budgets/alerts",
    icon: AlertTriangle,
  },
  {
    name: "Stats",
    href: "/budgets/stats",
    icon: BarChart3,
  },
];

export function BudgetsNav() {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Budgets
        </h2>
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-2">
        <Button asChild className="w-full gap-2">
          <Link href="/budgets?create=true">
            <Plus className="h-4 w-4" />
            New Budget
          </Link>
        </Button>
      </div>
    </div>
  );
}
