import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const valueSans = localFont({
  src: [
    {
      path: "../../public/font/ValueSansPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-value-sans",
});

export const metadata: Metadata = {
  title: "Umme Habiba | Lawyer Civil & Criminal",
  description: "Official portfolio of Umme Habiba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${valueSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}