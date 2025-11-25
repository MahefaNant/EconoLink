/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { dexieDb } from "@/lib/dexieDb";
import { checkApiConnection, fetcher } from "@/lib/fetcher";
import { processSyncQueue } from "@/lib/sync";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTranslations } from "next-intl";
import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { TCategory } from "@/types/TCategory";

export default function useCategory() {
  const tAcc = useTranslations("Category");
  const userStore = useAuthStore((s) => s.user);
  const userId = userStore?.id;
  const [allCategories, setAllCategories] = useState<TCategory[]>([]); // Toutes les catégories
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editing, setEditing] = useState<TCategory | null>(null);
  const [form, setForm] = useState({
    name: "",
    type: "EXPENSE",
    description: "",
    color: "#3B82F6",
    icon: "🛠️",
  });

  // Filter categories by type locally
  const filteredCategories = useMemo(() => {
    return allCategories.filter((category) => category.type === form.type);
  }, [allCategories, form.type]);

  async function fetchAllCategories() {
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
        // Retrieve all categories from Dexie
        const offlineData = (
          await dexieDb.categories
            .filter(
              (category) =>
                category.user_id === userId || category.user_id === null
            )
            .toArray()
        ).sort((a, b) => {
          if (a.user_id === userId && b.user_id === null) return -1;
          if (a.user_id === null && b.user_id === userId) return 1;
          return a.name.localeCompare(b.name);
        });
        setAllCategories(offlineData);
        return;
      }

      const data = await fetcher("/category/all", {
        noStoreCache: true,
        includeCredentials: true,
      });
      setAllCategories(data);

      await dexieDb.categories.clear();
      await dexieDb.categories.bulkAdd(data);
    } catch {
      // message = tAcc("messages.offline-fetch");
    } finally {
      if (message) {
        toast(message);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userId) fetchAllCategories();
  }, [userId]);

  function openAdd() {
    setEditing(null);
    setForm({
      name: "",
      type: "EXPENSE",
      description: "",
      color: "#3B82F6",
      icon: "🛠️",
    });
    setOpenDialog(true);
  }

  function openEdit(a: TCategory) {
    setEditing(a);
    setForm({
      name: a.name,
      type: a.type,
      description: a.description ?? "",
      color: a.color ?? "#3B82F6",
      icon: a.icon ?? "🛠️",
    });
    setOpenDialog(true);
  }

  async function saveCategory(input?: {
    name: string;
    type: string;
    description: string;
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

    const url = editing ? `/category/${editing.id}` : "/category/create";
    const method = editing ? "PATCH" : "POST";

    try {
      const isApiConnected = await checkApiConnection();

      // ---------- OFFLINE MODE ----------
      if (!isApiConnected) {
        // Update local data
        await dexieDb.categories.put({
          ...payload,
          id: finalId,
          created_at: editing ? editing.created_at : new Date().toISOString(),
          updated_at: new Date().toISOString(),
          balance: editing ? editing.balance : 0,
          user_id: userId || "",
        });

        const existingTasks = await dexieDb.syncQueue
          .filter(
            (task) =>
              task.tempId === finalId ||
              (task.body && task.body.id === finalId) ||
              (task.url === `/category/${finalId}` && task.method !== "DELETE")
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
        await fetchAllCategories();
        setOpenDialog(false);
        return;
      }

      // ---------- ONLINE MODE ----------
      if (editing && isTempId) {
        // create first the online category, then update it
        const createResponse = await fetcher("/account/create", {
          method: "POST",
          body: { ...payload, id: undefined }, // remove temp id
          noStoreCache: true,
          includeCredentials: true,
        });

        // update local id with the online id
        await dexieDb.categories.delete(finalId);
        await dexieDb.categories.add({
          ...createResponse,
          created_at: createResponse.created_at || new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      } else {
        // normal case : CREATE or UPDATE on real category
        await fetcher(url, {
          method,
          body: payload,
          noStoreCache: true,
          includeCredentials: true,
        });
      }

      await fetchAllCategories();
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
      if (!confirm("Are you sure you want to delete this Category?")) {
        return;
      }
      const isApiConnected = await checkApiConnection();

      // ---------- OFFLINE MODE ----------
      if (!isApiConnected) {
        await dexieDb.categories.delete(id);
        setAllCategories((s) => s.filter((a) => a.id !== id));

        // verify if it's a temp category
        const isTempAccount = id.startsWith("temp-");

        // find all existing tasks for this category
        const existingTasks = await dexieDb.syncQueue
          .filter(
            (task) =>
              task.tempId === id ||
              (task.body && task.body.id === id) ||
              task.url === `/category/${id}`
          )
          .toArray();

        // FOR successif CREATE → UPDATE → DELETE
        if (existingTasks.length > 0) {
          // delete all existing tasks for this category
          await dexieDb.syncQueue
            .filter(
              (task) =>
                task.tempId === id ||
                (task.body && task.body.id === id) ||
                task.url === `/category/${id}`
            )
            .delete();
        } else {
          // only add delete for non-temp categories
          if (!isTempAccount) {
            await dexieDb.syncQueue.add({
              url: `/category/${id}`,
              method: "DELETE",
              createdAt: Date.now(),
            });
          } else {
            console.log(
              "Temp category with no existing tasks - nothing to sync"
            );
          }
        }

        toast(tAcc("messages.offline-queued"));
        return;
      }

      // ---------- ONLINE MODE ----------
      await fetcher(`/category/${id}`, {
        method: "DELETE",
        noStoreCache: true,
        includeCredentials: true,
      });

      setAllCategories((s) => s.filter((a) => a.id !== id));
      await dexieDb.accounts.delete(id);

      toast(tAcc("messages.delete-success"));
    } catch (err: any) {
      toast.error(tAcc("messages.operation-failed"));
    }
  }

  return {
    categories: filteredCategories, // return only filtered categories
    allCategories,
    loading,
    openDialog,
    setOpenDialog,
    form,
    setForm,
    editing,
    openAdd,
    openEdit,
    saveCategory,
    remove,
    userId,
  };
}
