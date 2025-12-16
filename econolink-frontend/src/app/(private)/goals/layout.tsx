"use client";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { ReactNode } from "react";
import GoalsPageSkeleton from "./components/GoalsPageSkeleton";

export default function GoalsLayout({ children }: { children: ReactNode }) {
  const isOnline = useOnlineStatus();
  const isReady = useDocumentReadyState();

  if (!isOnline && !isReady) {
    return <GoalsPageSkeleton />;
  }

  return <>{children}</>;
}
