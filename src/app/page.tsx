import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PORKAB Nanggalo - Lapangan Sepak Bola & Pembinaan Muda",
  description: "Yayasan PORKAB Nanggalo - Wadah olahraga sepak bola dan pengembangan generasi muda di Kota Padang, Sumatera Barat.",
};

export default function Home() {
  const galleryImages = [
    { src: "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-1.jpeg", alt: "Lapangan PORKAB Nanggalo" },
    { src: "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-2.jpeg", alt: "Lapangan 2" },
    { src: "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-3.jpeg", alt: "Lapangan 3" },
    { src: "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-4.jpeg", alt: "Lapangan 4" },
    { src: "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-5.jpeg", alt: "Lapangan 5" },
    { src: "https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-6.jpeg", alt: "Lapangan 6" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-green-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-green-950/70" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <img 
            src="https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-logo.jpeg" 
            alt="PORKAB Logo"
            className="w-24 h-24 mx-auto mb-6 rounded-full object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">PORKAB Nanggalo</h1>
          <p className="text-xl md:text-2xl font-light mb-2">Yayasan Olahraga Pembinaan Generasi Muda</p>
          <p className="text-lg mb-8 opacity-90">Kota Padang, Sumatera Barat</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#tentang"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
            <a 
              href="https://maps.app.goo.gl/4AhsF4GeYuYbigyB9"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Lihat di Maps
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Tentang Kami</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              <strong>Yayasan PORKAB Nanggalo</strong> adalah lembaga sosial yang bergerak di bidang pembinaan olahraga, 
              khususnya sepak bola, serta pengembangan potensi generasi muda di Kota Padang.
            </p>
            <p>
              Yayasan ini berkomitmen untuk menyediakan sarana dan prasarana olahraga yang layak, profesional, 
              dan berkelanjutan bagi masyarakat. Didirikan dengan semangat kebersamaan, yayasan ini mengelola 
              lapangan sepak bola sebagai pusat kegiatan olahraga, pelatihan, dan kompetisi.
            </p>
            <p>
              Yayasan juga aktif mendukung kegiatan pembinaan usia dini melalui <strong>Sekolah Sepak Bola (SSB)</strong>, 
              turnamen lokal, serta program pengembangan atlet berbakat.
            </p>
            <p className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
              <strong>Komitmen kami:</strong> menjadi wadah yang aman, profesional, dan inspiratif bagi seluruh masyarakat, 
              khususnya generasi muda, dalam mengembangkan bakat dan minat di bidang olahraga.
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section id="sejarah" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Sejarah Singkat</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-green-700 text-white rounded-lg px-4 py-2 font-bold flex-shrink-0">1960</div>
              <div>
                <h3 className="font-bold text-lg text-green-900">Persatuan Sepak Bola Kurao Nanggalo</h3>
                <p className="text-gray-700">Cikal bakal organisasi ini bermula dengan nama Persatuan Sepak Bola Kurao Nanggalo, 
                yang didirikan sebagai wadah pembinaan minat bakat pemuda di bidang sepak bola.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-green-700 text-white rounded-lg px-4 py-2 font-bold flex-shrink-0">1977</div>
              <div>
                <h3 className="font-bold text-lg text-green-900">Berganti Nama menjadi PORKAB</h3>
                <p className="text-gray-700">Organisasi berganti nama menjadi <strong>Persatuan Olahraga Kurao Berok (PORKAB)</strong>. 
                Perubahan ini diinisiasi oleh <strong>Bapak Zainal Almanar, SH, Mkn</strong>, seorang atlet berprestasi nasional 
                sekaligus ketua dewan pembina yayasan. Nama baru ini mencerminkan semangat untuk mengembangkan berbagai 
                cabang olahraga dan memperluas peran sosial di lingkungan Kurao Berok.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-green-700 text-white rounded-lg px-4 py-2 font-bold flex-shrink-0">2018</div>
              <div>
                <h3 className="font-bold text-lg text-green-900">Transformasi menjadi Yayasan PORKAB Nanggalo</h3>
                <p className="text-gray-700">Untuk menyesuaikan diri dengan tata kelola yang lebih profesional dan berlandaskan hukum, 
                PORKAB resmi bertransformasi menjadi <strong>Yayasan PORKAB Nanggalo</strong>. Hingga saat ini, yayasan terus 
                konsisten menjalankan perannya demi kepentingan masyarakat, pelestarian kebersamaan, dan peningkatan 
                prestasi olahraga di Kota Padang.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section id="visi-misi" className="py-20 px-6 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Visi & Misi</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🎯</span> Visi
              </h3>
              <p className="text-lg leading-relaxed">
                Menjadi yayasan olahraga yang <strong>profesional, mandiri</strong>, dan berkontribusi dalam 
                mencetak <strong>generasi muda yang sehat, berprestasi, dan berkarakter</strong>.
              </p>
            </div>
            <div className="bg-green-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">📋</span> Misi
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Penyediaan fasilitas olahraga yang representatif dan terawat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Pendukungian pembinaan atlet usia dini dan remaja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Penyelenggaraan kegiatan olahraga yang positif dan kompetitif</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Peningkatan peran aktif masyarakat dalam kegiatan olahraga</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  <span>Pengelolaan aset yayasan secara transparan dan berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Utama */}
      <section id="kegiatan" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Kegiatan Utama</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚽", title: "Pengelolaan Lapangan", desc: "Pengelolaan lapangan sepak bola PORKAB untuk kegiatan olahraga" },
              { icon: "🏟️", title: "Penyewaan Fasilitas", desc: "Penyewaan fasilitas olahraga untuk latihan dan turnamen" },
              { icon: "👦", title: "Sekolah Sepak Bola", desc: "Pembinaan SSB untuk pengembangan bakat muda" },
              { icon: "🏆", title: "Turnamen", desc: "Penyelenggaraan turnamen dan event olahraga berkala" },
              { icon: "🤝", title: "Program Sosial", desc: "Program sosial dan pemberdayaan pemuda di komunitas" },
              { icon: "🌱", title: "Pengembangan Muda", desc: "Program pengembangan atlet berbakat dan promiss" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Galeri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Lokasi Kami</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <img 
              src="https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lokasi-lapangan.jpeg"
              alt="Peta Lokasi PORKAB Nanggalo"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg text-green-800 mb-2">Alamat</h3>
              <p className="text-gray-700 mb-4">
                Surau Gadang, Nanggalo, Padang City, West Sumatra 25176
              </p>
              <a 
                href="https://maps.app.goo.gl/4AhsF4GeYuYbigyB9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com/lapangan-logo.jpeg"
            alt="PORKAB Logo"
            className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="text-2xl font-bold mb-2">PORKAB Nanggalo</h3>
          <p className="text-green-300 mb-6">Yayasan Olahraga Pembinaan Generasi Muda</p>
          <p className="text-sm text-green-400">
            Surau Gadang, Nanggalo, Padang City, West Sumatra 25176
          </p>
          <p className="text-xs text-green-500 mt-8">
            © {new Date().getFullYear()} Yayasan PORKAB Nanggalo. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </main>
  );
}