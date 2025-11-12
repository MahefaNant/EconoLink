import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ITransaction, TransactionType } from "@/types/ITransaction";
import { MoreHorizontal } from "lucide-react";
import { JSX, memo, useState } from "react";

interface TransactionCardProps {
  transaction: ITransaction;
  onEdit: (transaction: ITransaction) => void;
  onDelete: (transaction: ITransaction) => void;
  getTypeIcon: (type: TransactionType) => JSX.Element;
  getTypeVariant: (
    type: TransactionType
  ) => "default" | "destructive" | "secondary";
}

export const TransactionCard = memo(function TransactionCard({
  transaction,
  onEdit,
  onDelete,
  getTypeIcon,
  getTypeVariant,
}: TransactionCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatAmount = (amount: number, type: TransactionType) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const formatted = formatter.format(Math.abs(amount));
    return type === "EXPENSE" ? `-${formatted}` : formatted;
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors group">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex-shrink-0">{getTypeIcon(transaction.type)}</div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <h3 className="font-medium truncate">{transaction.description}</h3>
            <Badge variant={getTypeVariant(transaction.type)} className="w-fit">
              {transaction.type.toLowerCase()}
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground mt-1">
            <span>{formatDate(transaction.date)}</span>
            {transaction.notes && (
              <span className="truncate">• {transaction.notes}</span>
            )}
            {transaction.location && (
              <span className="truncate">• {transaction.location}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div
            className={`font-semibold ${
              transaction.type === "INCOME"
                ? "text-green-600"
                : transaction.type === "EXPENSE"
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {formatAmount(transaction.amount, transaction.type)}
          </div>
          {transaction.is_recurring && (
            <Badge variant="outline" className="text-xs">
              Recurring
            </Badge>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="relative sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          {showMenu && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-background border rounded-md shadow-lg z-10">
              <button
                onClick={() => {
                  setShowMenu(false);
                  onEdit(transaction);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-accent"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setShowMenu(false);
                  onDelete(transaction);
                }}
                className="w-full px-3 py-2 text-left text-sm text-destructive hover:bg-accent"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(transaction)}
          >
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(transaction)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
});
