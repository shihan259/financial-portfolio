import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/shadcn-ui/breadcrumb";
import React from "react";

interface PreviousLinkBreadCrumbItemProps {
  href: string;
  label: string;
  showSeparator?: boolean;
}

const PreviousLinkBreadCrumbItem: React.FC<PreviousLinkBreadCrumbItemProps> = ({
  href,
  label,
  showSeparator,
}) => {
  return (
    <>
      <BreadcrumbItem className="hidden md:block">
        <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
      </BreadcrumbItem>
      {showSeparator && <BreadcrumbSeparator className="hidden md:block" />}
    </>
  );
};

export default PreviousLinkBreadCrumbItem;
