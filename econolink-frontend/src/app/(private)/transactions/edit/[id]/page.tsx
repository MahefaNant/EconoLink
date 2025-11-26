/* eslint-disable react-hooks/exhaustive-deps */
// app/transactions/edit/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type {
  UpdateTransactionDto,
  TransactionType,
} from "@/types/ITransaction";
import { AccountSelectWithCreate } from "../../create/components/AccountSelectWithCreate";
import { CategorySelectWithCreate } from "../../create/components/CategorySelectWithCreate";
import useCategory from "@/app/(private)/category/hooks/useCategory";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import { useEditTransaction } from "./hooks/useEditTransaction";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useTranslations } from "next-intl";

export default function EditTransactionPage() {
  const tTr = useTranslations("Transaction");
  const tAcc = useTranslations("Accounts");
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const isReady = useDocumentReadyState();
  const router = useRouter();
  const params = useParams();
  const transactionId = params.id as string;

  const { allCategories } = useCategory();
  const {
    transaction,
    fetching,
    loading,
    updateTransaction,
    deleteTransaction,
  } = useEditTransaction(transactionId);

  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    type: "EXPENSE" as TransactionType,
    date: new Date().toISOString().split("T")[0],
    notes: "",
    location: "",
    account_id: "",
    category_id: "",
    to_account_id: "",
  });

  const getFirstCategoryByType = (type: TransactionType): string => {
    const firstCategory = allCategories.find(
      (category) => category.type === type
    );
    return firstCategory?.id || "";
  };

  useEffect(() => {
    if (transaction) {
      setFormData({
        amount: Math.abs(transaction.amount).toString(),
        description: transaction.description,
        type: transaction.type,
        date: transaction.date.split("T")[0],
        notes: transaction.notes || "",
        location: transaction.location || "",
        account_id: transaction.account_id,
        category_id: transaction.category_id || "",
        to_account_id: transaction.to_account_id || "",
      });
    }
  }, [transaction]);

  useEffect(() => {
    if (allCategories.length > 0 && formData.type !== "TRANSFER") {
      const firstCategoryId = getFirstCategoryByType(formData.type);
      const currentCategory = allCategories.find(
        (cat) => cat.id === formData.category_id
      );
      if (firstCategoryId && currentCategory?.type !== formData.type) {
        setFormData((prev) => ({
          ...prev,
          category_id: firstCategoryId,
        }));
      }
    }
  }, [formData.type, allCategories]);

  // Reset the fields when the type changes
  useEffect(() => {
    if (formData.type === "TRANSFER") {
      setFormData((prev) => ({
        ...prev,
        category_id: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        to_account_id: "",
      }));
    }
  }, [formData.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.account_id) {
      toast.error(tTr("messages.select-account"));
      return;
    }

    if (formData.type === "TRANSFER" && !formData.to_account_id) {
      toast.error(tTr("messages.select-destination"));
      return;
    }

    if (
      formData.type === "TRANSFER" &&
      formData.account_id === formData.to_account_id
    ) {
      toast.error(tTr("messages.same-transfer-error"));
      return;
    }

    if (!transaction) {
      toast.error("Transaction not found");
      return;
    }

    try {
      const data: UpdateTransactionDto = {
        amount: parseFloat(formData.amount),
        description: formData.description,
        type: formData.type,
        date: new Date(formData.date).toISOString(),
        account_id: formData.account_id,
        // Manage optional fields according to type
        notes: formData.notes || undefined,
        location: formData.location || undefined,
        category_id:
          formData.type !== "TRANSFER"
            ? formData.category_id || undefined
            : undefined,
        to_account_id:
          formData.type === "TRANSFER" ? formData.to_account_id : undefined,
      };

      await updateTransaction(transaction.id, data);
      router.push("/transactions");
    } catch {
      // toast.error(error.message || "Failed to update transaction");
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAccountChange = (accountId: string) => {
    setFormData((prev) => ({
      ...prev,
      account_id: accountId,
    }));
  };

  const handleToAccountChange = (accountId: string) => {
    setFormData((prev) => ({
      ...prev,
      to_account_id: accountId,
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      category_id: categoryId,
    }));
  };

  const handleDelete = async () => {
    if (!transaction) return;

    try {
      await deleteTransaction();
      router.push("/transactions");
    } catch {
      toast.error("Failed to delete transaction");
    }
  };

  if (!isReady) return null;

  if (fetching) {
    return (
      <div className="container mx-auto p-4 max-w-2xl">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading transaction...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!transaction) {
    return (
      <div className="container mx-auto p-4 max-w-2xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-muted-foreground">
            {tTr("messages.not-found")}
          </h1>
          <Button onClick={() => router.push("/transactions")} className="mt-4">
            {tTr("messages.back")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => router.push("/transactions")}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{tTr("edit")}</h1>
          <p className="text-muted-foreground">{tTr("update")}</p>
        </div>
        <Button
          variant="destructive"
          onClick={() => setOpenDelete(true)}
          disabled={loading}
        >
          {tTr("dialog.button.delete")}
        </Button>
      </div>

      <ConfirmDialog
        open={openDelete}
        onOpenChange={() => setOpenDelete(false)}
        collapsible={true}
        actionColor="red"
        text={{
          title: tAcc("dialog.delete-title"),
          description: tAcc("dialog.delete-desc"),
          cancel: tAcc("dialog.button.cancel"),
          confirm: tAcc("dialog.button.delete"),
        }}
        onConfirm={handleDelete}
      />

      {/* Formulaire */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">{tTr("form.amount")}</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) => handleInputChange("amount", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type *</Label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => handleInputChange("type", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  required
                >
                  <option value="EXPENSE">{tTr("Filter.type.expense")}</option>
                  <option value="INCOME">{tTr("Filter.type.income")}</option>
                  <option value="TRANSFER">
                    {tTr("Filter.type.transfer")}
                  </option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Input
                id="description"
                placeholder="description..."
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                required
              />
            </div>

            {/* Date and Account */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account_id">
                  {formData.type === "TRANSFER"
                    ? "From Account *"
                    : "Account *"}
                </Label>
                <AccountSelectWithCreate
                  value={formData.account_id}
                  onValueChange={handleAccountChange}
                  placeholder={tTr("form.select-account-placeholder")}
                />
              </div>
            </div>

            {/* To Account (seulement pour TRANSFER) */}
            {formData.type === "TRANSFER" && (
              <div className="space-y-2">
                <Label htmlFor="to_account_id">{tTr("to-account")}</Label>
                <AccountSelectWithCreate
                  value={formData.to_account_id}
                  onValueChange={handleToAccountChange}
                  placeholder={tTr("form.select-destination-placeholder")}
                />
              </div>
            )}

            {/* Category (caché pour TRANSFER) */}
            {formData.type !== "TRANSFER" && (
              <div className="space-y-2">
                <Label htmlFor="category_id">Category</Label>
                <CategorySelectWithCreate
                  value={formData.category_id}
                  onValueChange={handleCategoryChange}
                  type={formData.type}
                  placeholder={tTr("form.select-category-placeholder")}
                  autoSelectFirst={false}
                />
                <p className="text-xs text-muted-foreground">
                  {tTr("form.category-desc")}
                </p>
              </div>
            )}

            {/* Notes and Location */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">{tTr("form.location")}</Label>
              <Input
                id="location"
                placeholder={tTr("form.location-placeholder")}
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>

            {/* Transaction informations */}
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <h4 className="font-medium text-sm">{tTr("info")}</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">ID:</span>
                  <p className="font-mono text-xs">{transaction.id}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    {tTr("created")}
                  </span>
                  <p>
                    {transaction.created_at
                      ? new Date(transaction.created_at).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    {tTr("last-update")}
                  </span>
                  <p>
                    {transaction.updated_at
                      ? new Date(transaction.updated_at).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Synced:</span>
                  <p>{transaction.is_synced ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/transactions")}
                disabled={loading}
              >
                {tTr("dialog.button.cancel")}
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {tTr("dialog.button.updating")}
                  </>
                ) : (
                  tTr("dialog.button.update")
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
