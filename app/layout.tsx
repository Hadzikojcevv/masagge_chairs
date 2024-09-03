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
  description:
    "Масажери.мк нуди автоматизирани масажни столици со целосна телесна масажа, загревање на грбот, ролери за стапала, воздушни перничиња, Bluetooth конекција и Hi-Fi аудио. Доживејте луксуз и релаксација во вашиот дом.",
  keywords: [
    "Масажери",
    "Масажери.мк",
    "Masazeri",
    " Masazeri za telo",
    " Masazeri za Stopala",
    "Masazeri za Noze",
    "Masazeri za Vrat",
    "Masazeri za Grb",
    "Masaza ",
    "Масажа на тело",
    "Масажа на грб",
    "Масажа на лумбален дел",
    "Масажа на нозе",
    "Масажа на Стапалата",
  ],
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
