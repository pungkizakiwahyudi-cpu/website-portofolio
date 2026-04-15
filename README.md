# 🚀 Portfolio + Freelance — Pungki Zaki Wahyudi

Website portfolio **dual-purpose** — untuk melamar kerja sekaligus menarik klien freelance.

## ⚡ Quick Start

```bash
npm install
npm run dev       # Development (http://localhost:5173)
npm run build     # Build production
```

## 📂 Struktur Folder

```
src/
├── data/portfolio.js     ← ⭐ EDIT SEMUA KONTEN DI SINI
├── sections/
│   ├── Hero.jsx          — Fullscreen hero + photo
│   ├── StatsBar.jsx      — Stats dengan counter animasi
│   ├── About.jsx         — Tentang saya
│   ├── Skills.jsx        — Tech stack + progress bar
│   ├── Services.jsx      — Jenis layanan
│   ├── HowItWorks.jsx    — Proses 4 langkah
│   ├── Projects.jsx      — Portfolio project
│   ├── Pricing.jsx       — 3 paket harga
│   ├── Testimonials.jsx  — Review klien
│   ├── FAQ.jsx           — Pertanyaan umum (accordion)
│   └── Contact.jsx       — Form + link kontak
├── components/
│   ├── layout/ → Navbar, Footer
│   └── ui/     → Badge, SectionHeader, ScrollTopButton
└── hooks/useScrollAnimation.js
```

## ✏️ Cara Edit Konten

**Semua konten ada di `src/data/portfolio.js`:**

| Yang ingin diubah | Edit bagian |
|---|---|
| Nama, email, WA, sosmed | `personalInfo` |
| Foto profil | `personalInfo.photo` → `'/photo.jpg'` |
| Stats (10+ project dll) | `stats` |
| Skill & progress bar | `skills` |
| Jenis layanan | `services` |
| Proses kerja | `howItWorks` |
| Project portfolio | `projects` |
| Paket harga | `pricing` |
| Testimoni klien | `testimonials` |
| FAQ | `faqs` |

## 📸 Pasang Foto Profil
1. Letakkan foto di `public/photo.jpg`
2. Buka `src/data/portfolio.js`
3. Ubah: `photo: null` → `photo: '/photo.jpg'`

## 🌐 Deploy Gratis ke Vercel
```bash
npm run build
npx vercel --prod
```

## 🎯 Target Audience Website Ini
- **HRD/Recruiter** → Skills, Experience, Projects, CV download
- **Calon Klien Freelance** → Services, Pricing, How It Works, Contact Form
