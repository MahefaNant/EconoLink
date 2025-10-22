/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import React, { useEffect, type ReactNode } from "react";
import { getMe } from "./dashboard/lib/getMe";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const user_info = "user_info";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  useEffect(() => {
    const go = async () => {
      try {
        const me = await getMe();
        setUser(me);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (
          error.message === "Failed to fetch" ||
          error.code === "ERR_NETWORK"
        ) {
          const user = localStorage.getItem(user_info);
          if (!user) {
            toast.error("Session expired", {
              duration: 4000,
            });
            router.push("/login");
          } else setUser(JSON.parse(user));
        } else {
          toast.error("Session expired", {
            duration: 4000,
          });
          router.push("/login");
        }
      }
    };
    go();
  }, []);

  return <>{children}</>;
}
