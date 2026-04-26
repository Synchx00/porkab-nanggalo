# PORKAB Nanggalo

Website for Yayasan PORKAB Nanggalo — sosial foundation for football sports and youth development in Padang, West Sumatra, Indonesia.

## 🌐 Live Site

**https://porkabnanggalo.com**

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS**
- **Docker** (multi-stage build)
- **Nginx** (reverse proxy)
- **Let's Encrypt** SSL

## Sections

- Hero with background image
- Tentang Kami (About Us)
- Sejarah (History Timeline: 1960 → 1977 → 2018)
- Visi & Misi
- Kegiatan Utama (Main Activities)
- Galeri (Gallery)
- Lokasi (Location)
- Footer

## Images

Hosted on AWS S3:
- `lapangan-1.jpeg` through `lapangan-6.jpeg` — Field images
- `lapangan-logo.jpeg` — Organization logo
- `lokasi-lapangan.jpeg` — Location map

## Deployment

```bash
# Build Docker image
sudo docker build -t porkab-web:latest .

# Run container
sudo docker run -d --name porkab-web -p 3000:3000 porkab-web:latest
```

## Local Development

```bash
npm install
npm run dev
```

## Security

- Hardened with security headers (CSP, HSTS, X-Frame, etc.)
- Auto-renewal for SSL certificates via Certbot

---
© {year} Yayasan PORKAB Nanggalo
