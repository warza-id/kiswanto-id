# Dependency untuk home Kiswanto.id

16 Oktober 2026. Ini daftar persiapan, **bukan perubahan package.json**. Belum menjalankan instalasi paket tambahan.

## Rekomendasi minimal

Home statis sesuai mockup dapat dibuat tanpa dependency runtime tambahan. Pakai stack terpasang, CSS/Tailwind untuk layout dan efek ringan, serta SVG logo yang sudah disiapkan. Jika menginginkan satu keluarga ikon siap pakai, tambahkan hanya `lucide-react` saat implementasi.

| Package / fitur | Status saat ini | Kegunaan |
| --- | --- | --- |
| `next` 16.4.2 | Terpasang | Routing, rendering, metadata, optimasi gambar/font |
| `react`, `react-dom` 19.3.0 | Terpasang | Komponen UI; state menu mobile bila diperlukan |
| `typescript` ^5, `@types/react`, `@types/react-dom`, `@types/node` | Terpasang sebagai devDependency | Tipe dan pemeriksaan statis; versi resolved mengikuti package-lock.json |
| `tailwindcss` ^4, `@tailwindcss/turbopack` ^4 | Terpasang sebagai devDependency | Layout responsif, token warna, typography, state interaksi; pertahankan integrasi generator sekarang |
| `eslint` ^9, `eslint-config-next` 16.4.2 | Terpasang sebagai devDependency | Pemeriksaan kode; temuan audit lama ada di project-status.md |
| `next/image` | Bawaan `next`, bukan paket terpisah | Gambar hero/kartu dengan dimensi dan sizes yang benar |
| `next/font` | Bawaan `next`, bukan paket terpisah | Gunakan Geist scaffold; font tidak perlu paket npm lain |
| `next/link` dan Metadata API | Bawaan `next` | Navigasi internal serta metadata/favicon ketika implementasi diizinkan |
| `lucide-react` | **Opsional; belum terpasang** | Ikon Menu, X, ArrowUpRight, Mail dan ikon UI lain; import ikon yang dipakai saja |

Versi tambahan tidak dipatok dalam tahap desain. Saat implementasi, periksa kompatibilitas versi yang dipilih dengan React terpasang lalu rekam versi resolved di npm lockfile. Jangan mengganti package manager atau memperbarui seluruh stack hanya demi homepage.

## Yang belum diperlukan

- Motion/GSAP/AOS: transisi CSS cukup untuk mockup ini. Animasi kompleks bukan persyaratan.
- shadcn/ui, Radix, MUI: halaman editorial sederhana belum membutuhkan sistem komponen tambahan.
- Form library, Zod, layanan email/newsletter: tidak ada form berlangganan; CTA berupa navigasi/kontak.
- Firebase, AI SDK, LangGraph, database/vector store: kartu “Kiswanto AI” tidak berarti chat sudah aktif. Integrasi tersebut terpisah dari home.
- MDX/CMS: diperlukan ketika konten artikel sungguhan dibangun, bukan untuk section pengantar.
- Carousel, chart, Redux/Zustand, date utilities: tidak ada kebutuhan pada rancangan ini.
- `sharp` sebagai dependency langsung: tidak ditambahkan untuk tahap persiapan. Ekspor aset menggunakan runtime alat lokal; saat memilih deployment, periksa kebutuhan optimizer Next.js sesuai platform.
- Playwright/Vitest sebagai dependency proyek: tidak ditambahkan pada tugas aset. Verifikasi aplikasi dilakukan saat implementasi sesuai scope.

## Referensi

- Inventaris aktual: [package.json](../../package.json) dan [package-lock.json](../../package-lock.json).
- Guide lokal versi Next yang terpasang: `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md` dan `font.md` sudah dibaca.
- [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image) menjelaskan optimasi gambar bawaan.
- [Next.js Font](https://nextjs.org/docs/app/api-reference/components/font) menjelaskan pemuatan dan hosting font bawaan.
- [Lucide untuk React](https://lucide.dev/guide/react/) menjelaskan SVG per komponen, dukungan TypeScript, dan tree-shaking.

Referensi resmi ditinjau 16 Oktober 2026. Panduan lokal versi terpasang menjadi acuan teknis utama saat API web berbeda.
