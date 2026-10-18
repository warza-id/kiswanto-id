# Implementasi per fase

Penomoran kanonik mengikuti [roadmap.md](roadmap.md). Baseline aplikasi tetap 1A; increment persiapan aset dan revisi mockup home ditambahkan melalui ADR-015, dilanjutkan implementasi homepage lokal V4 melalui ADR-016. Semua kriteria di bawah adalah definisi selesai, bukan laporan fitur yang sudah tersedia.

## Fase 1A — Initial project + documentation

Deliverable: generator resmi Next.js latest stable, TypeScript/Tailwind/App Router, halaman default, npm lockfile, README, AGENTS dan sembilan dokumen `docs/`.

Acceptance: dependensi terpasang; lint, typecheck dan build diverifikasi atau hambatan dicatat; source/aset default tidak dikustomisasi; tautan dokumen konsisten; actual vs planned jelas. Tidak memasang Firebase/AI/monorepo atau mengubah homepage. Temuan dependency audit dicatat secara transparan.

## Increment desain fase 1 — aset dan mockup home

Permintaan 16 Oktober 2026: siapkan logo/header/favicon, gambar home, daftar dependency, dan mockup personal berdasarkan CV serta foto terbaru; hapus newsletter dan tawarkan opsi footer. Hasil berada di [design/home-v1](../design/home-v1/README.md).

Acceptance: aset dapat dibuka, prompt/provenance dan fakta dicatat, pilihan footer tersedia, tidak memasang paket atau mengganti halaman scaffold. Permintaan lanjutan 18 Oktober 2026 mengotorisasi implementasi homepage V4: halaman responsif, navigasi, kontak, logo/favicon dan metadata. Implementasi tidak mencakup publikasi atau fondasi agent fase 1B.

## Fase 1B — Foundation & Dashboard

Prasyarat: keputusan namespace/project Firebase, GitHub repo, hosting dan identitas admin. Migrasikan root app ke `apps/website`, tambahkan `apps/admin`, `apps/worker`, `functions`, dan shared contracts; usulan pnpm/Turborepo. Konfigurasikan Auth, deny-by-default Rules, gateway, minimum task queue, worker Docker outbound, CI lint/typecheck/build dan test rules.

Acceptance: admin sah dapat login dan membuat task; pengguna tidak sah ditolak; worker terdaftar dapat claim task atomik; worker tidak dapat mengubah approval; dua worker tidak mendapat lease aktif yang sama; offline terlihat dan antrean bertahan. Emulator dipakai sebelum data cloud nyata. Belum ada publikasi otomatis.

## Fase 2 — Agent Core

Prasyarat: queue/identity/contracts fase 1B. Implementasikan orchestrator (LangGraph.js kandidat), state machine, tool registry, model adapters, output schema, bounded retry, checkpoint, budget reservation, usage, logs dan heartbeat/fencing.

Acceptance: satu task internal selesai dengan artefak, provenance model, log dan biaya; stale worker ditolak; crash dapat dipulihkan; budget habis menahan task; output invalid tidak memicu tool; prompt injection tidak memperluas permission. Test unit/state, integration/concurrency dan fault injection diperlukan.

## Fase 3 — Content & Knowledge Agent

Prasyarat: runtime dan policy fase 2. Tambahkan knowledge Markdown terverifikasi, research/source attribution, outline, draft MDX, SEO checks, media manifest, private preview, versioned approval/revision/reject dan append-only audit.

Acceptance: satu instruksi menghasilkan artikel yang bisa direview; pemilik bisa meminta revisi dan menyetujui versi tertentu; perubahan setelah approval membatalkannya; expiry/replay/target mismatch ditolak; preview tidak menjalankan kode MDX arbitrary. Belum menerbitkan ke domain atau sosial.

## Fase 4 — Website & Publishing

Prasyarat: approval fase 3, konten/fakta brand dari pemilik, hosting/domain/repository ditentukan. Bangun halaman personal, artikel MDX, navigasi responsif dan SEO dasar; integrasi GitHub PR, required checks, protected branch, production pipeline, deployment ledger, smoke verification dan rencana rollback.

Acceptance: konten yang disetujui masuk PR; perubahan SHA memerlukan review/checks yang sesuai; manusia merge; build sukses terbit di domain yang dipilih dan diverifikasi; build gagal tidak menggantikan versi stabil. Agent tidak dapat direct push/bypass. Test link, build, accessibility dasar, desktop/mobile dan content validity.

## Fase 5 — Website Developer Agent

Prasyarat: repository/pipeline aman fase 4. Buat sandbox container, repository tools, test runner terisolasi, preview/visual checks, PR description dan review workflow.

Acceptance: agent menyelesaikan perubahan fitur kecil di branch terpisah dan menghasilkan PR yang bisa direview; tidak memperoleh secret production, host shell bebas atau Docker socket; tidak merge sendiri. Perubahan sensitif masuk review manual khusus. Test sandbox/network/resource restrictions.

## Fase 6 — Social Media Agent

Prasyarat: approval, operation ledger dan API permissions resmi tersedia. Tambahkan OAuth, metadata akun, adapters platform terpisah, caption/media validation, jadwal, publisher, status remote dan rekonsiliasi. Mulai dari dry-run dan mocked responses.

Acceptance: satu materi mendapat approval per platform/account/versi, lalu dipublikasikan via API resmi dan remote ID tersimpan; timeout tidak menyebabkan posting ulang buta; token expired ditangani; tidak ada token di frontend. Jika izin API belum tersedia, tampilkan handoff manual dan status blocked integrasi tersebut tanpa mengklaim publish otomatis selesai.

## Fase 7 — Analytics & Optimization

Prasyarat: konten live dan akses read-only ke sumber metrik. Integrasikan Search Console, GA4 serta insights sosial sesuai akses yang tersedia; snapshot, weekly report, rekomendasi konten.

Acceptance: laporan menyebut sumber, periode, waktu pengambilan, freshness dan keterbatasan; tidak mengarang data hilang; membedakan reach/engagement dari kontak masuk/peluang bisnis. Rekomendasi tidak otomatis mengubah konten live. Gunakan fixture dan validasi agregasi.

## Fase 8 — Autopilot & Hardening

Prasyarat: alur sebelumnya stabil, metrik operasional dan kebijakan retensi tersedia. Tambahkan recurring editorial cycle, budget tuning, observability/alert, cloud publisher opsional untuk konten siap terbit, backup/restore, incident runbook dan security review.

Acceptance: workflow berulang dapat beroperasi dengan manusia di titik approval/exception; PC offline tidak kehilangan task; scheduled fallback tidak melompati approval; recovery/restore berhasil diuji; biaya terbatas; duplikasi dan hasil ambigu dapat ditelusuri. Autopilot tidak menghapus kewajiban approval atau merge manusia.

## Pembaruan status

Setelah setiap increment, catat perubahan, pemeriksaan nyata, keterbatasan dan next action pada [project-status.md](project-status.md). Jika stack/scope berubah, tambahkan ADR di [decisions.md](decisions.md) dan selaraskan dokumen terkait. Jangan menandai fase selesai hanya karena dokumentasinya selesai.
