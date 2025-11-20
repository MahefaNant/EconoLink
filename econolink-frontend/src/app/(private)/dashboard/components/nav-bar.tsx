import LocaleSwitcher from "@/components/navbar/switcher/LocaleSwitcher";
import ToogleTheme from "@/components/navbar/ToogleTheme";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import useRouterData from "../hooks/useRouterData";

export default function NavBar() {
  const { data } = useRouterData();

  const activeItem = data.navMain
    .flatMap((d) => d.items.map((item) => ({ ...item, parentTitle: d.title })))
    .find((item) => item.isActive);
  return (
    <header
      className="sticky top-0 z-50 
    flex h-16 shrink-0 items-center justify-between gap-2 
    border-b px-4 
    bg-background/80 backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {activeItem && (
              <>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    {activeItem.parentTitle}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{activeItem.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <LocaleSwitcher />
        <ToogleTheme />
      </div>

      <div className="flex md:hidden items-center gap-2">
        <LocaleSwitcher />
        <ToogleTheme />
      </div>
    </header>
  );
}
