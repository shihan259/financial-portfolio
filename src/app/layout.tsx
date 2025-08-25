import { ThemeProvider } from "../themes/theme-provider";
import { Locale, NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getAppMetadata } from "@/i18n/utils";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: Locale };
}) => getAppMetadata(locale);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <NextIntlClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
