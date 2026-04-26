"use client";

import { useLanguage } from "../context/LanguageContext";
import { SectionEyebrow } from "./SectionEyebrow";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "65+", label: t("about.stat.years") },
    { value: "3", label: t("about.stat.eras") },
    { value: "1", label: t("about.stat.field") },
  ];

  return (
    <section id="tentang" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>{t("about.eyebrow")}</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 leading-tight tracking-tight max-w-3xl mx-auto">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
          <div className="bg-white rounded-2xl border-l-4 border-emerald-600 p-7 shadow-sm">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8">
              {t("about.commitment")}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-700">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
