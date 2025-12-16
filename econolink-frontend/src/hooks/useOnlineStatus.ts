import { useEffect, useState } from "react";
import { useNetworkStatus } from "./useNetworkStatus";
import { useRouter } from "next/navigation";

export default function useOnlineStatus() {
  const isBrowserOnline = useNetworkStatus();
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/app/health-check`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Offline");
        setIsReady(true);
      } catch {
        router.replace("/offline");
      }
    };

    checkConnection();
  }, [router]);

  return !isReady || !isBrowserOnline ? false : true;
}
