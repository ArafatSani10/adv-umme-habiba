import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("h-full", "antialiased", valueSans.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}