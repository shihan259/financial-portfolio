import CoverageSidebar from "@/app/(home)/insurance/coverage/_components/coverage-sidebar/coverage-sidebar";
import List from "@/components/common/list/list";
import { ListItemProps } from "@/components/common/list/list-item";
import { Badge } from "@/components/shadcn-ui/badge";
import { SidebarProvider } from "@/components/shadcn-ui/sidebar";
import { BadgeAlertIcon, BadgeCheckIcon } from "lucide-react";

const deathBadge = (
  <Badge variant="secondary">
    <BadgeAlertIcon />
    Death
  </Badge>
);

const criticalIllnessBadge = (
  <Badge variant="destructive">
    <BadgeAlertIcon />
    Critical Illness
  </Badge>
);

const disabilityBadge = (
  <Badge variant="default">
    <BadgeAlertIcon />
    Disability
  </Badge>
);

const footerInfographic = (
  <div className="w-full space-y-2">
    <div className="flex justify-between items-center">
      <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
        Sum Assured
      </h4>
      <div>$100,000</div>
    </div>

    <div className="flex justify-between items-center">
      <h4 className="scroll-m-20 text-md font-semibold tracking-tight">
        Premium Paid
      </h4>
      <div>$10,000</div>
    </div>
  </div>
);

const listItems: ListItemProps[] = [
  {
    headerLabel: "Coverage Insurance Flexi Plan 1",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="success">
        {" "}
        <BadgeCheckIcon />
        Active
      </Badge>
    ),
    footerContent: footerInfographic,
  },
  {
    headerLabel: "Coverage Insurance Flexi Plan 2",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
        {disabilityBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="destructive">
        <BadgeAlertIcon />
        Over Budget
      </Badge>
    ),
    footerContent: footerInfographic,
  },
  {
    headerLabel: "Coverage Insurance Flexi Plan 2",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
        {disabilityBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="destructive">
        <BadgeAlertIcon />
        Over Budget
      </Badge>
    ),
    footerContent: footerInfographic,
  },
  {
    headerLabel: "Coverage Insurance Flexi Plan 2",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
        {disabilityBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="destructive">
        <BadgeAlertIcon />
        Over Budget
      </Badge>
    ),
    footerContent: footerInfographic,
  },
  {
    headerLabel: "Coverage Insurance Flexi Plan 2",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
        {disabilityBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="destructive">
        <BadgeAlertIcon />
        Over Budget
      </Badge>
    ),
    footerContent: footerInfographic,
  },
  {
    headerLabel: "Coverage Insurance Flexi Plan 2",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
        {disabilityBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="destructive">
        <BadgeAlertIcon />
        Over Budget
      </Badge>
    ),
    footerContent: footerInfographic,
  },
  {
    headerLabel: "Coverage Insurance Flexi Plan 2",
    content: (
      <div className="space-x-2">
        {deathBadge}
        {criticalIllnessBadge}
        {disabilityBadge}
      </div>
    ),
    headerBadge: (
      <Badge variant="destructive">
        <BadgeAlertIcon />
        Over Budget
      </Badge>
    ),
    footerContent: footerInfographic,
  },
];

const CoverageList = () => {
  return (
    <>
        <List
          items={listItems}
          listItemStyles="cursor-pointer w-auto"
          componentStyles=" grid gap-4"
        />
   
    </>
  );
};

export default CoverageList;
