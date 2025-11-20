/* eslint-disable react-hooks/exhaustive-deps */

import { dexieDb } from "@/lib/dexieDb";
import { checkApiConnection, fetcher } from "@/lib/fetcher";
import { processSyncQueue } from "@/lib/sync";
import { useAuthStore } from "@/stores/useAuthStore";
import { TAccount } from "@/types/TAccount";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getIconByAccountType } from "../lib/account.lib";

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
    icon: "💵",
  });

  async function fetchAccounts() {
    let message = null;
    await processSyncQueue();
    if (!userId) {
      return;
    }

    setLoading(true);
    try {
      const isApiConnected = await checkApiConnection();

      if (isApiConnected === false) {
        message = tAcc("messages.offline-fetch");
        toast(message);
        const offlineData = await dexieDb.accounts
          .where("user_id")
          .equals(userId)
          .toArray();
        setAccounts(offlineData);
        return;
      }

      const data = await fetcher("/account/all", {
        noStoreCache: true,
        includeCredentials: true,
      });
      setAccounts(data);

      await dexieDb.accounts.clear();
      await dexieDb.accounts.bulkAdd(data);
    } catch {
      message = tAcc("messages.offline-fetch");
    } finally {
      if (message) {
        toast(message);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userId) fetchAccounts();
  }, [userId]);

  function openAdd() {
    setEditing(null);
    setForm({
      name: "",
      type: "CASH",
      color: "#3B82F6",
      icon: "💵",
    });
    setOpenDialog(true);
  }

  function openEdit(a: TAccount) {
    setEditing(a);
    setForm({
      name: a.name,
      type: a.type,
      color: a.color ?? "#3B82F6",
      icon: a.icon ?? getIconByAccountType(a.type),
    });
    setOpenDialog(true);
  }

  const updateFormType = (type: string) => {
    const newIcon = getIconByAccountType(type);
    setForm((s) => ({ ...s, type, icon: newIcon }));
  };

  async function saveAccount(input?: {
    name: string;
    type: string;
    color: string;
    icon: string;
  }) {
    const data = input ?? form;

    if (!data.name || data.name.length < 1) {
      return toast(tAcc("messages.name-required"));
    }

    const payload = { ...data, user_id: userId };
    const isTempId = editing?.id?.startsWith("temp-");
    const finalId = editing ? editing.id : `temp-${crypto.randomUUID()}`;

    const url = editing ? `/account/${editing.id}` : "/account/create";
    const method = editing ? "PATCH" : "POST";

    try {
      const isApiConnected = await checkApiConnection();

      // ---------- OFFLINE MODE ----------
      if (!isApiConnected) {
        // Update local data
        await dexieDb.accounts.put({
          ...payload,
          id: finalId,
          created_at: editing ? editing.created_at : new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_active: editing ? editing.is_active : true,
          balance: editing ? editing.balance : 0,
          user_id: userId || "",
        });

        const existingTasks = await dexieDb.syncQueue
          .filter(
            (task) =>
              task.tempId === finalId ||
              (task.body && task.body.id === finalId) ||
              (task.url === `/account/${finalId}` && task.method !== "DELETE")
          )
          .toArray();

        if (existingTasks.length > 0) {
          // Update existing task
          const existingTask = existingTasks[0];
          await dexieDb.syncQueue.update(existingTask.id!, {
            url,
            method,
            body: { ...payload, id: finalId },
            tempId: method === "POST" ? finalId : undefined,
            createdAt: Date.now(),
          });
        } else {
          // Create a new task
          await dexieDb.syncQueue.add({
            url,
            method,
            body: { ...payload, id: finalId },
            tempId: method === "POST" ? finalId : undefined,
            createdAt: Date.now(),
          });
        }

        toast(tAcc("offline-queued"));
        await fetchAccounts();
        setOpenDialog(false);
        return;
      }

      // ---------- ONLINE MODE ----------
      // update on temp account ( special case )
      if (editing && isTempId) {
        // create first the online account, then update it
        const createResponse = await fetcher("/account/create", {
          method: "POST",
          body: { ...payload, id: undefined }, // remove temp id
          noStoreCache: true,
          includeCredentials: true,
        });

        // update local id with the online id
        await dexieDb.accounts.delete(finalId);
        await dexieDb.accounts.add({
          ...createResponse,
          created_at: createResponse.created_at || new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      } else {
        // normal case : CREATE or UPDATE on real account
        await fetcher(url, {
          method,
          body: payload,
          noStoreCache: true,
          includeCredentials: true,
        });
      }

      await fetchAccounts();
      setOpenDialog(false);
      toast(
        editing ? tAcc("messages.edit-success") : tAcc("messages.add-success")
      );
    } catch {
      toast.error(tAcc("messages.operation-failed"));
    }
  }

  async function remove(id: string) {
    try {
      const isApiConnected = await checkApiConnection();

      // ---------- OFFLINE MODE ----------
      if (!isApiConnected) {
        // delete localy
        await dexieDb.accounts.delete(id);
        setAccounts((s) => s.filter((a) => a.id !== id));

        // verify if it's a temp account
        const isTempAccount = id.startsWith("temp-");

        // find all existing tasks for this account
        const existingTasks = await dexieDb.syncQueue
          .filter(
            (task) =>
              task.tempId === id ||
              (task.body && task.body.id === id) ||
              task.url === `/account/${id}`
          )
          .toArray();

        // FOR successif CREATE → UPDATE → DELETE
        if (existingTasks.length > 0) {
          // delete all existing tasks for this account
          await dexieDb.syncQueue
            .filter(
              (task) =>
                task.tempId === id ||
                (task.body && task.body.id === id) ||
                task.url === `/account/${id}`
            )
            .delete();
        } else {
          // only add delete for non-temp accounts
          if (!isTempAccount) {
            await dexieDb.syncQueue.add({
              url: `/account/${id}`,
              method: "DELETE",
              createdAt: Date.now(),
            });
          }
        }

        toast(tAcc("messages.offline-queued"));
        return;
      }

      // ---------- ONLINE MODE ----------
      await fetcher(`/account/${id}`, {
        method: "DELETE",
        noStoreCache: true,
        includeCredentials: true,
      });

      setAccounts((s) => s.filter((a) => a.id !== id));
      await dexieDb.accounts.delete(id);

      toast(tAcc("messages.delete-success"));
    } catch {
      toast.error(tAcc("messages.operation-failed"));
    }
  }

  return {
    accounts,
    loading,
    openDialog,
    setOpenDialog,
    form,
    setForm,
    updateFormType,
    editing,
    openAdd,
    openEdit,
    saveAccount,
    remove,
    userId,
  };
}
