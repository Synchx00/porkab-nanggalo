"use client";

import { useEffect } from "react";
import { useLanguage } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { History } from "./components/History";
import { VisionMission } from "./components/VisionMission";
import { Activities } from "./components/Activities";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function Home() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <History />
      <VisionMission />
      <Activities />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
