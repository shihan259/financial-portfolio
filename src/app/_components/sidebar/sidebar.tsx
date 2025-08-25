"use client";

import * as React from "react";
import {
  HandCoins,
  HeartPlus,
  LucideIcon,
  PiggyBank,
  Scroll,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/shadcn-ui/sidebar";
import ProfileSwitcher from "./profile-switcher";
import { usePathname } from "next/navigation";
import InsetNavGroup from "@/app/_components/sidebar/inset-nav-group";
import ThemeSwitcher from "@/app/_components/sidebar/theme-switcher";
import { useTranslations } from "next-intl";

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: NavItem[];
};

export type NavGroup = {
  title: string;
  url: string;
  icon?: LucideIcon;
  items: NavItem[];
};

export type Navigation = {
  navMain: NavGroup[];
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
  const t = useTranslations("pageMetadata.titles");

  const data: Navigation = {
    navMain: [
      // Insurance group
      {
        title: t("insurance"),
        url: "/insurance",
        icon: Scroll,
        items: [
          {
            title: t("coverage"),
            url: "/insurance/coverage",
            icon: HeartPlus,
          },
          {
            title: t("savings"),
            url: "/insurance/savings",
            icon: PiggyBank,
          },
          {
            title: t("investments"),
            url: "/insurance/investments",
            icon: HandCoins,
          },
        ],
      },
    ],
  };

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader>
        <ProfileSwitcher name={"John Doe"} />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <InsetNavGroup navMain={data.navMain} />
        <div className="mt-auto p-2">
          <ThemeSwitcher />
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
