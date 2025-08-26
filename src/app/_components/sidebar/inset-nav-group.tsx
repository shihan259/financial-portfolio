import { NavGroup } from "@/app/_components/sidebar/sidebar";
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
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavGroupInsuranceProps {
  navMain: NavGroup[];
}

const InsetNavGroup: React.FC<NavGroupInsuranceProps> = ({ navMain }) => {
  const pathName = usePathname();
  const t = useTranslations("sidebar");

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t("groups")}</SidebarGroupLabel>
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
                <Link prefetch={false} href={navGroup.url}>
                  {navGroup.icon && <navGroup.icon />}
                  <span>{navGroup.title}</span>
                </Link>
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
                            <Link prefetch={false} href={subItem.url}>
                              {subItem.icon && <subItem.icon />}
                              <span>{subItem.title}</span>
                            </Link>
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
