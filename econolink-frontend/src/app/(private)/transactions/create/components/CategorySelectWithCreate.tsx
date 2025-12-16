// components/CategorySelectWithCreate.tsx
"use client";

import { useState, useEffect } from "react";
import { Check, ChevronsUpDown, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import {
  CategoryIcon,
  categoryIcons,
  getTranslatedCategorie,
} from "@/app/(private)/category/lib/category";
import useCategory from "@/app/(private)/category/hooks/useCategory";
import { useTranslations } from "next-intl";

interface CategorySelectWithCreateProps {
  value: string;
  onValueChange: (value: string) => void;
  type?: "EXPENSE" | "INCOME" | "TRANSFER";
  placeholder?: string;
  disabled?: boolean;
  autoSelectFirst?: boolean;
}

export function CategorySelectWithCreate({
  value,
  onValueChange,
  type = "EXPENSE",
  placeholder = "Select a category...",
  disabled = false,
}: CategorySelectWithCreateProps) {
  const tCat = useTranslations("Category");
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryType, setNewCategoryType] = useState(type);
  const [newCategoryIcon, setNewCategoryIcon] = useState<CategoryIcon>("🛠️");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const {
    allCategories,
    saveCategory,
    loading: categoriesLoading,
  } = useCategory();

  const filteredCategories = allCategories.filter(
    (category) =>
      category.type === type &&
      (category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedCategory = allCategories.find(
    (category) => category.id === value
  );

  useEffect(() => {
    if (showCreateForm && searchTerm && !newCategoryName) {
      setNewCategoryName(searchTerm);
    }
  }, [showCreateForm, searchTerm, newCategoryName]);

  useEffect(() => {
    setNewCategoryType(type);
  }, [type]);

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) {
      toast.error(tCat("messages.name-required"));
      return;
    }

    if (isCreating) return;

    setIsCreating(true);

    try {
      const categoryData = {
        name: newCategoryName.trim(),
        type: newCategoryType,
        description: "",
        color: "#3B82F6",
        icon: newCategoryIcon,
      };

      await saveCategory(categoryData);

      setNewCategoryName("");
      setNewCategoryIcon("🛠️");
      setShowCreateForm(false);
      setSearchTerm("");

      setTimeout(() => {
        setOpen(false);
      }, 500);
    } catch {
    } finally {
      setIsCreating(false);
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    onValueChange(categoryId);
    setOpen(false);
    setSearchTerm("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && showCreateForm) {
      e.preventDefault();
      handleCreateCategory();
    }
  };

  useEffect(() => {
    if (!open) {
      setShowCreateForm(false);
      setNewCategoryName("");
      setSearchTerm("");
      setIsCreating(false);
    }
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={disabled || categoriesLoading}
        >
          {selectedCategory ? (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="flex-shrink-0 text-lg">
                {selectedCategory.icon}
              </span>
              <span className="truncate flex-1">
                {getTranslatedCategorie(t, selectedCategory.name, null).name}
              </span>
              <span className="text-muted-foreground text-sm hidden sm:inline flex-shrink-0">
                ({tCat(`type.${selectedCategory.type.toLowerCase()}`)})
              </span>
            </div>
          ) : (
            <span className="truncate">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput
            placeholder={tCat("search")}
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <CommandList>
            {showCreateForm ? (
              <div
                className="p-3 space-y-3 border-b"
                onKeyDown={handleKeyPress}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">
                    {tCat("dialog.add-title")}
                  </h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setShowCreateForm(false);
                      setNewCategoryName("");
                      setSearchTerm("");
                    }}
                    disabled={isCreating}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder={tCat("dialog.name-placeholder")}
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    autoFocus
                    className="h-9"
                    disabled={isCreating}
                  />

                  {/* Type selector */}
                  <select
                    value={newCategoryType}
                    onChange={(e) =>
                      setNewCategoryType(
                        e.target.value as "EXPENSE" | "INCOME" | "TRANSFER"
                      )
                    }
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    disabled={isCreating}
                  >
                    <option value="EXPENSE">{tCat("type.expense")}</option>
                    <option value="INCOME">{tCat("type.income")}</option>
                    <option value="TRANSFER">{tCat("type.transfer")}</option>
                  </select>

                  {/* icon selector */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Icon</label>
                    <div className="grid grid-cols-6 gap-1 max-h-32 overflow-y-auto">
                      {categoryIcons.map((icon) => (
                        <button
                          key={icon}
                          type="button"
                          onClick={() => setNewCategoryIcon(icon)}
                          className={cn(
                            "h-8 w-8 rounded-md flex items-center justify-center text-lg hover:bg-accent",
                            newCategoryIcon === icon
                              ? "bg-accent border-2 border-primary"
                              : "border"
                          )}
                          disabled={isCreating}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowCreateForm(false);
                        setNewCategoryName("");
                        setSearchTerm("");
                      }}
                      className="flex-1"
                      disabled={isCreating}
                    >
                      {tCat("dialog.button.cancel")}
                    </Button>
                    <Button
                      onClick={handleCreateCategory}
                      disabled={!newCategoryName.trim() || isCreating}
                      className="flex-1"
                    >
                      {isCreating
                        ? tCat("dialog.button.create-loading")
                        : tCat("dialog.button.create-simple")}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <CommandEmpty>
                  <div className="p-2 text-center">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => {
                        setShowCreateForm(true);
                        if (searchTerm && !newCategoryName) {
                          setNewCategoryName(searchTerm);
                        }
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      {tCat("dialog.button.create-simple")}{" "}
                      {searchTerm || "new category"}
                    </Button>
                  </div>
                </CommandEmpty>
                <CommandGroup>
                  {filteredCategories.map((category) => {
                    const categoryTr = getTranslatedCategorie(
                      t,
                      category.name,
                      null
                    );
                    return (
                      <CommandItem
                        key={category.id}
                        value={category.name}
                        onSelect={() => handleSelectCategory(category.id)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === category.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                        <div className="flex items-center gap-2 flex-1">
                          <span className="flex-shrink-0 text-lg">
                            {category.icon}
                          </span>
                          <span className="truncate flex-1">
                            {categoryTr.name}
                          </span>
                          <span className="text-muted-foreground text-sm flex-shrink-0">
                            ({tCat(`type.${category.type.toLowerCase()}`)})
                          </span>
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
