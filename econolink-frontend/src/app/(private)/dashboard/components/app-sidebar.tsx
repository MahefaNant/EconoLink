"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import { Button } from "@/components/ui/button";
import { Home, LogOut, ChevronDown, ChevronRight } from "lucide-react";
import { logout } from "@/app/(auth)/lib/logOut";
import { useRouter } from "next/navigation";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useTranslations } from "next-intl";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { useAuthStore } from "@/stores/useAuthStore";
import useRouterData from "../hooks/useRouterData";
import { toast } from "sonner";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations();
  const tOffline = useTranslations("offline");
  const userStore = useAuthStore((s) => s.user);
  const [open, setOpen] = React.useState(false);
  const { data } = useRouterData();
  const router = useRouter();

  // Initialiser tous les groupes collapsibles comme ouverts par défaut
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {};
      data.navMain.forEach((group) => {
        if (group.isCollapsible) {
          initialState[group.title] = true;
        }
      });
      return initialState;
    }
  );

  const handleLogout = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${userStore?.id}`
      );
      if (!res.ok) throw new Error("Failed to fetch user");
      await logout();
      router.replace("/");
    } catch {
      toast.error(tOffline("text3"));
    }
  };

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  return (
    <>
      <Sidebar {...props}>
        <SidebarHeader>
          <VersionSwitcher
            versions={data.versions}
            defaultVersion={data.versions[0]}
          />
          <SearchForm />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup key={"UserP"}>
            <SidebarGroupLabel>
              <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
                <Item variant="muted">
                  <ItemMedia>
                    <Image
                      src={userStore?.avatar ?? "/avatars/avatar_1.svg"}
                      alt={userStore?.avatar ?? "User avatar"}
                      className="object-cover rounded-full"
                      width={30}
                      height={30}
                      priority={true}
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-1">
                      {userStore?.name}
                    </ItemTitle>
                  </ItemContent>
                  <ItemContent className="flex-none justify-end">
                    <span className="text-sm tabular-nums">•</span>
                  </ItemContent>
                </Item>
              </div>
            </SidebarGroupLabel>
          </SidebarGroup>
          {data.navMain.map((group) => (
            <SidebarGroup key={group.title}>
              {group.isCollapsible ? (
                <>
                  <SidebarGroupLabel
                    asChild
                    className="cursor-pointer hover:bg-accent rounded-md p-2 transition-colors"
                    onClick={() => toggleGroup(group.title)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{group.title}</span>
                      {openGroups[group.title] ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </SidebarGroupLabel>
                  {openGroups[group.title] && (
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {group.items.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton
                                asChild
                                isActive={item.isActive}
                              >
                                <a
                                  href={item.url}
                                  className="flex items-center gap-2"
                                >
                                  <IconComponent className="h-4 w-4" />
                                  <span>{item.title}</span>
                                </a>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  )}
                </>
              ) : (
                <>
                  <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={item.isActive}>
                              <a
                                href={item.url}
                                className="flex items-center gap-2"
                              >
                                <IconComponent className="h-4 w-4" />
                                <span>{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </>
              )}
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter className="mt-auto border-t p-4">
          <Button
            variant={"default"}
            className="w-full justify-start"
            onClick={() => router.push("/")}
          >
            <Home className="mr-2 h-4 w-4" />
            {t("Dashboard.SideBar.home")}
          </Button>

          <Button
            variant="destructive"
            className="w-full justify-start"
            onClick={() => setOpen(true)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t("Dialog.LogOut.text")}
          </Button>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        collapsible={false}
        actionColor="red"
        text={{
          title: t("Dialog.LogOut.title"),
          description: t("Dialog.LogOut.description"),
          cancel: t("Dialog.LogOut.cancel"),
          confirm: t("Dialog.LogOut.confirm"),
        }}
        onConfirm={handleLogout}
      />
    </>
  );
}
