/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";

export function useOnlineStatus(
  pingUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/app/health-check`
) {
  const [isOnline, setIsOnline] = useState(true);

  async function checkConnection() {
    if (!navigator.onLine) {
      setIsOnline(false);
      return;
    }

    try {
      const response = await fetch(pingUrl, {
        method: "GET",
        cache: "no-cache",
      });
      if (!response.ok) throw new Error("Server not reachable");
      const data = await response.json();
      setIsOnline(data.status === "ok");
    } catch (error) {
      setIsOnline(false);
    }
  }

  useEffect(() => {
    checkConnection(); // première vérification

    const handleOnline = () => checkConnection();
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // re-vérifie toutes les 30 secondes
    const interval = setInterval(checkConnection, 30000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, [pingUrl]);

  return isOnline;
}
