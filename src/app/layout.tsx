import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import ToasterProvider from "@/components/ui/common/ToastProvider";

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
      className={`${josefinSans.variable} ${inter.variable} h-full antialiased text-gray-900 dark:text-gray-50`}
    >
      <body>
        <Navbar />
        <main className="min-h-[60vh] dark:bg-gray-950">{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
