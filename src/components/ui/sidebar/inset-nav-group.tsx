import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/shadcn-ui/sidebar";
import { NavGroup } from "@/components/ui/sidebar/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavGroupInsuranceProps {
  navMain: NavGroup[];
}

const InsetNavGroup: React.FC<NavGroupInsuranceProps> = ({ navMain }) => {
  const pathName = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Groups</SidebarGroupLabel>
      <SidebarMenu>
        {navMain.map((navGroup) => (
          <Collapsible
            key={navGroup.title}
            asChild
            defaultOpen={
              pathName === navGroup.url ||
              navGroup.items.some((item) => pathName === item.url)
            }
          >
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={navGroup.title}
                isActive={pathName === navGroup.url}
              >
                <a href={navGroup.url}>
                  {navGroup.icon && <navGroup.icon />}
                  <span>{navGroup.title}</span>
                </a>
              </SidebarMenuButton>
              {navGroup.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {navGroup.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathName === subItem.url}
                          >
                            <a href={subItem.url}>
                              {subItem.icon && <subItem.icon />}
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default InsetNavGroup;
