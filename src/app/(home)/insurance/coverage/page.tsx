import PageContainer from "@/components/common/page-container";
import NavHeader from "@/app/_components/nav-header/nav-header";
import CoverageFilter from "@/app/(home)/insurance/coverage/_components/coverage-filter/coverage-filter";
import CoverageList from "@/app/(home)/insurance/coverage/_components/coverage-list/coverage-list";
import { SidebarProvider } from "@/components/shadcn-ui/sidebar";
import CoverageSidebar from "@/app/(home)/insurance/coverage/_components/coverage-sidebar/coverage-sidebar";

export default function Page() {
  return (
    <>
      <NavHeader
        currentPageTitle="Coverage"
        previousPageLinks={{
          Insurance: "/insurance",
        }}
      />
      <PageContainer>
        <CoverageFilter />
        <CoverageList />
      </PageContainer>
      <SidebarProvider name="coverageListSidebar">
        <CoverageSidebar />
      </SidebarProvider>
    </>
  );
}
