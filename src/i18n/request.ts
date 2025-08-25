import { getRequestConfig } from "next-intl/server";
// import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const locale = "en";
  // Not used as we do not support any other languages
  //   const store = await cookies();
  //   const locale = store.get("locale")?.value || "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
