import PageContainer from "@/components/common/page-container";
import OverviewTabs from "@/app/(home)/insurance/_components/tabs";
import NavHeader from "@/app/_components/nav-header/nav-header";

export default function Page() {

  return (
    <>
      <NavHeader currentPageTitle="Insurance" />
      <PageContainer>
        <OverviewTabs />
      </PageContainer>
    </>
  );
}
