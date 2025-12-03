"use client";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { ReactNode } from "react";

export default function GoalsLayout({ children }: { children: ReactNode }) {
  const isOnline = useOnlineStatus();
  const isReady = useDocumentReadyState();

  if (!isOnline && !isReady) {
    return (
      <div
        style={{
          visibility: "hidden",
          opacity: 0,
          transition: "opacity 0.2s ease",
        }}
      >
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
