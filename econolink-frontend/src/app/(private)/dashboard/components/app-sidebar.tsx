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
import { LogOut } from "lucide-react";
import { logout } from "@/app/(auth)/lib/logOut";
import { useRouter } from "next/navigation";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Dialog");
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
            variant="destructive"
            className="w-full justify-start"
            onClick={() => setOpen(true)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t("LogOut.text")}
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
          title: t("LogOut.title"),
          description: t("LogOut.description"),
          cancel: t("LogOut.cancel"),
          confirm: t("LogOut.confirm"),
        }}
        onConfirm={handleLogout}
      />
    </>
  );
}
