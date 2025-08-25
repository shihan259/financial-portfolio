import NavHeader from "@/app/_components/nav-header/nav-header";
import { getPageMetadata } from "@/i18n/utils";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => getPageMetadata(locale, "savings");

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Page() {
  const t = await getTranslations("pageMetadata.titles");

  await fetchData();

  return (
    <>
      <NavHeader
        currentPageTitle={t("savings")}
        previousPageLinks={{
          [`${t("insurance")}`]: "/insurance",
        }}
      />
      <div className="center">Insurance</div>
      <p>asdasda</p>
    </>
  );
}
