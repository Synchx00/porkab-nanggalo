"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { SectionEyebrow } from "./SectionEyebrow";

const MAP_IMG =
  "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lokasi-lapangan.jpeg";

export function Location() {
  const { t } = useLanguage();

  return (
    <section id="lokasi" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <SectionEyebrow>{t("location.eyebrow")}</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 tracking-tight">
            {t("location.title")}
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 grid md:grid-cols-5">
          <div className="relative md:col-span-3 h-64 md:h-auto min-h-[280px]">
            <Image
              src={MAP_IMG}
              alt="Peta lokasi PORKAB Nanggalo"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 p-8 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">
              {t("location.label")}
            </span>
            <p className="text-slate-900 text-lg font-semibold leading-snug mb-3">
              {t("location.address")}
            </p>
            <p className="text-slate-600 text-sm mb-7 leading-relaxed">
              {t("location.directions")}
            </p>
            <a
              href="https://maps.app.goo.gl/4AhsF4GeYuYbigyB9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors w-fit"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {t("location.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
