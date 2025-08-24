import PageContainer from "@/components/reusable/page-container";
import OverviewTabs from "@/components/ui/insurance/overview/tabs";
import NavHeader from "@/components/ui/nav-header/nav-header";

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 200));

  return (
    <>
      <NavHeader currentPageTitle="Insurance" />
      <PageContainer>
        <OverviewTabs />
      </PageContainer>
    </>
  );
}
