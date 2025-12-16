"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConfirmDialogProps = {
  collapsible?: boolean;

  actionColor?: "red" | "green" | "blue" | "destructive" | "default";

  text: {
    title: string;
    description?: string;
    cancel?: string;
    confirm?: string;
  };

  onConfirm: () => void;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  collapsible = true,
  actionColor = "default",
  text,
  onConfirm,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const colorMap: Record<string, string> = {
    red: "bg-red-600 hover:bg-red-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    destructive: "bg-destructive text-white hover:bg-destructive/90",
    default: "",
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        if (collapsible) setOpen(state);
      }}
    >
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{text.title}</DialogTitle>
          {text.description && (
            <DialogDescription>{text.description}</DialogDescription>
          )}
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2 pt-4">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            {text.cancel ?? "Cancel"}
          </Button>

          <Button
            onClick={() => {
              onConfirm();
              setOpen(false);
            }}
            className={cn(colorMap[actionColor])}
          >
            {text.confirm ?? "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
