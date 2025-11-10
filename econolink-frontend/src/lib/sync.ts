// lib/sync.ts
import { dexieDb } from "./dexieDb";
import { fetcher } from "./fetcher";

export async function processSyncQueue() {
  if (!navigator.onLine) return;

  const tasks = await dexieDb.syncQueue.orderBy("createdAt").toArray();
  if (tasks.length === 0) return;

  for (const task of tasks) {
    try {
      await fetcher(task.url, {
        method: task.method,
        body: task.body,
        includeCredentials: true,
        noStoreCache: true,
      });

      await dexieDb.syncQueue.delete(task.id!);
    } catch {
      // stop here to avoid spamming server
      return;
    }
  }
}

// auto-sync when back online
/* if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    processSyncQueue();
  });
} */
