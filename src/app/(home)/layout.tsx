import { SidebarProvider, SidebarInset } from "@/components/shadcn-ui/sidebar";
import { AppSidebar } from "@/components/ui/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full h-full">
        <AppSidebar className="shrink-0" />
          <SidebarInset className="flex-1">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
