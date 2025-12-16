"use client";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { ReactNode } from "react";
import RemindersPageSkeleton from "./components/RemindersPageSkeleton";

export default function RemindersLayout({ children }: { children: ReactNode }) {
  const isOnline = useOnlineStatus();
  const isReady = useDocumentReadyState();

  if (!isOnline && !isReady) {
    return <RemindersPageSkeleton />;
  }

  return <>{children}</>;
}
