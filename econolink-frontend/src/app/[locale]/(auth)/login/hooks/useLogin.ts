"use client";

import { useState } from "react";
import { loginAuth } from "../lib/loginAuth";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";
import { useRouter } from "@/i18n/routing";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const user = await loginAuth(email, password);
      setUser(user);
      toast.success(`Welcome back, ${user.name || "User"}!`);
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage("Login failed");
      toast.error("Login failed", {
        description: "Check your credentials and try again.",
        duration: 4000,
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, errorMessage };
}
