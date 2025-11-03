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
import { LogOut, Settings } from "lucide-react";
import { logout } from "@/app/(auth)/lib/logOut";
import { useRouter } from "next/navigation";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useTranslations } from "next-intl";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { useAuthStore } from "@/stores/useAuthStore";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
          isActive: true,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations();
  const userStore = useAuthStore((s) => s.user);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/");
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
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>

        <SidebarFooter className="mt-auto border-t p-4">
          <Button
            variant={"default"}
            className="w-full justify-start"
            onClick={() => router.push("/settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            {t("Dashboard.SideBar.settings")}
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
