import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Prenav from "@/components/Shared/Prenav";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Масажери.мк",
  description: "Автоматски Масажери - Automatic Massage Chairs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Prenav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
