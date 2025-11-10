/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
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
import { Edit, Trash2 } from "lucide-react";
import { AccountStateSwitch } from "./components/AccountStateSwitch";
import { useTranslations } from "next-intl";

export default function AccountsPage() {
  const tAcc = useTranslations("Accounts");
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
    { value: "CASH", label: tAcc("iconLabel.cash") },
    { value: "MOBILE_MONEY", label: tAcc("iconLabel.mobile-money") },
    { value: "BANK_ACCOUNT", label: tAcc("iconLabel.bank") },
    { value: "CREDIT_CARD", label: tAcc("iconLabel.credit-card") },
    { value: "SAVINGS", label: tAcc("iconLabel.savings") },
    { value: "INVESTMENT", label: tAcc("iconLabel.investment") },
    { value: "OTHER", label: tAcc("iconLabel.other") },
  ];

  const iconOptions = [
    { value: "💵", label: tAcc("iconLabel.cash") },
    { value: "📱", label: tAcc("iconLabel.mobile-money") },
    { value: "🏦", label: tAcc("iconLabel.bank") },
    { value: "💳", label: tAcc("iconLabel.credit-card") },
    { value: "📊", label: tAcc("iconLabel.investment") },
    { value: "💰", label: tAcc("iconLabel.savings") },
    { value: "⭐", label: tAcc("iconLabel.other") },
  ];

  const colorOptions = [
    { label: tAcc("colorLabel.red"), value: "#EF4444" },
    { label: tAcc("colorLabel.green"), value: "#10B981" },
    { label: tAcc("colorLabel.blue"), value: "#3B82F6" },
    { label: tAcc("colorLabel.yellow"), value: "#F59E0B" },
    { label: tAcc("colorLabel.purple"), value: "#8B5CF6" },
    { label: tAcc("colorLabel.gray"), value: "#6B7280" },
    { label: tAcc("colorLabel.black"), value: "#000000" },
  ];

  if (!isDocumentReady) return null;

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{tAcc("title")}</h1>
        <Button onClick={openAdd}>{tAcc("add-account")}</Button>
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
              <p className="text-sm opacity-70">{tAcc("list.balance")}</p>
              <p className="text-3xl font-bold">
                {formatMoney(a.balance as any)}
              </p>
            </div>

            <AccountStateSwitch key={a.id} account={a} />

            <ConfirmDialog
              open={openDeleteId === a.id}
              onOpenChange={() => setOpenDeleteId(null)}
              collapsible={true}
              actionColor="red"
              text={{
                title: tAcc("dialog.delete-title"),
                description: tAcc("dialog.delete-desc"),
                cancel: tAcc("dialog.button.cancel"),
                confirm: tAcc("dialog.button.delete"),
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
              {editing ? tAcc("dialog.edit-title") : tAcc("dialog.add-title")}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* NAME */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                {tAcc("list.name")}
              </label>
              <Input
                className="h-11 rounded-xl"
                placeholder={tAcc("dialog.name-placeholder")}
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
              />
            </div>

            {/* TYPE */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                {tAcc("list.type")}
              </label>
              <Select
                onValueChange={(v) => setForm((s) => ({ ...s, type: v }))}
                defaultValue={form.type}
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder={tAcc("dialog.type-placeholder")} />
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
                  <SelectValue placeholder={tAcc("dialog.icon-placeholder")} />
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
                {tAcc("list.color")}
              </label>

              <Select
                value={form.color}
                onValueChange={(v) => setForm((s) => ({ ...s, color: v }))}
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder={tAcc("dialog.color-placeholder")} />
                </SelectTrigger>

                <SelectContent>
                  {colorOptions.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      <div className="flex items-center gap-2">
                        <span
                          className="h-4 w-4 rounded-full border"
                          style={{ backgroundColor: c.value }}
                        />
                        {c.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="secondary"
              className="px-5"
              onClick={() => setOpenDialog(false)}
            >
              {tAcc("dialog.button.cancel")}
            </Button>

            <Button className="px-5" onClick={save}>
              {editing
                ? tAcc("dialog.button.save")
                : tAcc("dialog.button.create")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
