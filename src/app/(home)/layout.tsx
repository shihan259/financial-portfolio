import { SidebarProvider, SidebarInset } from "@/components/shadcn-ui/sidebar";
import { AppSidebar } from "@/app/_components/sidebar/sidebar";
import { cookies } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  return (
    <SidebarProvider
      name="appSidebar"
      defaultOpen={cookieStore.get("sidebar_state")?.value === "true"}
    >
      <div className="flex w-full h-full">
        <AppSidebar className="shrink-0" />
        <SidebarInset className="flex-1">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
