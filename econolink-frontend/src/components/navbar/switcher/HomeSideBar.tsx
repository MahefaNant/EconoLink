"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Home, PanelLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HomeSideBar() {
  const menuItems = [{ title: "Home", url: "/", icon: Home }];

  const router = useRouter();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Open menu"
        >
          <PanelLeftIcon className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col justify-between w-[260px] sm:w-[300px] p-0"
      >
        {/* Header */}
        <div>
          <SheetHeader className="border-b p-4">
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
          </SheetHeader>

          {/* links list */}
          <nav className="p-4 flex flex-col gap-1">
            {menuItems.map((item) => (
              <SheetClose asChild key={item.title}>
                <Link
                  href={item.url}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition"
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => router.push("/login")}
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="w-full"
            onClick={() => router.push("/register")}
          >
            Sign Up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
