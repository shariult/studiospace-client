import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studiospace | Find & Book or Rent Suitable Studio For You",
  description:
    "StudioSpace, a platform for artists and creators where they can book or rent studio time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${inter.variable} h-full antialiased`}
      data-theme="light"
    >
      <body>{children}</body>
    </html>
  );
}
