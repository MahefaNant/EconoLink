/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import React, { useEffect, type ReactNode } from "react";
import { getMe } from "./dashboard/lib/getMe";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./dashboard/components/app-sidebar";
import NavBar from "./dashboard/components/nav-bar";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import { processSyncQueue } from "@/lib/sync";

const user_info = "user_info";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const isReady = useDocumentReadyState();
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  useEffect(() => {
    const go = async () => {
      try {
        const me = await getMe();
        setUser(me);
        // await processSyncQueue();

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

  if (!isReady) return null;

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <NavBar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
