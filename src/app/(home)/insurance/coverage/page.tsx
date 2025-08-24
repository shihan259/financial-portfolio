import PageContainer from "@/components/common/page-container";
import CoverageFilter from "@/app/(home)/insurance/coverage/_components/coverage/coverage-filter/coverage-filter";
import CoverageList from "@/app/(home)/insurance/coverage/_components/coverage/coverage-list/coverage-list";
import NavHeader from "@/app/_components/nav-header/nav-header";

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
