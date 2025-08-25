import PageContainer from "@/components/common/page-container";
import OverviewTabs from "@/app/(home)/insurance/_components/tabs";
import NavHeader from "@/app/_components/nav-header/nav-header";
import { Locale, useTranslations } from "next-intl";
import { getPageMetadata } from "@/i18n/utils";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => getPageMetadata(locale, "insurance");

export default function Page() {
  const t = useTranslations("pageMetadata.titles");

  return (
    <>
      <NavHeader currentPageTitle={t("insurance")} />
      <PageContainer>
        <OverviewTabs />
      </PageContainer>
    </>
  );
}
