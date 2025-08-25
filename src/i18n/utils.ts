import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function getPageMetadata(
  locale: string,
  key: string
): Promise<Metadata> {
  const t = await getTranslations(locale);
  return {
    title: t(`pageMetadata.titles.${key}`),
    description: t(`pageMetadata.descriptions.${key}`),
  };
}

export async function getAppMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations(locale);
  return {
    title: {
      template: t("pageMetadata.template"),
      default: t("pageMetadata.default"),
    },
  };
}
