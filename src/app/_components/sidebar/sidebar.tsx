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

const data: Navigation = {
  navMain: [
    // Insurance group
    {
      title: "Insurance",
      url: "/insurance",
      icon: Scroll,
      items: [
        {
          title: "Coverage",
          url: "/insurance/coverage",
          icon: HeartPlus,
        },
        {
          title: "Savings",
          url: "/insurance/savings",
          icon: PiggyBank,
        },
        {
          title: "Investments",
          url: "/insurance/investments",
          icon: HandCoins,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
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
