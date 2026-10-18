# Catatan keputusan teknis

Baseline: 16 Oktober 2026. **Diterima** berarti arah yang ditetapkan pengguna atau constraint proyek; **diusulkan** belum menjadi implementasi/komitmen; **terbuka** membutuhkan keputusan sebelum pekerjaan terkait. Penomoran ini menjadi acuan sesi lanjutan.

| ID | Keputusan | Status |
| --- | --- | --- |
| ADR-001 | Scope Personal Brand Ecosystem Agent: website, konten, SEO, creative, sosial, analytics | Diterima sebagai visi |
| ADR-002 | Next.js + TypeScript + Tailwind, App Router | Diterima; scaffold 16.4.2 terpasang |
| ADR-003 | Baseline awal default Next.js + dokumentasi | Historis; scope home diperluas ADR-015/016 |
| ADR-004 | Firestore sebagai control plane; GitHub sebagai source of truth kode/konten website terbit | Diterima; integrasi belum ada |
| ADR-005 | Worker lokal Zorin dengan koneksi outbound; website/admin/queue di cloud | Diterima; worker belum ada |
| ADR-006 | Human approval untuk publikasi dan merge production, dengan artefak versi tertentu | Diterima sebagai invariant; kontrol runtime belum ada |
| ADR-007 | Admin/website/worker menjadi monorepo pada fase berikutnya | Diterima sebagai rencana; root masih single app |
| ADR-008 | npm pada scaffold; pnpm workspaces + Turborepo saat fase 1B | npm diterapkan; tooling migrasi diusulkan |
| ADR-009 | Single orchestrator, enam peran; LangGraph.js, Zod, adapter provider | Diusulkan; tanpa dependensi saat ini |
| ADR-010 | Long draft/media di Storage; MDX terbit dan manifest media di GitHub | Diterima sebagai arah; detail contract diusulkan |
| ADR-011 | Functions v2 sebagai gateway mutasi sensitif/lease/publikasi | Diusulkan untuk menegakkan batas worker |
| ADR-012 | Root collection untuk personal MVP hanya pada namespace aman; shared-project path ditentukan sebelum provisioning | Diusulkan; binding Firebase terbuka |
| ADR-013 | Hybrid local/cloud dengan budget, retry/fallback terbatas | Rekomendasi; model/provider/hardware belum dipilih |
| ADR-014 | Hosting website/admin, akun sosial dan akses resmi API | Terbuka |
| ADR-015 | Increment desain fase 1: aset, dependency plan, revisi mockup personal; tanpa implementasi home | Historis; V4 menjadi acuan implementasi ADR-016 |
| ADR-016 | Implementasi homepage personal V4 pada aplikasi root, tanpa backend/deployment | Diterima; diimplementasikan lokal |

## Alasan dan konsekuensi

**ADR-003/007/008:** mempertahankan scaffold memudahkan baseline yang dapat diperiksa dan mencegah pembangunan fitur di luar permintaan. Migrasi struktur, lockfile, scripts, CI dan environment dilakukan bersama pada fase 1B; tidak membuat workspace palsu atau dependensi kosong sekarang.

**ADR-004/010:** Firestore mengendalikan status bisnis, sementara GitHub menyediakan review dan versioning konten live. Body draft tidak diduplikasi ke database. Artefak harus immutable dengan hash agar approval dapat diverifikasi. Pointer/commit tersimpan pada ledger; draft atau PR belum berarti konten sudah terbit.

**ADR-005/011:** worker lokal menekan kebutuhan compute cloud dan tidak perlu inbound port, tetapi tidak memberi jaminan jadwal tepat waktu saat PC mati. Queue tetap cloud; cloud publisher khusus materi siap terbit dapat ditambahkan fase 8. Gateway mencegah sandbox memegang akses admin Firestore langsung.

**ADR-006:** content approval tidak memberi hak deploy kode atau approve caption sosial. Merge dilakukan manusia; pipeline deployment dapat berjalan setelah gate manusia dan required checks. Perubahan hash/target/versi membatalkan approval. Tidak ada token agent yang boleh bypass protected branch.

**ADR-009/013:** peran spesialis tidak wajib menjadi layanan terpisah. Mulai sederhana; model/router dipilih melalui evaluasi kualitas, latency, kemampuan hardware Zorin dan biaya. Checkpoint runtime bukan source of truth bisnis atau audit.

## Keputusan yang perlu ditutup pada fase terkait

1. Target Firebase: memakai project Warza bersama (`beekasir-60f31`/`beekasir`) dengan namespace/rules terisolasi atau project terpisah yang disetujui. Tidak ada pilihan default yang diasumsikan.
2. Repository/organisasi GitHub, branch production, pemilik/reviewer, deployment identity, dan mekanisme release approval.
3. Hosting: Vercel, Firebase App Hosting atau platform Next.js kompatibel lain; pilih berdasarkan kebutuhan operasional/biaya saat implementasi.
4. Identitas admin, login provider, pemisahan environment, secret store, retensi, backup dan recovery objective.
5. Resource hardware Zorin, local model/runtime, provider cloud/image, budget period/per-task, currency billing dan alert threshold.
6. Knowledge/fakta biografi, nama publik, aset portrait, token desain, kontak publik dan prioritas halaman.
7. Akun sosial, izin API resmi, timezone jadwal, aturan keterlambatan serta expiry approval.

Keputusan ini tidak menghalangi fase 1A. Jangan mengarang jawabannya atau menganggap opsi yang disebut sudah dipilih.

## Asal rancangan dan perubahan

- Referensi: percakapan *Ide Website Personal Branding*, technical design 16 Oktober 2026, ID `6ad17d54-23c8-83ec-9569-bf3a25e878be`.
- Permintaan terbaru mempersempit pengerjaan menjadi scaffold dan dokumentasi; mockup/homepage dari konteks terdahulu ditunda.
- Delapan fase technical design dipertahankan; fase 1 dipisah menjadi 1A dan 1B agar dokumentasi tidak menyiratkan dashboard sudah selesai.
- Beberapa blok kode/schema dalam sumber berupa placeholder referensi; field, status rinci, ledger `operations`, dan gateway lease di sini adalah proposal penyempurnaan, bukan kutipan verbatim.

Untuk ADR baru, catat tanggal, konteks, pilihan, alasan, konsekuensi, status dan dokumen yang terpengaruh. Pertahankan riwayat keputusan yang digantikan dan tandai penggantinya.

## ADR-015 — Persiapan home dan revisi mockup (16 Oktober 2026)

**Konteks:** pengguna memberikan mockup, CV Mei 2018, dan foto terbaru, lalu meminta logo/header/favicon, daftar package, aset gambar, serta mockup yang lebih personal tanpa berlangganan dan dengan opsi footer. Pengguna secara eksplisit melarang implementasi homepage pada tugas ini.

**Pilihan:** siapkan paket statis versi V1 di [design/home-v1](../design/home-v1/README.md). Logo berupa SVG dengan ekspor PNG/ICO; portrait dan ilustrasi memakai imagegen built-in; mockup tetap gambar, bukan kode halaman. Stack aplikasi dan lockfile tetap. Footer percakapan dipakai sebagai usulan utama; alternatif ringkas dan ekosistem didokumentasikan.

**Alasan:** memungkinkan review identitas, copy dan struktur sebelum implementasi. CV 2018 hanya mendukung pengalaman historis; tidak ada angka pencapaian, pekerjaan terkini, atau fitur AI aktif yang diasumsikan.

**Konsekuensi/status:** memperluas batas aset/mockup pada ADR-003, tanpa mengubah arsitektur, fase 1B, hak publikasi, atau merge. Aset belum disajikan dari public dan favicon aplikasi belum diganti. Desain dan derivative portrait menunggu review pengguna. Terdampak: panduan agen, README, design, roadmap, implementation-phases, project-status.

## ADR-016 — Implementasi homepage V4 (18 Oktober 2026)

Pengguna secara eksplisit meminta implementasi sesuai mockup dan mengonfirmasi email publik `kiki@kiswanto.id`. Instruksi terbaru memperluas batas scaffold pada ADR-003 dan tahap desain ADR-015. Implementasi memakai root Next.js/React/Tailwind/npm yang sudah ada, tanpa dependency tambahan.

Home merupakan Server Component; header interaktif menjadi Client Component kecil untuk menu mobile. Aset logo/favicons memakai master V4, portrait kaos hitam dari V3 dikompresi WebP, enam logo teknologi SVG Devicon disimpan lokal dengan lisensi/sumber. Ikon UI berupa SVG sederhana. Metadata berbahasa Indonesia dan ikon memakai konvensi file Next.js.

Struktur mengikuti mockup: hero dan statistik 10+/20+ dari pengguna, highlight CV historis (bukan pekerjaan aktif), teknologi pilihan, footer mailto. Tidak menambah newsletter, proses kerja, artikel, layanan, form, atau chat AI. Keputusan kontak ini menggantikan status kontak belum dikonfirmasi pada catatan desain lama.

Acceptance: lint, typecheck, build dan pemeriksaan browser responsif/interaksi; laporan aktual di project-status. Fase 1B dan arsitektur agent tetap rencana. Tidak ada deployment, publikasi, atau perubahan cloud.

## ADR-017 — Halaman CV /kiki (18 Oktober 2026)

Pengguna meminta update home, navigasi ke `/kiki`, dan halaman CV responsif yang bisa menjadi PDF. Pilihan: satu sumber data `app/data/cv.ts` untuk home dan CV; PDF dihasilkan lewat `window.print()` + CSS print A4, bukan library PDF, agar tidak menambah dependency dan teks PDF tetap dapat dipilih. Konsekuensi: hasil PDF bergantung pada dialog cetak browser ("Simpan sebagai PDF"). Data pribadi sensitif dari CV lama tidak dipublikasikan. Status: diimplementasikan lokal, tanpa deploy/commit.
