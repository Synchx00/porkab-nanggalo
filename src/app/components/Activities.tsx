"use client";

import { useLanguage } from "../context/LanguageContext";
import { SectionEyebrow } from "./SectionEyebrow";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const items: { key: string; icon: React.ReactNode }[] = [
  {
    key: "field",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <circle cx="12" cy="12" r="2" />
        <path d="M3 9h2v6H3M21 9h-2v6h2" />
      </svg>
    ),
  },
  {
    key: "rental",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M3 21V10l9-7 9 7v11" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    key: "ssb",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
  },
  {
    key: "tournament",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M8 4h8v4a4 4 0 01-8 0V4z" />
        <path d="M16 4h3v2a3 3 0 01-3 3M8 4H5v2a3 3 0 003 3" />
        <path d="M12 12v4" />
        <path d="M9 20h6l-1-4h-4z" />
      </svg>
    ),
  },
  {
    key: "social",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="11" r="2.5" />
        <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M14 18c.5-2 2.5-3.5 5-3.5s4 1.5 4 3.5" />
      </svg>
    ),
  },
  {
    key: "development",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 21V9" />
        <path d="M12 9c0-3 2-5 5-5 0 4-2 6-5 6z" />
        <path d="M12 13c0-2-1.5-3.5-4-3.5 0 3 1.5 4.5 4 4.5z" />
        <path d="M6 21h12" />
      </svg>
    ),
  },
];

export function Activities() {
  const { t } = useLanguage();

  return (
    <section id="kegiatan" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionEyebrow>{t("activities.eyebrow")}</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 tracking-tight">
            {t("activities.title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.key}
              className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-emerald-900 mb-2">
                {t(`activities.${item.key}`)}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t(`activities.${item.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
