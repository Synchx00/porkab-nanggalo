"use client";

import { useLanguage } from "../context/LanguageContext";

export function VisionMission() {
  const { t } = useLanguage();

  return (
    <section
      id="visi-misi"
      className="relative py-24 px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-3">
            {t("vision.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("vision.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{t("vision.visi")}</h3>
            </div>
            <p className="text-emerald-50 leading-relaxed text-lg">
              {t("vision.visi.desc")}
            </p>
          </div>

          <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2v0z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">{t("vision.misi")}</h3>
            </div>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className="flex items-start gap-3 text-emerald-50">
                  <span className="mt-1 w-5 h-5 rounded-full bg-emerald-700 text-amber-300 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {n}
                  </span>
                  <span className="leading-relaxed">{t(`vision.misi.${n}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
