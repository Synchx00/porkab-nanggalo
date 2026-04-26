"use client";

import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "id" ? "en" : "id")}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 text-white text-sm font-bold rounded-lg shadow-lg transition-all hover:scale-105"
      aria-label="Toggle language"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A8 8 0 016 8m0 0a8 8 0 018 8m0 0a8 8 0 01-8 8m8 0l-3.5-3.5m0 0L8 8m3.5 3.5l3.5-3.5" />
      </svg>
      <span className="uppercase">{locale}</span>
    </button>
  );
}