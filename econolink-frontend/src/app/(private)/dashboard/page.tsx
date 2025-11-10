"use client";
import { useAuthStore } from "@/stores/useAuthStore";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);

  const path = usePathname();

  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl p-4">
            <h1>Welcome, {user ? user.name : "..."}</h1>
            <h1>{path}</h1>
          </div>
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  );
}
