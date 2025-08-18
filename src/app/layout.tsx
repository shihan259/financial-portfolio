import { ThemeProvider } from "../components/themes/theme-provider";
import "./globals.css";

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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="w-full">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
