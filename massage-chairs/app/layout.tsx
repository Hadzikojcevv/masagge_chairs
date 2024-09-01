import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Prenav from "@/components/Shared/Prenav";
import Footer from "@/components/Shared/Footer";
import Nav from "@/components/Shared/Nav";
import ModalOpenerProvider from "@/contexts/ModalOpenerProvider";

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
        <ModalOpenerProvider>
          <>
            <Prenav />
            <Nav />

            {children}
            <Footer />
          </>
        </ModalOpenerProvider>
      </body>
    </html>
  );
}
