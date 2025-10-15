/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import React, { useEffect, type ReactNode } from "react";
import { getMe } from "./dashboard/lib/getMe";
import { useRouter } from "@/i18n/routing";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  useEffect(() => {
    const go = async () => {
      try {
        const me = await getMe();
        setUser(me);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        router.push("/login");
      }
    };
    go();
  }, []);

  return <>{children}</>;
}
