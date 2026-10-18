# Roadmap

Baseline 16 Oktober 2026. Delapan fase mengikuti technical design terakhir. Istilah **1A** mempersempit pekerjaan saat ini menjadi inisialisasi saja; **1B** menampung sisa Foundation & Dashboard. Dengan demikian selesai 1A tidak berarti Fase 1 keseluruhan selesai.

| Fase | Hasil utama | Status |
| --- | --- | --- |
| 1A — Initial project & documentation | Scaffold Next.js default, dokumentasi, panduan sesi AI | Dikerjakan pada sesi inisialisasi; hasil di project-status |
| 1B — Foundation & Dashboard | Monorepo, Firebase/Auth/rules, admin, gateway, queue, worker Docker, CI dasar | Belum dimulai |
| 2 — Agent Core | State machine, model router, tool registry, retry, checkpoint, usage/budget dasar | Belum dimulai |
| 3 — Content & Knowledge Agent | Knowledge base, riset, MDX draft, SEO, preview, approval/revisi/audit | Belum dimulai |
| 4 — Website & Publishing | Website personal, GitHub PR, MDX, CI/CD, domain, verification/rollback | Belum dimulai |
| 5 — Website Developer Agent | Coding sandbox, test, visual review, PR dan code review | Belum dimulai |
| 6 — Social Media Agent | OAuth, adaptasi per platform, approval, jadwal, publish/reconciliation | Belum dimulai |
| 7 — Analytics & Optimization | Search Console, GA4, social insights, laporan dan rekomendasi | Belum dimulai |
| 8 — Autopilot & Hardening | Workflow berulang, budget lanjutan, cloud publisher, recovery dan audit keamanan | Belum dimulai |

## Prioritas dan dependensi

MVP menghubungkan fase 1–4: instruksi → task aman → draft → review/approval manusia → PR → merge manusia → deploy → verifikasi. Pekerjaan 1A sekarang belum membentuk rantai tersebut.

Kontrol akses dan batas biaya dasar hadir sebelum panggilan model nyata. Approval/audit hadir sebelum publishing. Sandbox hadir sebelum agent boleh mengedit dan menjalankan kode. Social API dimulai dengan dry run; akses resmi platform perlu diverifikasi saat integrasi. Hardening fase 8 memperkuat kontrol awal, bukan menunda keamanan sampai akhir.

Permintaan 16 Oktober 2026 memprioritaskan persiapan aset, daftar dependency, dan revisi mockup homepage sebagai increment desain fase 1 (ADR-015), tersedia di [paket home V1](../design/home-v1/README.md). Permintaan lanjutan 18 Oktober 2026 mengotorisasi implementasi homepage V4 (ADR-016), kini tersedia secara lokal. Fase 1B, integrasi agent/publishing, serta deployment tidak ikut diotorisasi.

## Di luar scope saat ini

Homepage publik lokal telah diimplementasikan sesuai ADR-016. Tidak ada fitur agent/admin, akun cloud baru, deployment, pembelian layanan, remote GitHub, media sosial, pemasangan model, atau akses data Warza. Tidak ada target waktu komitmen; perkiraan terdahulu bergantung kapasitas, infrastruktur, serta persetujuan provider.

Detail deliverable dan kriteria selesai ada di [implementation-phases.md](implementation-phases.md). Status faktual selalu mengikuti [project-status.md](project-status.md), bukan tabel roadmap sebagai bukti implementasi.
