"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const HERO_BG =
  "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-1.jpeg";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950"
    >
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/85 via-emerald-900/70 to-emerald-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(2,44,34,0.6)_100%)]" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-fade-up">
        <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-300 border border-amber-300/40 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          {t("hero.tag")}
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.05]">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-3 text-emerald-50">
          {t("hero.subtitle")}
        </p>
        <p className="text-base md:text-lg mb-10 text-emerald-100/80">
          {t("hero.location")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#tentang"
            className="bg-amber-400 hover:bg-amber-300 text-emerald-950 px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
          >
            {t("hero.cta")}
          </a>
          <a
            href="https://maps.app.goo.gl/4AhsF4GeYuYbigyB9"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white/70 hover:bg-white hover:text-emerald-900 text-white px-8 py-3.5 rounded-full font-semibold transition-all"
          >
            {t("hero.maps")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.2em]">
          {t("hero.scroll")}
        </span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
