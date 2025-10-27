"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
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
    <AlertDialog
      open={open}
      onOpenChange={(state) => {
        if (collapsible) {
          setOpen(state);
        }
      }}
    >
      <AlertDialogPortal>
        <AlertDialogOverlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]" />
        <AlertDialogContent className="fixed left-1/2 top-1/2 z-[60] w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>{text.title}</AlertDialogTitle>
            {text.description && (
              <AlertDialogDescription>
                {text.description}
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              {text.cancel ?? "Cancel"}
            </AlertDialogCancel>

            <AlertDialogAction asChild>
              <Button
                onClick={() => {
                  onConfirm();
                  setOpen(false);
                }}
                className={cn(colorMap[actionColor])}
              >
                {text.confirm ?? "Confirm"}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};
