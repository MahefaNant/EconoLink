"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function useRouterData() {
  const pathname = usePathname();
  const t = useTranslations("Dashboard.SideBar.Route");

  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      {
        title: t("accout-space.title"),
        url: "#",
        items: [
          {
            title: t("accout-space.dashboard"),
            url: "/dashboard",
            isActive: pathname.startsWith("/dashboard"),
          },
          {
            title: t("accout-space.profile"),
            url: "/settings",
            isActive: pathname.startsWith("/settings"),
          },
          {
            title: t("accout-space.accounts"),
            url: "/accounts",
            isActive: pathname.startsWith("/accounts"),
          },
        ],
      },
    ],
  };
  return { data };
}
