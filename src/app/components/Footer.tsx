"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const LOGO_SRC =
  "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-logo.jpeg";

const exploreLinks = [
  { href: "#tentang", key: "nav.about" },
  { href: "#sejarah", key: "nav.history" },
  { href: "#visi-misi", key: "nav.vision" },
  { href: "#kegiatan", key: "nav.activities" },
  { href: "#galeri", key: "nav.gallery" },
  { href: "#lokasi", key: "nav.location" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-emerald-950 text-emerald-100">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={LOGO_SRC}
              alt="PORKAB Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-700"
            />
            <div>
              <div className="font-bold text-white">{t("hero.title")}</div>
              <div className="text-xs text-emerald-300/80">
                {t("hero.subtitle")}
              </div>
            </div>
          </div>
          <p className="text-sm text-emerald-200/80 leading-relaxed max-w-sm">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            {t("footer.explore")}
          </h4>
          <ul className="space-y-2 text-sm">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-emerald-200/80 hover:text-amber-300 transition-colors"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            {t("footer.contact")}
          </h4>
          <p className="text-sm text-emerald-200/80 leading-relaxed mb-3">
            Surau Gadang, Nanggalo
            <br />
            Padang City, West Sumatra 25176
          </p>
          <a
            href="https://maps.app.goo.gl/4AhsF4GeYuYbigyB9"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
          >
            {t("location.cta")} →
          </a>
        </div>
      </div>

      <div className="border-t border-emerald-900/60">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-emerald-300/60 text-center">
          © {new Date().getFullYear()} Yayasan PORKAB Nanggalo. {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
