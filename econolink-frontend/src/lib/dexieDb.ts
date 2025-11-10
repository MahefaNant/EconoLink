/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/db.ts
import Dexie, { Table } from "dexie";
import { TAccount } from "@/types/TAccount";

export interface SyncTask {
  id?: number; // auto-increment
  url: string;
  method: "POST" | "PATCH" | "DELETE";
  body?: any;
  tempId?: string;
  createdAt: number;
}

export class AppDB extends Dexie {
  accounts!: Table<TAccount, string>;
  syncQueue!: Table<SyncTask, number>;

  constructor() {
    super("EconoLinkDexieDB");

    this.version(1).stores({
      accounts: "id, user_id, name, type, is_active",
      syncQueue: "++id, createdAt",
    });
  }
}

export const dexieDb = new AppDB();
