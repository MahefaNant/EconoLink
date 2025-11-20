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
import useAccount from "@/app/(private)/accounts/hooks/useAccount";
import { getIconByAccountType } from "@/app/(private)/accounts/lib/account.lib";

interface AccountSelectWithCreateProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  excludeAccount?: string;
}

export function AccountSelectWithCreate({
  value,
  onValueChange,
  placeholder = "Select an account...",
  disabled = false,
  excludeAccount,
}: AccountSelectWithCreateProps) {
  const [open, setOpen] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAccountName, setNewAccountName] = useState("");
  const [newAccountType, setNewAccountType] = useState("CASH");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const { accounts, saveAccount, loading: accountsLoading } = useAccount();

  const selectedAccount = accounts.find((account) => account.id === value);

  // Filter accounts: exclude the specified account (to prevent transfers to the same account)
  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.type.toLowerCase().includes(searchTerm.toLowerCase());

    // Exclude the specified account if provided
    const isExcluded = excludeAccount && account.id === excludeAccount;

    return matchesSearch && !isExcluded;
  });

  // Accounts available after exclusion
  const availableAccounts = excludeAccount
    ? accounts.filter((account) => account.id !== excludeAccount)
    : accounts;

  useEffect(() => {
    if (showCreateForm && searchTerm && !newAccountName) {
      setNewAccountName(searchTerm);
    }
  }, [showCreateForm, searchTerm, newAccountName]);

  const handleCreateAccount = async () => {
    if (!newAccountName.trim()) {
      toast.error("Account name is required");
      return;
    }

    if (isCreating) return;

    setIsCreating(true);

    try {
      const accountData = {
        name: newAccountName.trim(),
        type: newAccountType,
        color: "#3B82F6",
        icon: getIconByAccountType(newAccountType),
      };

      await saveAccount(accountData);

      setNewAccountName("");
      setNewAccountType("CASH");
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

  const handleSelectAccount = (accountId: string) => {
    onValueChange(accountId);
    setOpen(false);
    setSearchTerm("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && showCreateForm) {
      e.preventDefault();
      handleCreateAccount();
    }
  };

  useEffect(() => {
    if (!open) {
      setShowCreateForm(false);
      setNewAccountName("");
      setSearchTerm("");
      setIsCreating(false);
    }
  }, [open]);

  // Reset the selection if the selected account is excluded.
  useEffect(() => {
    if (excludeAccount && value === excludeAccount) {
      onValueChange("");
    }
  }, [excludeAccount, value, onValueChange]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={disabled || accountsLoading}
        >
          {selectedAccount ? (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="flex-shrink-0">{selectedAccount.icon}</span>
              <span className="truncate flex-1">{selectedAccount.name}</span>
              <span className="text-muted-foreground text-sm hidden sm:inline flex-shrink-0">
                ({selectedAccount.type})
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
            placeholder="Search accounts..."
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
                  <h4 className="font-medium text-sm">Create New Account</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setShowCreateForm(false);
                      setNewAccountName("");
                      setSearchTerm("");
                    }}
                    disabled={isCreating}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Account name"
                    value={newAccountName}
                    onChange={(e) => setNewAccountName(e.target.value)}
                    autoFocus
                    className="h-9"
                    disabled={isCreating}
                  />
                  <select
                    value={newAccountType}
                    onChange={(e) => setNewAccountType(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                    disabled={isCreating}
                  >
                    <option value="CASH">Cash</option>
                    <option value="BANK">Bank Account</option>
                    <option value="CREDIT_CARD">Credit Card</option>
                    <option value="INVESTMENT">Investment</option>
                    <option value="SAVINGS">Savings</option>
                  </select>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowCreateForm(false);
                        setNewAccountName("");
                        setSearchTerm("");
                      }}
                      className="flex-1"
                      disabled={isCreating}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateAccount}
                      disabled={!newAccountName.trim() || isCreating}
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
                        if (searchTerm && !newAccountName) {
                          setNewAccountName(searchTerm);
                        }
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create {searchTerm || "new account"}
                    </Button>
                  </div>
                </CommandEmpty>
                <CommandGroup>
                  {filteredAccounts.length === 0 ? (
                    <div className="p-2 text-center text-sm text-muted-foreground">
                      {excludeAccount && availableAccounts.length === 0
                        ? "No other accounts available"
                        : "No accounts found"}
                    </div>
                  ) : (
                    filteredAccounts.map((account) => (
                      <CommandItem
                        key={account.id}
                        value={account.name}
                        onSelect={() => handleSelectAccount(account.id)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === account.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                        <div className="flex items-center gap-2 flex-1">
                          <span className="flex-shrink-0">{account.icon}</span>
                          <span className="truncate flex-1">
                            {account.name}
                          </span>
                          <span className="text-muted-foreground text-sm flex-shrink-0">
                            ({account.type})
                          </span>
                        </div>
                      </CommandItem>
                    ))
                  )}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
