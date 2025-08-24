import { Separator } from "@/components/shadcn-ui/separator";
import { SidebarTrigger } from "@/components/shadcn-ui/sidebar";
import React from "react";
import BreadcrumbNav from "@/app/_components/nav-header/breadcrumb-nav";

interface NavHeaderProps {
  currentPageTitle: string;
  previousPageLinks?: Record<string, string>;
}

const NavHeader: React.FC<NavHeaderProps> = ({
  currentPageTitle,
  previousPageLinks,
}) => {
  return (
    <header className="z-(--z-navbar) dark:bg-background bg-secondary-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1 cursor-pointer" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <BreadcrumbNav
        currentPageTitle={currentPageTitle}
        previousPageLinks={previousPageLinks}
      />
    </header>
  );
};

export default NavHeader;
