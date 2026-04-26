import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PORKAB Nanggalo - Lapangan Sepak Bola & Pembinaan Muda",
  description:
    "Yayasan PORKAB Nanggalo - Wadah olahraga sepak bola dan pengembangan generasi muda di Kota Padang, Sumatera Barat.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geist.variable} min-h-screen bg-white text-slate-900 antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
