/* eslint-disable react-hooks/exhaustive-deps */
// app/transactions/create/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import type {
  CreateTransactionDto,
  TransactionType,
} from "@/types/ITransaction";
import { AccountSelectWithCreate } from "./components/AccountSelectWithCreate";
import { CategorySelectWithCreate } from "./components/CategorySelectWithCreate";
import useCategory from "../../category/hooks/useCategory";
import useDocumentReadyState from "@/hooks/useDocumentReadyState";
import { useCreateTransaction } from "./hooks/useCreateTransaction";

export default function CreateTransactionPage() {
  const router = useRouter();

  const isReady = useDocumentReadyState();

  const { loading, createTransaction } = useCreateTransaction();

  const { allCategories } = useCategory();

  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    type: "EXPENSE" as TransactionType,
    date: new Date().toISOString().split("T")[0],
    notes: "",
    location: "",
    account_id: "",
    category_id: "",
    to_account_id: "", // NOUVEAU: Pour TRANSFER
  });

  const getFirstCategoryByType = (type: TransactionType): string => {
    const firstCategory = allCategories.find(
      (category) => category.type === type
    );
    return firstCategory?.id || "";
  };

  useEffect(() => {
    if (allCategories.length > 0 && formData.type !== "TRANSFER") {
      const firstCategoryId = getFirstCategoryByType(formData.type);
      if (firstCategoryId && firstCategoryId !== formData.category_id) {
        setFormData((prev) => ({
          ...prev,
          category_id: firstCategoryId,
        }));
      }
    }
  }, [formData.type, allCategories]);

  // Réinitialiser les champs quand le type change
  useEffect(() => {
    if (formData.type === "TRANSFER") {
      // Pour TRANSFER, on cache la catégorie et on montre to_account_id
      setFormData((prev) => ({
        ...prev,
        category_id: "", // Catégorie vide pour TRANSFER
      }));
    } else {
      // Pour INCOME/EXPENSE, on cache to_account_id
      setFormData((prev) => ({
        ...prev,
        to_account_id: "", // to_account_id vide pour INCOME/EXPENSE
      }));
    }
  }, [formData.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation selon le type
    if (!formData.account_id) {
      toast.error("Please select an account");
      return;
    }

    if (formData.type === "TRANSFER" && !formData.to_account_id) {
      toast.error("Please select a destination account for transfer");
      return;
    }

    if (
      formData.type === "TRANSFER" &&
      formData.account_id === formData.to_account_id
    ) {
      toast.error("Cannot transfer to the same account");
      return;
    }

    try {
      const data: CreateTransactionDto = {
        amount: parseFloat(formData.amount),
        description: formData.description,
        type: formData.type,
        date: new Date(formData.date).toISOString(),
        account_id: formData.account_id,
        // Gérer les champs optionnels selon le type
        notes: formData.notes || undefined,
        location: formData.location || undefined,
        category_id:
          formData.type !== "TRANSFER"
            ? formData.category_id || undefined
            : undefined,
        to_account_id:
          formData.type === "TRANSFER" ? formData.to_account_id : undefined,
      };

      await createTransaction(data);
      router.push("/transactions");
    } catch {
      // toast.error(error.message || "Failed to create transaction");
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

  if (!isReady) return null;

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
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Create Transaction
          </h1>
          <p className="text-muted-foreground">
            Add a new financial transaction
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount *</Label>
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
                  <option value="EXPENSE">Expense</option>
                  <option value="INCOME">Income</option>
                  <option value="TRANSFER">Transfer</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Input
                id="description"
                placeholder="Enter description"
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
                  placeholder="Select an account..."
                />
              </div>
            </div>

            {/* To Account (seulement pour TRANSFER) */}
            {formData.type === "TRANSFER" && (
              <div className="space-y-2">
                <Label htmlFor="to_account_id">To Account *</Label>
                <AccountSelectWithCreate
                  value={formData.to_account_id}
                  onValueChange={handleToAccountChange}
                  placeholder="Select destination account..."
                  excludeAccount={formData.account_id} // Éviter de sélectionner le même compte
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
                  placeholder="Select a category..."
                  autoSelectFirst={false}
                />
                <p className="text-xs text-muted-foreground">
                  Category automatically selected based on transaction type
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
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Transaction location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/transactions")}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Transaction"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
