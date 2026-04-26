import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "PORKAB Nanggalo - Lapangan Sepak Bola & Pembinaan Muda",
  description: "Yayasan PORKAB Nanggalo - Wadah olahraga sepak bola dan pengembangan generasi muda di Kota Padang, Sumatera Barat.",
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
      <body className="min-h-screen bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}