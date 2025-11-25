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
import { Textarea } from "@/components/ui/textarea";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { Edit, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import useCategory from "./hooks/useCategory";
import { categoryDataKeyMap, categoryIcons } from "./lib/category";

export default function CategoriesPage() {
  const tCat = useTranslations("Category");
  const t = useTranslations();
  const [openDeleteId, setOpenDeleteId] = useState<string | null>(null);

  const {
    categories,
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
  } = useCategory();

  const isDocumentReady = useDocumentReadyState();

  const typeOptions = [
    { value: "INCOME", label: tCat("type.income") },
    { value: "EXPENSE", label: tCat("type.expense") },
    { value: "TRANSFER", label: tCat("type.transfer") },
  ];

  const colorOptions = [
    { label: tCat("colorLabel.red"), value: "#EF4444" },
    { label: tCat("colorLabel.green"), value: "#10B981" },
    { label: tCat("colorLabel.blue"), value: "#3B82F6" },
    { label: tCat("colorLabel.yellow"), value: "#F59E0B" },
    { label: tCat("colorLabel.purple"), value: "#8B5CF6" },
    { label: tCat("colorLabel.gray"), value: "#6B7280" },
    { label: tCat("colorLabel.black"), value: "#000000" },
  ];

  if (!isDocumentReady) return null;

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">{tCat("title")}</h1>
        <Button onClick={openAdd}>{tCat("add-account")}</Button>
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <Select
          value={form.type}
          onValueChange={(value) => setForm((s) => ({ ...s, type: value }))}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder={tCat("filter.by-type")} />
          </SelectTrigger>
          <SelectContent>
            {typeOptions.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {categories.map((category) => {
          const mapping = categoryDataKeyMap[category.name];
          const labelFinal = mapping ? t(mapping.label) : category.name;
          const descriptionFinal = mapping
            ? t(mapping.description)
            : category.description;
          return (
            <div
              key={category.id}
              className="rounded-2xl bg-card border shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
                    style={{ background: category.color ?? "#e5e5e5" }}
                  >
                    {category.icon}
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg">{labelFinal}</h2>
                    <p className="text-sm opacity-70">
                      {
                        typeOptions.find((type) => type.value === category.type)
                          ?.label
                      }
                    </p>
                  </div>
                </div>

                {category.user_id && (
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => openEdit(category)}
                    >
                      <Edit />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => setOpenDeleteId(category.id)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                )}
              </div>

              {category.description && (
                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    {descriptionFinal}
                  </p>
                </div>
              )}

              <ConfirmDialog
                open={openDeleteId === category.id}
                onOpenChange={() => setOpenDeleteId(null)}
                collapsible={true}
                actionColor="red"
                text={{
                  title: tCat("dialog.delete-title"),
                  description: tCat("dialog.delete-desc"),
                  cancel: tCat("dialog.button.cancel"),
                  confirm: tCat("dialog.button.delete"),
                }}
                onConfirm={() => remove(category.id)}
              />
            </div>
          );
        })}
      </div>

      {loading && <div className="p-4 text-center">Loading...</div>}

      {categories.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {tCat("messages.no-categories")}
          </p>
        </div>
      )}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {editing ? tCat("dialog.edit-title") : tCat("dialog.add-title")}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-4 mt-4">
            {/* NAME */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                {tCat("list.name")}
              </label>
              <Input
                className="h-11 rounded-xl"
                placeholder={tCat("dialog.name-placeholder")}
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
              />
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                {tCat("list.description")}
              </label>
              <Textarea
                className="rounded-xl"
                placeholder={tCat("dialog.description-placeholder")}
                value={form.description}
                onChange={(e) =>
                  setForm((s) => ({ ...s, description: e.target.value }))
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* TYPE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-muted-foreground">
                  {tCat("list.type")}
                </label>
                <Select
                  value={form.type}
                  onValueChange={(value) =>
                    setForm((s) => ({ ...s, type: value }))
                  }
                >
                  <SelectTrigger className="h-11">
                    <SelectValue
                      placeholder={tCat("dialog.type-placeholder")}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* COLOR */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-muted-foreground">
                  {tCat("list.color")}
                </label>
                <Select
                  value={form.color}
                  onValueChange={(v) => setForm((s) => ({ ...s, color: v }))}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue
                      placeholder={tCat("dialog.color-placeholder")}
                    />
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

            {/* ICON SELECTION */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-muted-foreground">
                {tCat("list.icon")}
              </label>
              <div className="grid grid-cols-6 gap-2 p-3 border rounded-xl">
                {categoryIcons.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all ${
                      form.icon === icon
                        ? "ring-2 ring-primary"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setForm((s) => ({ ...s, icon }))}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* PREVIEW */}
            <div className="flex items-center justify-center p-4 border rounded-xl bg-muted/50">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {tCat("dialog.icon-preview")}
                </p>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto"
                  style={{ background: form.color }}
                >
                  {form.icon}
                </div>
                <p className="text-sm mt-2 font-medium">
                  {form.name || tCat("dialog.icon-preview-placeholder")}
                </p>
                {form.description && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {form.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="secondary"
              className="px-5"
              onClick={() => setOpenDialog(false)}
            >
              {tCat("dialog.button.cancel")}
            </Button>

            <Button
              className="px-5"
              onClick={() => {
                saveCategory();
                setOpenDialog(false);
              }}
            >
              {editing
                ? tCat("dialog.button.save")
                : tCat("dialog.button.create")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
