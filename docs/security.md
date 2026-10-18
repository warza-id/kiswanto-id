# Keamanan dan otorisasi

Status: persyaratan rancangan. Homepage statis V4 tersedia, tetapi belum ada autentikasi, backend, rules, secrets, atau deployment; jangan mengklaim kontrol berikut sudah aktif.

## Identitas dan batas kepercayaan

- Firebase Authentication untuk pemilik/admin; backend memvalidasi token, custom claims/role, expiry dan revocation. Gunakan perlindungan login/MFA bila didukung konfigurasi yang dipilih.
- Browser tidak boleh menentukan role sendiri atau langsung mengubah task lease, approval final, budget, token sosial, maupun audit.
- Mutasi sensitif melalui Functions v2/policy gateway: autentikasi, otorisasi per resource, input schema, rate limit, idempotency dan audit. Jika memakai session cookie, tambahkan CSRF protection serta pengaturan cookie yang benar.
- Website publik tidak memiliki kredensial admin atau akses ke control plane. Preview draft tidak boleh menjadi URL publik tanpa kontrol akses/expiry yang disengaja.
- Worker memiliki identitas sendiri dengan akses gateway dan artefak terbatas. Sandbox agent tidak menerima broad Firebase Admin credential. Admin SDK backend melewati Firestore Rules, sehingga IAM dan validasi aplikasi wajib sama-sama ditegakkan.
- Untuk Firebase bersama Warza, verifikasi namespace dan rules agar tidak membuka akses lintas aplikasi. Belum ada persetujuan binding project untuk Kiswanto AI.

## Approval manusia dan production

| Operasi | Otorisasi |
| --- | --- |
| Riset, draft, internal review | Agent sesuai task, allowlist dan budget |
| Edit branch/sandbox, buat PR | Developer agent sesuai scope |
| Approve/reject konten | Pemilik/admin terautentikasi, tercatat backend |
| Publikasi website/sosial | Approval manusia valid untuk versi, aksi dan target; publisher terbatas |
| Merge branch production | Manusia; agent tidak punya izin merge/bypass |
| Hubungkan akun, ubah izin atau budget limit | Pemilik/admin melalui backend |
| Production deploy | Pipeline identity terpisah setelah merge/release approval manusia yang berlaku |

Approval terikat pada hash immutable body/metadata/media, resource/version, action, target, masa berlaku, dan actor. Revisi atau perubahan target membatalkan persetujuan sebelumnya. Quality agent tidak dapat memberi human approval. Backend mengikat approval ke operation ID secara atomik agar tidak digunakan ulang oleh aksi lain; lihat [schema](firestore-schema.md).

GitHub kelak memakai protected branch, required status checks, stale-review dismissal, CODEOWNERS/reviewer yang sesuai, dan larangan direct push/bypass untuk agent. Commit baru membutuhkan checks dan review yang sesuai. Konten dan kode mempunyai gate terpisah; perubahan auth, permission, pembayaran atau secrets membutuhkan review manual khusus. Branch protection, workflow, dan environment protection **belum dikonfigurasi**.

## Secrets dan data

API key LLM, token GitHub/OAuth, signing key dan service-account secrets berada di Secret Manager atau secret store terenkripsi dengan akses minimum. Jangan menyimpan di Git, `.md`, log, prompt, draft, atau `NEXT_PUBLIC_*`. Jangan menyalin rahasia dari repository Warza.

OAuth backend memvalidasi state/redirect, memakai scopes minimum, serta mendukung expiry, refresh, revoke dan rotasi. Token sosial tidak disimpan pada dokumen yang dapat dibaca browser. Signed URLs berumur pendek dan dibatasi artefak yang perlu dibaca. Log meredaksi token, header otorisasi, email dan konten sensitif sesuai kebutuhan.

Publikasi informasi pribadi/proyek/klien hanya memakai sumber terverifikasi dan izin yang sesuai. Data riset tidak otomatis layak menjadi knowledge base pribadi. Retensi, penghapusan dan backup diputuskan sebelum produksi; jangan menerapkan TTL pada audit/history tanpa kebijakan.

## Isolasi worker dan prompt injection

Worker utama mengelola antrean; eksekusi kode agent berjalan pada container non-root terisolasi, tanpa privileged mode, tanpa host Docker socket, tanpa home/SSH/browser session mount. Batasi filesystem workspace, network egress, CPU/RAM, proses dan waktu. Host supervisor yang tepercaya mengelola container; agent tidak mendapatkan akses Docker daemon.

Tool registry memakai daftar izin eksplisit per peran/task. Hindari arbitrary shell pada host Zorin. Fetcher harus memblokir tujuan localhost, private network, metadata service, redirect berbahaya dan skema URL yang tidak diizinkan. Source eksternal, repository tidak tepercaya, komentar, halaman web dan output model tidak boleh mengubah policy, memberi approval, atau meminta secrets. Validasi output terstruktur dan parameter tool secara deterministik sebelum eksekusi.

MDX draft adalah input yang perlu divalidasi: batasi komponen/import, jangan menjalankan ekspresi/kode arbitrary dari output model pada preview berprivilege. Validasi media, MIME, ukuran, path traversal dan tautan; preview tidak membawa kredensial production.

## Ketahanan dan respons insiden

Lease/fencing/idempotency mengurangi eksekusi ganda; timeout publikasi memerlukan rekonsiliasi sebelum retry. Pause switch backend menghentikan claim/publish baru; hentikan worker dan cabut token saat insiden, simpan audit, periksa efek remote, lalu lakukan pemulihan yang diotorisasi. Pembatalan tidak menghapus posting yang sudah terbit secara ajaib.

Budget harus ditegakkan sebelum panggilan model/tool berbayar, dengan reservation atomic, limit per task/per periode, bounded retry dan fallback. Jangan hanya menghitung biaya sesudah pekerjaan selesai. Dashboard tetap dapat menampilkan task tertahan saat worker offline.

## Verifikasi sebelum production

Test Rules/IAM dan auth allow/deny; approval expiry/hash/target/replay; stale lease/double claim; output MDX tidak tepercaya; timeout dan duplicate publish; secret/dependency scan; dry-run social adapters; restore backup dan rollback; verifikasi deployment ke SHA yang disetujui. Detail tool test bersifat rencana sampai diperkenalkan fase terkait.
