# kiswanto.id / Kiswanto AI

Fondasi website personal Kiswanto dan **Personal Brand Ecosystem Agent**: sistem semi-otonom untuk membantu pengembangan website, riset, konten, SEO, creative, distribusi sosial, dan evaluasi performa. Pemilik tetap mengendalikan publikasi dan merge production.

## Status saat ini — 18 Oktober 2026

**Fase 1A selesai + homepage personal V4 diimplementasikan.** Home responsif berisi perkenalan, portrait kaos hitam, statistik 10+/20+, highlight pengalaman CV, enam logo teknologi, serta kontak ke `kiki@kiswanto.id`. Logo/favicons V4 sudah dipasang, metadata personal dan menu mobile tersedia. Belum ada admin, Firebase, worker, integrasi AI, konten MDX, API sosial, atau deployment. Kiswanto AI belum menjadi MVP operasional.

Stack terpasang: Next.js **16.4.2**, React **19.3.0**, TypeScript, Tailwind CSS v4, App Router, ESLint, npm. Versi diambil dari registry npm saat inisialisasi; rincian dependensi yang reproducible ada di `package-lock.json`. Node.js yang digunakan: **22.23.2**, npm **10.9.8**.

Mockup terbaru (18 Oktober 2026): [V4 — logo, favicon, laptop, tablet, mobile](design/home-v4/README.md). Struktur sederhana dan aset V4 sudah diterapkan ke aplikasi. [Screenshot hasil implementasi](design/implementation-v1/README.md) tersedia untuk laptop, tablet dan mobile.

## Menjalankan lokal

```sh
cd ~/Documents/kiswanto-id
npm ci
npm run dev
```

Buka http://localhost:3000. Tidak diperlukan `.env` untuk homepage ini. Untuk pemeriksaan dan production build lokal:

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

`npm start` memerlukan build yang sukses. Template menggunakan `next/font` untuk Geist; build pertama memerlukan akses jaringan ke penyedia font. Belum ada test runner atau CI, sehingga jangan menganggap perintah `npm test` tersedia.

## Peta dokumentasi

| File | Isi |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Titik masuk dan batas kerja sesi AI berikutnya |
| [docs/design.md](docs/design.md) | Visi, audiens, arah brand, ruang lingkup produk |
| [docs/architecture.md](docs/architecture.md) | Arsitektur target, batas layanan, migrasi monorepo |
| [docs/roadmap.md](docs/roadmap.md) | Urutan delapan fase dan prioritas |
| [docs/agent-workflow.md](docs/agent-workflow.md) | Peran agent, state machine, approval dan pemulihan |
| [docs/firestore-schema.md](docs/firestore-schema.md) | Proposal koleksi, field, index, dan invariant |
| [docs/security.md](docs/security.md) | Otorisasi, secrets, isolasi, kontrol production |
| [docs/implementation-phases.md](docs/implementation-phases.md) | Deliverable, dependensi, dan acceptance criteria tiap fase |
| [docs/decisions.md](docs/decisions.md) | Keputusan diterima, usulan, dan hal yang belum diputuskan |
| [docs/project-status.md](docs/project-status.md) | Hasil aktual, validasi, dan langkah berikutnya |

## Prinsip yang disepakati

- Firestore adalah control plane untuk task, approval, jadwal, audit, dan metadata workflow.
- GitHub menjadi source of truth untuk kode serta konten website yang terbit; draft panjang/media sementara berada di Storage.
- Worker direncanakan berjalan lokal di Zorin OS melalui koneksi outbound. Website/admin dan antrean berada di cloud.
- Struktur `apps/website`, `apps/admin`, dan `apps/worker` baru dibuat pada fase berikutnya; saat ini satu aplikasi Next.js di root.
- Publikasi memerlukan approval manusia atas versi tertentu. Merge ke branch production dilakukan manusia, dengan pemeriksaan CI pada commit yang sama.

## Sumber rancangan

Rancangan berasal dari percakapan **Ide Website Personal Branding**, technical design 16 Oktober 2026, dan permintaan inisialisasi terbaru. Beberapa blok diagram/schema dalam referensi tidak tersedia sebagai teks. Rincian operasional di dokumentasi ini merupakan proposal yang konsisten dengan rancangan tersebut, bukan klaim bahwa seluruh field sudah disepakati atau diimplementasikan.

Perintah scaffold mengikuti [dokumentasi resmi create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Untuk melanjutkan, baca `AGENTS.md` dan status aktual sebelum memilih pekerjaan dari roadmap.
