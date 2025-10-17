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

import LocaleSwitcher from "./switcher/LocaleSwitcher";
import ToogleTheme from "./ToogleTheme";
import { HomeSideBar } from "./switcher/HomeSideBar";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";

export function NavBar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container p-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-16 w-16">
              <Image
                src="/images/app-logo/econolink-logo.png"
                alt="MAHEFA"
                className="object-cover"
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <span className="hidden md:flex font-bold text-lg">EconoLink</span>
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
              <Button
                size="sm"
                variant="link"
                onClick={() => router.push("/login")}
              >
                Sign In
              </Button>
              <Button size="sm" onClick={() => router.push("/register")}>
                Sign Up
              </Button>
            </ButtonGroup>
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-2">
            <LocaleSwitcher />
            <ToogleTheme />
            <HomeSideBar />
          </div>
        </div>
      </div>
    </header>
  );
}
