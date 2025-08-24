import PageContainer from "@/components/reusable/page-container";
import OverviewTabs from "@/app/(home)/insurance/_components/tabs";
import NavHeader from "@/app/_components/nav-header/nav-header";

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
