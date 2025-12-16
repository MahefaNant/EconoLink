/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/sync.ts
import { dexieDb } from "./dexieDb";
import { fetcher } from "./fetcher";

export async function processSyncQueue() {
  if (!navigator.onLine) return;

  const tasks = await dexieDb.syncQueue.orderBy("createdAt").toArray();
  if (tasks.length === 0) return;

  let successCount = 0;
  let errorCount = 0;

  for (const task of tasks) {
    try {
      // Clean the body before sending
      const cleanedBody = cleanSyncTaskBody(task.body, task.method);

      // For DELETE on temp IDs, we ignore it because the resource does not exist online.
      if (task.method === "DELETE" && task.url.includes("temp-")) {
        await dexieDb.syncQueue.delete(task.id!);
        successCount++;
        continue;
      }

      const finalUrl = task.url;
      const finalBody = cleanedBody;

      // Special handling for URLs with temporary IDs
      if (task.url.includes("temp-")) {
        continue; // We'll skip this task; we'll try it again later.
      }

      await fetcher(finalUrl, {
        method: task.method,
        body: finalBody,
        includeCredentials: true,
        noStoreCache: true,
      });

      await dexieDb.syncQueue.delete(task.id!);
      successCount++;
    } catch (error: any) {
      errorCount++;

      // DO NOT DELETE THE TASK and DO NOT STOP THE LOOP
      // We continue with the following tasks

      // Optional: If there are too many errors, we'll stop to avoid spamming.
      if (errorCount >= 5) {
        break;
      }

      continue; // Continue with the next task
    }
  }
}

function cleanSyncTaskBody(body: any, method: string): any {
  if (!body) return body;

  const cleaned = { ...body };

  // Delete undefined fields
  Object.keys(cleaned).forEach((key) => {
    if (cleaned[key] === undefined) {
      delete cleaned[key];
    }
  });

  // For POST requests, remove the internal fields.
  if (method === "POST") {
    delete cleaned.id;
    delete cleaned.tempId;
    delete cleaned.is_synced;
    delete cleaned.created_at;
    delete cleaned.updated_at;
    delete cleaned.user_id;
    delete cleaned.local_id;
  }

  // For PATCH files, remove the read-only fields
  if (method === "PATCH") {
    delete cleaned.id;
    delete cleaned.tempId;
    delete cleaned.is_synced;
    delete cleaned.created_at;
    delete cleaned.user_id;
    delete cleaned.local_id;
  }

  return cleaned;
}

// auto-sync when back online
/* if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    processSyncQueue();
  });
} */
