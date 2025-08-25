import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/shadcn-ui/sidebar";

const CoverageSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props} side="right">
      <SidebarHeader>asdasdads</SidebarHeader>
      <SidebarContent>asdasd</SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default CoverageSidebar;
