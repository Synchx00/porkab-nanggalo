"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "id" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "id",
  setLocale: () => {},
  t: () => "",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const saved = localStorage.getItem("porkab-locale") as Locale;
    if (saved === "id" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("porkab-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: (key: string) => translations[locale][key] || key }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

const translations: Record<Locale, Record<string, string>> = {
  id: {
    "hero.title": "PORKAB Nanggalo",
    "hero.subtitle": "Yayasan Olahraga Pembinaan Generasi Muda",
    "hero.location": "Kota Padang, Sumatera Barat",
    "hero.cta": "Pelajari Lebih Lanjut",
    "hero.maps": "Lihat di Maps",
    "about.title": "Tentang Kami",
    "about.p1": "Yayasan PORKAB Nanggalo adalah lembaga sosial yang bergerak di bidang pembinaan olahraga, khususnya sepak bola, serta pengembangan potensi generasi muda di Kota Padang.",
    "about.p2": "Yayasan ini berkomitmen untuk menyediakan sarana dan prasarana olahraga yang layak, profesional, dan berkelanjutan bagi masyarakat. Didirikan dengan semangat kebersamaan, yayasan ini mengelola lapangan sepak bola sebagai pusat kegiatan olahraga, pelatihan, dan kompetisi.",
    "about.p3": "Yayasan juga aktif mendukung kegiatan pembinaan usia dini melalui Sekolah Sepak Bola (SSB), turnamen lokal, serta program pengembangan atlet berbakat.",
    "about.commitment": "Komitmen kami: menjadi wadah yang aman, profesional, dan inspiratif bagi seluruh masyarakat, khususnya generasi muda, dalam mengembangkan bakat dan minat di bidang olahraga.",
    "history.title": "Sejarah Singkat",
    "history.1960.year": "1960",
    "history.1960.title": "Persatuan Sepak Bola Kurao Nanggalo",
    "history.1960.desc": "Cikal bakal organisasi ini bermula dengan nama Persatuan Sepak Bola Kurao Nanggalo, yang didirikan sebagai wadah pembinaan minat bakat pemuda di bidang sepak bola.",
    "history.1977.year": "1977",
    "history.1977.title": "Berganti Nama menjadi PORKAB",
    "history.1977.desc": "Organisasi berganti nama menjadi Persatuan Olahraga Kurao Berok (PORKAB). Perubahan ini diinisiasi oleh Bapak Zainal Almanar, SH, Mkn, seorang atlet berprestasi nasional sekaligus ketua dewan pembina yayasan.",
    "history.2018.year": "2018",
    "history.2018.title": "Transformasi menjadi Yayasan PORKAB Nanggalo",
    "history.2018.desc": "Untuk menyesuaikan diri dengan tata kelola yang lebih profesional dan berlandaskan hukum, PORKAB resmi bertransformasi menjadi Yayasan PORKAB Nanggalo. Hingga saat ini, yayasan terus konsisten menjalankan perannya demi kepentingan masyarakat.",
    "vision.title": "Visi & Misi",
    "vision.visi": "Visi",
    "vision.misi": "Misi",
    "vision.visi.desc": "Menjadi yayasan olahraga yang profesional, mandiri, dan berkontribusi dalam mencetak generasi muda yang sehat, berprestasi, dan berkarakter.",
    "vision.misi.1": "Penyediaan fasilitas olahraga yang representatif dan terawat",
    "vision.misi.2": "Pendukungian pembinaan atlet usia dini dan remaja",
    "vision.misi.3": "Penyelenggaraan kegiatan olahraga yang positif dan kompetitif",
    "vision.misi.4": "Peningkatan peran aktif masyarakat dalam kegiatan olahraga",
    "vision.misi.5": "Pengelolaan aset yayasan secara transparan dan berkelanjutan",
    "activities.title": "Kegiatan Utama",
    "activities.field": "Pengelolaan Lapangan",
    "activities.field.desc": "Pengelolaan lapangan sepak bola PORKAB untuk kegiatan olahraga",
    "activities.rental": "Penyewaan Fasilitas",
    "activities.rental.desc": "Penyewaan fasilitas olahraga untuk latihan dan turnamen",
    "activities.ssb": "Sekolah Sepak Bola",
    "activities.ssb.desc": "Pembinaan SSB untuk pengembangan bakat muda",
    "activities.tournament": "Turnamen",
    "activities.tournament.desc": "Penyelenggaraan turnamen dan event olahraga berkala",
    "activities.social": "Program Sosial",
    "activities.social.desc": "Program sosial dan pemberdayaan pemuda di komunitas",
    "activities.development": "Pengembangan Muda",
    "activities.development.desc": "Program pengembangan atlet berbakat dan promiss",
    "gallery.title": "Galeri",
    "location.label": "Alamat",
    "location.title": "Lokasi Kami",
    "location.address": "Surau Gadang, Nanggalo, Padang City, West Sumatra 25176",
    "location.cta": "Buka di Google Maps",
    "footer.copyright": "Hak Cipta Dilindungi.",
  },
  en: {
    "hero.title": "PORKAB Nanggalo",
    "hero.subtitle": "Sports Foundation for Youth Development",
    "hero.location": "Padang City, West Sumatra, Indonesia",
    "hero.cta": "Learn More",
    "hero.maps": "View on Maps",
    "about.title": "About Us",
    "about.p1": "Yayasan PORKAB Nanggalo is a social institution focused on sports development, especially football, and developing the potential of the younger generation in Padang City.",
    "about.p2": "This foundation is committed to providing proper, professional, and sustainable sports facilities for the community. Founded with a spirit of togetherness, the foundation manages a football field as a center for sports activities, training, and competition.",
    "about.p3": "The foundation also actively supports youth development through Soccer Schools (SSB), local tournaments, and programs to develop talented athletes.",
    "about.commitment": "Our commitment: to be a safe, professional, and inspirational platform for the entire community, especially the younger generation, in developing talents and interests in sports.",
    "history.title": "Brief History",
    "history.1960.year": "1960",
    "history.1960.title": "Persatuan Sepak Bola Kurao Nanggalo",
    "history.1960.desc": "The organization began as Persatuan Sepak Bola Kurao Nanggalo, founded as a platform for developing youth interest and talent in football.",
    "history.1977.year": "1977",
    "history.1977.title": "Renamed to PORKAB",
    "history.1977.desc": "The organization was renamed to Persatuan Olahraga Kurao Berok (PORKAB). This change was initiated by Mr. Zainal Almanar, SH, Mkn, a nationally accomplished athlete and chairman of the foundation's board of trustees.",
    "history.2018.year": "2018",
    "history.2018.title": "Transformed into Yayasan PORKAB Nanggalo",
    "history.2018.desc": "To align with more professional and legally-based governance, PORKAB officially transformed into Yayasan PORKAB Nanggalo. To this day, the foundation continues to consistently carry out its role for the community, preserving togetherness and improving sports achievements in Padang City.",
    "vision.title": "Vision & Mission",
    "vision.visi": "Vision",
    "vision.misi": "Mission",
    "vision.visi.desc": "To become a professional, independent foundation that contributes to developing a healthy, achievement-oriented, and characterful younger generation.",
    "vision.misi.1": "Provide representative and well-maintained sports facilities",
    "vision.misi.2": "Support early age and teenage athlete development",
    "vision.misi.3": "Organize positive and competitive sports activities",
    "vision.misi.4": "Increase community active participation in sports",
    "vision.misi.5": "Manage foundation assets transparently and sustainably",
    "activities.title": "Main Activities",
    "activities.field": "Field Management",
    "activities.field.desc": "PORKAB football field management for sports activities",
    "activities.rental": "Facility Rental",
    "activities.rental.desc": "Sports facility rental for training and tournaments",
    "activities.ssb": "Soccer School",
    "activities.ssb.desc": "SSB development for youth talent development",
    "activities.tournament": "Tournaments",
    "activities.tournament.desc": "Regular tournament and sports event organization",
    "activities.social": "Social Programs",
    "activities.social.desc": "Social programs and youth empowerment in the community",
    "activities.development": "Youth Development",
    "activities.development.desc": "Development programs for talented athletes",
    "gallery.title": "Gallery",
    "location.label": "Address",
    "location.title": "Our Location",
    "location.address": "Surau Gadang, Nanggalo, Padang City, West Sumatra 25176",
    "location.cta": "Open in Google Maps",
    "footer.copyright": "All Rights Reserved.",
  },
};