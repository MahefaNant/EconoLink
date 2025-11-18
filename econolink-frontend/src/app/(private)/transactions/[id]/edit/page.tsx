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
  ITransaction,
} from "@/types/ITransaction";
import { AccountSelectWithCreate } from "../../create/components/AccountSelectWithCreate";
import { CategorySelectWithCreate } from "../../create/components/CategorySelectWithCreate";
import useCategory from "@/app/(private)/category/hooks/useCategory";
import { transactionApi } from "../../lib/transaction";

export default function EditTransactionPage() {
  const router = useRouter();
  const params = useParams();
  const transactionId = params.id as string;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [transaction, setTransaction] = useState<ITransaction | null>(null);

  // Utilisez le hook category
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
  });

  // Fonction pour trouver la première catégorie d'un type donné
  const getFirstCategoryByType = (type: TransactionType): string => {
    const firstCategory = allCategories.find(
      (category) => category.type === type
    );
    return firstCategory?.id || "";
  };

  // Effet pour la sélection automatique de catégorie
  useEffect(() => {
    if (allCategories.length > 0) {
      const firstCategoryId = getFirstCategoryByType(formData.type);
      // Ne mettre à jour que si la catégorie actuelle n'est pas déjà une catégorie du bon type
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

  // Charger la transaction à éditer
  useEffect(() => {
    const fetchTransaction = async () => {
      if (!transactionId) return;

      try {
        setFetching(true);
        const data = await transactionApi.getById(transactionId);
        setTransaction(data);

        setFormData({
          amount: Math.abs(data.amount).toString(),
          description: data.description,
          type: data.type,
          date: data.date.split("T")[0],
          notes: data.notes || "",
          location: data.location || "",
          account_id: data.account_id,
          category_id: data.category_id || "",
        });
      } catch {
        toast.error("Failed to load transaction");
        router.push("/transactions");
      } finally {
        setFetching(false);
      }
    };

    fetchTransaction();
  }, [transactionId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.account_id) {
      toast.error("Please select an account");
      return;
    }

    if (!transaction) {
      toast.error("Transaction not found");
      return;
    }

    setLoading(true);
    try {
      const data = {
        ...formData,
        amount: parseFloat(formData.amount),
        date: new Date(formData.date).toISOString(),
      };

      await transactionApi.update(transaction.id, data as UpdateTransactionDto);
      toast.success("Transaction updated successfully");

      router.push("/transactions");
    } catch {
      toast.error("Failed to update transaction");
    } finally {
      setLoading(false);
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

  const handleCategoryChange = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      category_id: categoryId,
    }));
  };

  const handleDelete = async () => {
    if (!transaction) return;

    if (!confirm("Are you sure you want to delete this transaction?")) {
      return;
    }

    setLoading(true);
    try {
      await transactionApi.delete(transaction.id);
      toast.success("Transaction deleted successfully");
      router.push("/transactions");
    } catch {
      toast.error("Failed to delete transaction");
    } finally {
      setLoading(false);
    }
  };

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
            Transaction not found
          </h1>
          <Button onClick={() => router.push("/transactions")} className="mt-4">
            Back to Transactions
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
          <h1 className="text-3xl font-bold tracking-tight">
            Edit Transaction
          </h1>
          <p className="text-muted-foreground">Update transaction details</p>
        </div>
        <Button variant="destructive" onClick={handleDelete} disabled={loading}>
          Delete
        </Button>
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
                <Label htmlFor="account_id">Account *</Label>
                <AccountSelectWithCreate
                  value={formData.account_id}
                  onValueChange={handleAccountChange}
                  placeholder="Select an account..."
                />
              </div>
            </div>

            {/* Category */}
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

            {/* Informations de la transaction */}
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <h4 className="font-medium text-sm">Transaction Information</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">ID:</span>
                  <p className="font-mono text-xs">{transaction.id}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Created:</span>
                  <p>
                    {transaction.created_at
                      ? new Date(transaction.created_at).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Last Updated:</span>
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
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Transaction"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
