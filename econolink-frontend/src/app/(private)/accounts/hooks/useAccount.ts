/* eslint-disable react-hooks/exhaustive-deps */

// --- FILE: app/(dashboard)/accounts/page.tsx
// Next.js App Router page (client component) - Accounts list + Add / Edit / Delete

import { fetcher } from "@/lib/fetcher";
import { useAuthStore } from "@/stores/useAuthStore";
import { TAccount } from "@/types/TAccount";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function useAccount() {
  const tAcc = useTranslations("Accounts");
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;
  const [accounts, setAccounts] = useState<TAccount[]>([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editing, setEditing] = useState<TAccount | null>(null);
  const [form, setForm] = useState({
    name: "",
    type: "CASH",
    color: "#3B82F6",
    icon: "💰",
    user_id: userId || "",
  });

  async function fetchAccounts() {
    if (!userId) {
      return;
    }

    setLoading(true);
    try {
      const data = await fetcher(`/account/all?user_id=${userId}`, {
        noStoreCache: true,
        includeCredentials: true,
      });
      setAccounts(data);
    } catch {
      toast(tAcc("messages.fetch-error"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAccounts();
  }, [userId]);

  function openAdd() {
    setEditing(null);
    setForm({
      name: "",
      type: "CASH",
      color: "#3B82F6",
      icon: "💰",
      user_id: userId || "",
    });
    setOpenDialog(true);
  }

  function openEdit(a: TAccount) {
    setEditing(a);
    setForm({
      name: a.name,
      type: a.type,
      color: a.color ?? "#3B82F6",
      icon: a.icon ?? "💰",
      user_id: userId || "",
    });
    setOpenDialog(true);
  }

  async function save() {
    // client-side validation (simple)
    if (!form.name || form.name.length < 1)
      return toast(tAcc("messages.name-required"));

    const payload = { ...form };
    const url = editing ? `/account/${editing.id}` : "/account/create";
    const method = editing ? "PATCH" : "POST";
    try {
      await fetcher(url, {
        method,
        body: payload,
        noStoreCache: true,
        includeCredentials: true,
      });
      await fetchAccounts();
      setOpenDialog(false);
      toast(
        editing ? tAcc("messages.edit-success") : tAcc("messages.add-success")
      );
    } catch {
      toast(tAcc("messages.operation-failed"));
    }
  }

  async function remove(id: string) {
    try {
      await fetcher(`/account/${id}`, {
        method: "DELETE",
        noStoreCache: true,
        includeCredentials: true,
      });
      setAccounts((s) => s.filter((a) => a.id !== id));
      toast(tAcc("messages.delete-success"));
    } catch {
      toast(tAcc("messages.operation-failed"));
    }
  }
  return {
    accounts,
    loading,
    openDialog,
    setOpenDialog,
    form,
    setForm,
    editing,
    openAdd,
    openEdit,
    save,
    remove,
  };
}
