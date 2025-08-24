"use client";

import PreviousLinkBreadCrumbItem from "@/app/_components/nav-header/previous-breadcrumb-link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn-ui/breadcrumb";

interface NavHeaderProps {
  currentPageTitle: string;
  previousPageLinks?: Record<string, string>;
}

const BreadcrumbNav: React.FC<NavHeaderProps> = ({
  currentPageTitle,
  previousPageLinks,
}) => {
  const previousLinks = previousPageLinks
    ? Object.entries(previousPageLinks)
    : [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {previousLinks.map(([label, href], index) => (
          <PreviousLinkBreadCrumbItem
            key={href}
            href={href}
            label={label}
            showSeparator={index < previousLinks.length - 1}
          />
        ))}

        {previousLinks.length > 0 && (
          <BreadcrumbSeparator className="hidden md:block" />
        )}

        <BreadcrumbItem>
          <BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbNav;
