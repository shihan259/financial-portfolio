import PageContainer from "@/components/common/page-container";
import NavHeader from "@/app/_components/nav-header/nav-header";
import CoverageFilter from "@/app/(home)/insurance/coverage/_components/coverage-filter/coverage-filter";
import CoverageList from "@/app/(home)/insurance/coverage/_components/coverage-list/coverage-list";
import { SidebarProvider } from "@/components/shadcn-ui/sidebar";
import CoverageSidebar from "@/app/(home)/insurance/coverage/_components/coverage-sidebar/coverage-sidebar";
import { getPageMetadata } from "@/i18n/utils";
import { Locale, useTranslations } from "next-intl";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => getPageMetadata(locale, "coverage");

export default function Page() {
  const t = useTranslations("pageMetadata.titles");

  return (
    <>
      <NavHeader
        currentPageTitle={t("coverage")}
        previousPageLinks={{
          [`${t("insurance")}`]: "/insurance",
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
