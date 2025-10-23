"use client";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);

  return (
    <div>
      <h1>Welcome, {user ? user.name : "..."}</h1>
    </div>
  );
}
