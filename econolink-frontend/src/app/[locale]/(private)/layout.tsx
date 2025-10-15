/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import React, { useEffect, type ReactNode } from "react";
import { getMe } from "./dashboard/lib/getMe";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    const go = async () => {
      const me = await getMe();
      setUser(me);
    };

    go();
  }, []);

  return <>{children}</>;
}
