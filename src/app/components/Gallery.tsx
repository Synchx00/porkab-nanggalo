"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { SectionEyebrow } from "./SectionEyebrow";

const BASE =
  "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com";

const images = [
  { src: `${BASE}/lapangan-1.jpeg`, alt: "Lapangan PORKAB Nanggalo" },
  { src: `${BASE}/lapangan-2.jpeg`, alt: "Lapangan 2" },
  { src: `${BASE}/lapangan-3.jpeg`, alt: "Lapangan 3" },
  { src: `${BASE}/lapangan-4.jpeg`, alt: "Lapangan 4" },
  { src: `${BASE}/lapangan-5.jpeg`, alt: "Lapangan 5" },
  { src: `${BASE}/lapangan-6.jpeg`, alt: "Lapangan 6" },
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="galeri" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <SectionEyebrow>{t("gallery.eyebrow")}</SectionEyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 tracking-tight mb-3">
            {t("gallery.title")}
          </h2>
          <p className="text-slate-600">{t("gallery.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl bg-slate-100 ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
