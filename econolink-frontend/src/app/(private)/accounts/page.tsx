/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import { DialogTitle } from "@radix-ui/react-dialog";
import useAccount from "./hooks/useAccount";
import { formatMoney } from "@/lib/format";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { Edit, Recycle, RecycleIcon, Trash2 } from "lucide-react";

export default function AccountsPage() {
  const [openDeleteId, setOpenDeleteId] = useState<string | null>(null);

  const {
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
  } = useAccount();

  const isDocumentReady = useDocumentReadyState();

  const accountsTypes = [
    { value: "CASH", label: "Cash" },
    { value: "MOBILE_MONEY", label: "Mobile Money" },
    { value: "BANK_ACCOUNT", label: "Bank Account" },
    { value: "CREDIT_CARD", label: "Credit Card" },
    { value: "SAVINGS", label: "Savings" },
    { value: "INVESTMENT", label: "Investment" },
    { value: "OTHER", label: "Other" },
  ];

  const iconOptions = [
    { value: "💵", label: "Cash" },
    { value: "📱", label: "Mobile Money" },
    { value: "🏦", label: "Bank" },
    { value: "💳", label: "Credit Card" },
    { value: "📊", label: "Investment" },
    { value: "💰", label: "Savings" },
    { value: "⭐", label: "Other" },
  ];

  if (!isDocumentReady) return null;

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Accounts</h1>
        <Button onClick={openAdd}>Add account</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {accounts.map((a) => (
          <div
            key={a.id}
            className="rounded-2xl bg-card border shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
                  style={{ background: a.color ?? "#e5e5e5" }}
                >
                  {a.icon}
                </div>

                <div>
                  <h2 className="font-semibold text-lg">{a.name}</h2>
                  <p className="text-sm opacity-70">{a.type}</p>
                </div>
              </div>

              <div className="flex gap-1">
                <Button size="icon" variant="ghost" onClick={() => openEdit(a)}>
                  <Edit />
                </Button>
                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() => setOpenDeleteId(a.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm opacity-70">Balance</p>
              <p className="text-3xl font-bold">
                {formatMoney(a.balance as any)}
              </p>
            </div>

            <div className="mt-3">
              <span
                className={`px-2 py-1 text-xs rounded-lg ${
                  a.is_active
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {a.is_active ? "Active" : "Inactive"}
              </span>
            </div>

            <ConfirmDialog
              open={openDeleteId === a.id}
              onOpenChange={() => setOpenDeleteId(null)}
              collapsible={true}
              actionColor="red"
              text={{
                title: "Delete this account?",
                description: "Are you sure you want to delete this account?",
                cancel: "Cancel",
                confirm: "Delete",
              }}
              onConfirm={() => remove(a.id)}
            />
          </div>
        ))}
      </div>

      {loading && <div className="p-4 text-center">Loading...</div>}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {editing ? "Edit account" : "Add new account"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* NAME */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <Input
                className="h-11 rounded-xl"
                placeholder="Account name"
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
              />
            </div>

            {/* TYPE */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                Type
              </label>
              <Select
                onValueChange={(v) => setForm((s) => ({ ...s, type: v }))}
                defaultValue={form.type}
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>

                <SelectContent>
                  {accountsTypes.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* ICON */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                Icon
              </label>
              <Select
                value={form.icon}
                onValueChange={(v) => setForm((s) => ({ ...s, icon: v }))}
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Choose icon" />
                </SelectTrigger>

                <SelectContent>
                  {iconOptions.map((i) => (
                    <SelectItem key={i.value} value={i.value}>
                      <span className="flex items-center gap-2 text-lg">
                        <span>{i.value}</span>
                        <span className="text-sm">{i.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* COLOR */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                Color
              </label>
              <Input
                className="h-11"
                placeholder="#HEX"
                value={form.color}
                onChange={(e) =>
                  setForm((s) => ({ ...s, color: e.target.value }))
                }
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="secondary"
              className="px-5"
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>

            <Button className="px-5" onClick={save}>
              {editing ? "Save changes" : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
