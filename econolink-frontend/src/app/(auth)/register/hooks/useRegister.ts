/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { registerAuth } from "../lib/registerAuth";
import { useAuthStore } from "@/stores/useAuthStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const register = async (
    name: string,
    email: string,
    password: string,
    retapePassword: string
  ) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const user = await registerAuth(name, email, password, retapePassword);
      setUser(user);
      toast.success(`Welcome, ${user.name || "User"}!`);
      router.push("/dashboard");
    } catch (error: any) {
      const messageError = String(error?.message) || "Register failed";
      setErrorMessage(messageError);
      toast.error("Register failed", {
        description: messageError,
        duration: 4000,
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, errorMessage };
}
