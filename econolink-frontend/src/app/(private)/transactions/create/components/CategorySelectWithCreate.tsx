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
} from "@/app/(private)/category/lib/category";
import useCategory from "@/app/(private)/category/hooks/useCategory";

interface CategorySelectWithCreateProps {
  value: string;
  onValueChange: (value: string) => void;
  type?: "EXPENSE" | "INCOME" | "TRANSFER"; // Filtre par type
  placeholder?: string;
  disabled?: boolean;
  autoSelectFirst?: boolean;
}

export function CategorySelectWithCreate({
  value,
  onValueChange,
  type = "EXPENSE", // Par défaut pour les dépenses
  placeholder = "Select a category...",
  disabled = false,
}: CategorySelectWithCreateProps) {
  const [open, setOpen] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryType, setNewCategoryType] = useState(type);
  const [newCategoryIcon, setNewCategoryIcon] = useState<CategoryIcon>("🛠️");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  // Utilisez votre hook existant
  const {
    allCategories,
    saveCategory,
    loading: categoriesLoading,
  } = useCategory();

  // Filtrer les catégories par type et terme de recherche
  const filteredCategories = allCategories.filter(
    (category) =>
      category.type === type &&
      (category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedCategory = allCategories.find(
    (category) => category.id === value
  );

  // Remplir automatiquement le nom avec le searchTerm
  useEffect(() => {
    if (showCreateForm && searchTerm && !newCategoryName) {
      setNewCategoryName(searchTerm);
    }
  }, [showCreateForm, searchTerm, newCategoryName]);

  // Mettre à jour le type quand la prop change
  useEffect(() => {
    setNewCategoryType(type);
  }, [type]);

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) {
      toast.error("Category name is required");
      return;
    }

    if (isCreating) return;

    setIsCreating(true);

    try {
      // Préparer les données de la catégorie
      const categoryData = {
        name: newCategoryName.trim(),
        type: newCategoryType,
        description: "",
        color: "#3B82F6", // Couleur par défaut
        icon: newCategoryIcon,
      };

      // Utiliser saveCategory qui prend les données directement
      await saveCategory(categoryData);

      // Réinitialiser APRÈS le succès
      setNewCategoryName("");
      setNewCategoryIcon("🛠️");
      setShowCreateForm(false);
      setSearchTerm("");

      // Fermer le popover
      setTimeout(() => {
        setOpen(false);
      }, 500);
    } catch {
      // Géré par le hook
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

  // Réinitialiser quand le popover se ferme
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
              <span className="truncate flex-1">{selectedCategory.name}</span>
              <span className="text-muted-foreground text-sm hidden sm:inline flex-shrink-0">
                ({selectedCategory.type.toLowerCase()})
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
            placeholder="Search categories..."
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
                  <h4 className="font-medium text-sm">Create New Category</h4>
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
                    placeholder="Category name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    autoFocus
                    className="h-9"
                    disabled={isCreating}
                  />

                  {/* Sélecteur de type */}
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
                    <option value="EXPENSE">Expense</option>
                    <option value="INCOME">Income</option>
                    <option value="TRANSFER">Transfer</option>
                  </select>

                  {/* Sélecteur d'icône */}
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
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateCategory}
                      disabled={!newCategoryName.trim() || isCreating}
                      className="flex-1"
                    >
                      {isCreating ? "Creating..." : "Create"}
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
                      Create {searchTerm || "new category"}
                    </Button>
                  </div>
                </CommandEmpty>
                <CommandGroup>
                  {filteredCategories.map((category) => (
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
                        <span className="truncate flex-1">{category.name}</span>
                        <span className="text-muted-foreground text-sm flex-shrink-0">
                          ({category.type.toLowerCase()})
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
