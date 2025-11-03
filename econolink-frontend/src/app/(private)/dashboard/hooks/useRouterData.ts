"use client";

import { usePathname } from "next/navigation";

export default function useRouterData() {
  const pathname = usePathname();

  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      {
        title: "Account space",
        url: "#",
        items: [
          {
            title: "Dashboard",
            url: "/dashboard",
            isActive: pathname.startsWith("/dashboard"),
          },
          {
            title: "My profile",
            url: "/settings",
            isActive: pathname.startsWith("/settings"),
          },
        ],
      },
    ],
  };
  return { data };
}
