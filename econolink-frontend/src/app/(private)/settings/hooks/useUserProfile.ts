/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useShallow } from "zustand/shallow";

const user_info = "user_info";

type User = {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  currency?: string;
  language: string;
  timezone: string;
  theme: string;
  created_at: string;
  updated_at: string;
};

const avatars = [
  { url: "/avatars/avatar_1.svg", name: "Professionnel" },
  { url: "/avatars/avatar_2.svg", name: "Professionnel" },
  { url: "/avatars/avatar_3.svg", name: "Cartoon" },
  { url: "/avatars/avatar_4.svg", name: "Cartoon" },
  { url: "/avatars/avatar_5.svg", name: "Fantaisie" },
  { url: "/avatars/avatar_6.svg", name: "Gamer" },
  { url: "/avatars/avatar_7.svg", name: "Professionnel" },
  { url: "/avatars/avatar_8.svg", name: "Cartoon" },
  { url: "/avatars/avatar_9.svg", name: "Fantaisie" },
  { url: "/avatars/avatar_10.svg", name: "Cartoon" },
];

const currencies = ["USD", "EUR", "AR", "GBP", "JPY"];

export default function useUserProfile() {
  const t = useTranslations("Settings.Profile.Form.messages");
  const [user, setUser] = useState<User | null>(null);
  const [form, setForm] = useState({
    email: "",
    name: "",
    avatar: "",
    currency: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorShake, setErrorShake] = useState(false);
  const [successShake, setSuccessShake] = useState(false);
  const { userStore, setUserStore } = useAuthStore(
    useShallow((s) => ({
      userStore: s.user,
      setUserStore: s.setUser,
    }))
  );
  const userId = userStore?.id;

  const fetchUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`
      );
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      setUser(data);
      setForm({
        email: data.email ?? "",
        name: data.name ?? "",
        avatar: data.avatar ?? avatars[0].url,
        currency: data.currency ?? "",
      });
    } catch {
      toast.error("Erreur lors du chargement du profil");
    }
  };

  useEffect(() => {
    if (userStore) fetchUser();
  }, [userStore]);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!userId || !user) return;

    const updates: Record<string, any> = {};
    if (form.email !== user.email && form.email != "" && form.email != null)
      updates.email = form.email;
    if (form.name !== user.name && user.name != "" && form.name != null)
      updates.name = form.name;
    if (
      form.avatar !== user.avatar &&
      form.avatar != "" &&
      form.avatar != null
    ) {
      updates.avatar = form.avatar;
    }

    if (
      form.currency !== user.currency &&
      form.currency != "" &&
      form.currency != null
    )
      updates.currency = form.currency;

    if (Object.keys(updates).length === 0) {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
      toast.info(t("no-update"));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ updates }),
        }
      );
      if (!res.ok) {
        setErrorShake(true);
        setTimeout(() => setErrorShake(false), 600);
        throw new Error(t("failed-update"));
      }

      const updated = await res.json();
      setUser(updated);
      setUserStore({
        id: updated.id,
        email: updated.email,
        name: updated.name,
        avatar: updated.avatar,
        currency: updated.currency,
      });
      localStorage.setItem(user_info, JSON.stringify(userStore));
      setSuccessShake(true);
      setTimeout(() => setSuccessShake(false), 600);
      toast.success(t("success"));
    } catch {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
      toast.error(t("error-maj"));
    } finally {
      setLoading(false);
    }
  };

  return {
    avatars,
    currencies,
    user,
    form,
    loading,
    handleSave,
    handleChange,
    errorShake,
    successShake,
  };
}
