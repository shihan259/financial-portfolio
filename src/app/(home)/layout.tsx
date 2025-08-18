import { SidebarProvider, SidebarInset } from "@/components/shadcn-ui/sidebar";
import NavHeader from "@/components/ui/nav-header/nav-header";
import { AppSidebar } from "@/components/ui/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
