/* eslint-disable react-hooks/exhaustive-deps */

// --- FILE: app/(dashboard)/accounts/page.tsx
// Next.js App Router page (client component) - Accounts list + Add / Edit / Delete

import { fetcher } from "@/lib/fetcher";
import { useAuthStore } from "@/stores/useAuthStore";
import { TAccount } from "@/types/TAccount";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function useAccount() {
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
      toast("Failed to load accounts");
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
    if (!form.name || form.name.length < 1) return toast("Name is required");

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
      toast(`Account ${editing ? "updated" : "created"} successfully`);
    } catch {
      toast("Save failed");
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this account? This action cannot be undone.")) return;
    try {
      await fetcher(`/account/${id}`, {
        method: "DELETE",
        noStoreCache: true,
        includeCredentials: true,
      });
      setAccounts((s) => s.filter((a) => a.id !== id));
      toast("Deleted");
    } catch {
      toast("Delete failed");
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
