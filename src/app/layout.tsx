import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}