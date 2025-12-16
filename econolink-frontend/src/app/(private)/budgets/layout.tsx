"use client";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { ReactNode } from "react";
import BudgetStatsPageSkeleton from "./stats/components/BudgetStatsPageSkeleton";

export default function StatsLayout({ children }: { children: ReactNode }) {
  const isOnline = useOnlineStatus();
  const isReady = useDocumentReadyState();

  if (!isOnline && !isReady) {
    return <BudgetStatsPageSkeleton />;
  }

  return <>{children}</>;
}
