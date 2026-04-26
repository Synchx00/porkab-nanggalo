"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const links = [
  { href: "#tentang", key: "nav.about" },
  { href: "#sejarah", key: "nav.history" },
  { href: "#visi-misi", key: "nav.vision" },
  { href: "#kegiatan", key: "nav.activities" },
  { href: "#galeri", key: "nav.gallery" },
  { href: "#lokasi", key: "nav.location" },
];

const LOGO_SRC =
  "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-logo.jpeg";

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-slate-700 hover:text-emerald-700"
    : "text-white/90 hover:text-white";

  const toggleClass = scrolled
    ? "border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white"
    : "border-white/60 text-white hover:bg-white hover:text-emerald-900";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#top"
          className={`flex items-center gap-3 font-bold tracking-tight transition-colors ${
            scrolled ? "text-emerald-900" : "text-white"
          }`}
        >
          <Image
            src={LOGO_SRC}
            alt="PORKAB Nanggalo logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/50"
          />
          <span className="hidden sm:inline">PORKAB Nanggalo</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${linkClass}`}
            >
              {t(l.key)}
            </a>
          ))}
          <button
            onClick={() => setLocale(locale === "id" ? "en" : "id")}
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${toggleClass}`}
            aria-label="Toggle language"
          >
            {locale}
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-emerald-900" : "text-white"
          }`}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-slate-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 font-medium hover:text-emerald-700"
            >
              {t(l.key)}
            </a>
          ))}
          <button
            onClick={() => {
              setLocale(locale === "id" ? "en" : "id");
              setOpen(false);
            }}
            className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-emerald-700 text-emerald-700"
          >
            {locale}
          </button>
        </div>
      )}
    </header>
  );
}
