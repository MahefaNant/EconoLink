/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { loginAuth } from "../lib/loginAuth";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { logout } from "../../lib/logOut";

const user_info = "user_info";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const t = useTranslations("Auth.Login");

  const login = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const user = await loginAuth(email, password);
      setUser(user);
      localStorage.setItem(user_info, JSON.stringify(user));
      router.push("/dashboard");
      toast.success(`Welcome back, ${user.name || "User"}!`);
    } catch (error: any) {
      if (error.message === "Failed to fetch" || error.code === "ERR_NETWORK") {
        setErrorMessage("Network error, please try again");
        toast.error("Network Error", {
          description: "Network error, please try again",
          duration: 4000,
        });
      } else {
        setErrorMessage(t("form.error") || "Invalid credentials");
        localStorage.removeItem(user_info);
        await logout();
        toast.error("Login failed", {
          description: t("form.error") || "Invalid credentials",
          duration: 4000,
        });
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, errorMessage };
}
