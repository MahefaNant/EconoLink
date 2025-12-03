"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  PieChart,
  User,
  Wallet,
  Tags,
  CreditCard,
  BarChart3,
} from "lucide-react";

export default function useRouterData() {
  const pathname = usePathname();
  const t = useTranslations("Dashboard.SideBar.Route");

  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      {
        title: t("home-space.title"),
        isCollapsible: true,
        items: [
          {
            title: t("home-space.dashboard"),
            url: "/dashboard",
            isActive: pathname === "/dashboard",
            icon: PieChart,
          },
          {
            title: t("home-space.profile"),
            url: "/settings",
            isActive: pathname.startsWith("/settings"),
            icon: User,
          },
        ],
      },
      {
        title: t("account-space.title"),
        isCollapsible: false,
        items: [
          {
            title: t("account-space.accounts"),
            url: "/accounts",
            isActive: pathname.startsWith("/accounts"),
            icon: Wallet,
          },
        ],
      },
      {
        title: t("category-space.title"),
        isCollapsible: false,
        items: [
          {
            title: t("category-space.categories"),
            url: "/category",
            isActive: pathname.startsWith("/category"),
            icon: CreditCard,
          },
        ],
      },
      {
        title: t("transaction-space.title"),
        isCollapsible: false,
        items: [
          {
            title: t("transaction-space.transactions"),
            url: "/transactions",
            isActive:
              pathname.startsWith("/transactions") &&
              !pathname.startsWith("/transactions/"),
            icon: BarChart3,
          },
          {
            title: t("transaction-space.add"),
            url: "/transactions/create",
            isActive: pathname.startsWith("/transactions/create"),
            icon: Tags,
          },
        ],
      },
      {
        title: t("budgets-space.title"),
        isCollapsible: true,
        items: [
          {
            title: t("budgets-space.budgets"),
            url: "/budgets",
            isActive: pathname === "/budgets",
            icon: PieChart,
          },
          {
            title: t("budgets-space.stats"),
            url: "/budgets/stats",
            isActive: pathname === "/budgets/stats",
            icon: PieChart,
          },
          {
            title: t("budgets-space.alerts"),
            url: "/budgets/alerts",
            isActive: pathname.startsWith("/budgets/settings"),
            icon: User,
          },
        ],
      },
      {
        title: t("goals-space.title"),
        isCollapsible: true,
        items: [
          {
            title: t("goals-space.goals"),
            url: "/goals",
            isActive: pathname === "/goals",
            icon: PieChart,
          },
        ],
      },
    ],
  };
  return { data };
}
