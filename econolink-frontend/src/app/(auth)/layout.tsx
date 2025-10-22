"use client";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
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
