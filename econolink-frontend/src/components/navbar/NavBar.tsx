"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import LocaleSwitcher from "./switcher/LocaleSwitcher";
import ToogleTheme from "./ToogleTheme";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <span className="font-bold text-lg">EconoLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs" className="font-medium hover:underline">
                      Documentation
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher />
            <ToogleTheme />
            <ButtonGroup>
              <Button size="sm" variant="link">
                Sign In
              </Button>
              <Button size="sm">Sign Up</Button>
            </ButtonGroup>
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-2">
            <ToogleTheme />
            <button
              className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
