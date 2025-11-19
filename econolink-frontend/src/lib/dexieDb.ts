/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/db.ts
import Dexie, { Table } from "dexie";
import { TAccount } from "@/types/TAccount";
import { TCategory } from "@/types/TCategory";
import { ITransaction } from "@/types/ITransaction";

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
  categories!: Table<TCategory, string>;
  transactions!: Table<ITransaction, string>;
  syncQueue!: Table<SyncTask, number>;

  constructor() {
    super("EconoLinkDexieDB");

    this.version(1).stores({
      accounts: "id, user_id, name, type, is_active",
      categories: "id, user_id, name, type",
      transactions:
        "id, user_id, date, type, category_id, account_id, [user_id+date]",
      syncQueue: "++id, createdAt",
    });
  }
}

export const dexieDb = new AppDB();
