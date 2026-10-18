# Workflow agent

Status: kontrak perilaku yang direncanakan, belum ada runtime. Field pendukung di [firestore-schema.md](firestore-schema.md).

## Peran dan tool

| Peran | Tool yang diizinkan sesuai task | Batas |
| --- | --- | --- |
| Research | Search/read, source retrieval | Tidak publish atau mengubah approval |
| Content | Draft, knowledge retrieval, SEO, permintaan visual | Tidak deploy atau mengarang fakta pribadi |
| Developer | Baca repo, edit sandbox, test, buat PR | Tidak push/merge production, tidak akses secret production |
| Social | Adaptasi caption/media, validasi, usulan jadwal | Publish hanya melalui broker dengan approval valid |
| Analytics | Membaca metrik dan menghasilkan laporan | Tidak mengubah data sumber atau mempublikasikan rekomendasi otomatis |
| Quality | Schema, fakta, tautan, policy, quality check | Review model bukan approval manusia |

Orchestrator menjadwalkan langkah dan menegakkan tool allowlist; satu worker cukup untuk awal. Peran tidak berarti enam layanan atau enam proses. Publisher merupakan capability backend terbatas, bukan kredensial bebas pada agent.

## State task yang diusulkan

```text
QUEUED → CLAIMED → RUNNING → AWAITING_APPROVAL → READY_TO_PUBLISH
                          │                      ↓
                          │                  PUBLISHING → SUCCEEDED
                          └→ SUCCEEDED (task internal tanpa side effect publik)

AWAITING_APPROVAL → QUEUED (request revision, versi baru)
RUNNING / PUBLISHING → RETRY_WAIT → QUEUED (hanya jika aman diulang)
PUBLISHING → NEEDS_RECONCILIATION (hasil remote tidak pasti)
NEEDS_RECONCILIATION → SUCCEEDED / RETRY_WAIT / FAILED
QUEUED / RUNNING → PAUSED (policy atau budget)
PAUSED → QUEUED (resume yang diotorisasi)
Kegagalan permanen / retry habis → FAILED
Pembatalan eksplisit → CANCELLED
```

Rejection final menutup task sebagai `CANCELLED`; request revision membuat versi artefak baru dan kembali mengantre. `FAILED` berfungsi sebagai dead-letter terminal; retry manual membuat attempt baru setelah penyebab diperiksa. `SUCCEEDED` dan `CANCELLED` terminal; side effect yang sudah terjadi tidak otomatis dibatalkan dengan perubahan state.

Setiap transisi divalidasi backend terhadap state lama, actor, policy, lease/fencing token, budget, dan versi input. Task internal selesai ketika hasil tersimpan. Task publikasi selesai setelah efek remote terkonfirmasi, bukan ketika model selesai menulis.

## Claim, crash, dan idempotency

1. Scheduler/admin membuat task dengan idempotency key untuk mencegah task ganda.
2. Worker meminta claim melalui gateway. Transaksi Firestore menetapkan worker ID, lease expiry, serta fencing token yang meningkat.
3. Heartbeat memperpanjang lease dengan token yang sama. Worker kehilangan lease harus berhenti; setiap hasil/transisi dari token lama ditolak backend.
4. Reaper mengambil kembali task dengan lease kedaluwarsa. Jika task sudah masuk `PUBLISHING`, rekonsiliasi dahulu; jangan sekadar enqueue ulang.
5. Sebelum side effect, gateway merekam operation key stabil untuk kombinasi task/action/target/artifact hash. Key tetap sama saat retry, tidak berubah mengikuti attempt.
6. Provider dengan idempotency native menerima key yang sama. Jika timeout tanpa kepastian dan provider tidak mendukungnya, set `NEEDS_RECONCILIATION` dan cari remote record sebelum pengulangan. Jika tidak dapat dipastikan, minta pemeriksaan manusia.

Lease tidak menjamin exactly-once pada layanan eksternal. Fencing melindungi state lokal; publisher sempit, operation ledger, dan rekonsiliasi melindungi efek remote. Retry transient memakai exponential backoff + jitter, maksimal percobaan dan batas waktu. Usulan awal: maksimal tiga revisi otomatis per task; nilai final dapat dikonfigurasi pemilik.

## Workflow artikel

Instruksi → cek knowledge/fakta → riset bersumber → outline → draft MDX/SEO/media → Quality → simpan versi immutable → preview → manusia approve/revise/reject → PR GitHub → checks pada SHA terkini → review dan merge manusia → deploy → verifikasi URL/commit → catat hasil.

Approval konten mencakup body, metadata, serta hash media. Approval merge/deployment merupakan gate terpisah; persetujuan artikel tidak mengizinkan perubahan kode. Approval kedaluwarsa atau revisi artefak memerlukan persetujuan baru. Long-form draft berada di Storage, Firestore hanya menyimpan manifest dan pointer.

## Workflow perubahan website

Instruksi → implementation plan → isolated branch/container → kode → lint/typecheck/test sesuai perubahan → preview desktop/mobile → PR → review manusia → required checks pada commit yang disetujui → merge manusia → deploy terkontrol → smoke check. Perubahan auth/permission/secrets memerlukan review manual khusus. Gagal deploy berarti status gagal; jangan menandai produksi sukses atau rollback tanpa mengikuti izin yang berlaku.

## Workflow sosial

Sumber konten terverifikasi → adaptasi per Instagram/Facebook/LinkedIn → validasi media/caption → record per platform/account → preview → approval spesifik payload dan jadwal → scheduler → gateway cek approval/budget → publisher API resmi → simpan remote ID/URL. Approval artikel tidak otomatis menyetujui caption sosial. Jadwal yang berubah material memerlukan approval baru.

Jika worker offline, task menunggu; keterlambatan dan expiry approval ditampilkan. Cloud publisher fase 8 dapat menangani materi siap terbit. Tidak menggunakan sesi browser pribadi untuk menghindari batas API. API tidak tersedia berarti handoff publikasi manual.

## Model, budget, audit

Light: local model untuk tagging/ringkasan; medium: local/cloud sesuai evaluasi; heavy: cloud untuk reasoning/coding/final review; visual: image adapter. Validasi output dengan schema sebelum tool action. Retry/fallback terbatas dan tetap dalam budget; prompt injection tidak boleh memperluas tool permissions.

Reserve budget secara atomik sebelum panggilan berbayar, rekonsiliasi usage aktual sesudahnya, dan tahan task bila limit habis. Audit menyimpan actor, task, transisi, artefak/hash, prompt/model version, tool, latency, biaya, serta outcome tanpa secret atau salinan data sensitif berlebihan.
