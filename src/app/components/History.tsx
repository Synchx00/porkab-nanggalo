"use client";

import { useLanguage } from "../context/LanguageContext";
import { SectionEyebrow } from "./SectionEyebrow";

const years = ["1960", "1977", "2018"];

export function History() {
  const { t } = useLanguage();

  return (
    <section id="sejarah" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionEyebrow>{t("history.eyebrow")}</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 tracking-tight">
            {t("history.title")}
          </h2>
        </div>

        <ol className="relative border-l-2 border-emerald-200 ml-3 md:ml-6 space-y-12">
          {years.map((year) => (
            <li key={year} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
              <div className="inline-block bg-emerald-700 text-white text-sm font-bold tracking-wide px-3 py-1 rounded-md mb-3">
                {t(`history.${year}.year`)}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2">
                {t(`history.${year}.title`)}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {t(`history.${year}.desc`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
