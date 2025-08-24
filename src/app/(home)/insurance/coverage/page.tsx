import PageContainer from "@/components/reusable/page-container";
import CoverageFilter from "@/components/ui/insurance/coverage/coverage-filter/coverage-filter";
import CoverageList from "@/components/ui/insurance/coverage/coverage-list/coverage-list";
import NavHeader from "@/components/ui/nav-header/nav-header";

export default function Page() {
  return (
    <>
      <NavHeader
        currentPageTitle="Coverage"
        previousPageLinks={{
          Insurance: "/insurance",
        }}
      />
      <PageContainer className="">
        <CoverageFilter />
        <CoverageList />
      </PageContainer>
    </>
  );
}
