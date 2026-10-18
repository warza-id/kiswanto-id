# Proposal schema Firestore

**Belum diimplementasikan.** Tidak ada Firebase SDK, project binding, rules, indexes, atau data cloud yang dibuat pada fase 1A. Detail field berikut melengkapi rancangan konseptual sebelumnya; finalisasi sebagai contract tervalidasi pada fase 1B/2.

## Namespace dan konvensi

MVP satu personal brand menggunakan root collection sederhana hanya jika namespace/proyek sudah dipastikan aman. Jika memakai Firebase bersama Warza, gunakan namespace terisolasi seperti `workspaces/{workspaceId}/...` beserta rules/indexes yang sesuai setelah keputusan eksplisit. Jangan mengasumsikan project baru atau menulis root collection di `beekasir-60f31`/`beekasir` sebelum keputusan tersebut.

Semua waktu memakai server `Timestamp` UTC; jadwal menyimpan timezone IANA (`Asia/Jakarta` untuk pemilik saat ini). ID tidak mengandung email/data pribadi. Referensi artefak mencakup storage path, generation/version, SHA-256, MIME, dan ukuran. Field yang belum tersedia bernilai null atau dihilangkan sesuai Zod contract, bukan string kosong ambigu. Body artikel, token, dan media biner tidak masuk dokumen Firestore.

## Koleksi inti

| Path konseptual | Field utama yang diusulkan |
| --- | --- |
| `tasks/{taskId}` | `type`, `status`, `requestedBy`, `inputRef`, `outputRefs[]`, `priority`, `createdAt`, `updatedAt`, `availableAt`, `attempt`, `maxAttempts`, `idempotencyKey`, `policyVersion`, `budgetId`, `leaseOwner`, `leaseExpiresAt`, `fencingToken`, `approvalIds[]`, `lastError` tersanitasi |
| `contentDrafts/{draftId}` | `taskId`, `title`, `slug`, `currentVersion`, `status`, `sourceRefs[]`, `createdAt`, `updatedAt`, `publishedCommitSha` nullable |
| `contentDrafts/{draftId}/versions/{versionId}` | immutable `version`, `artifactRef`, `artifactHash`, `metadata`, `mediaManifest`, `knowledgeVersion`, `promptVersion`, `createdAt`, `createdBy` |
| `approvals/{approvalId}` | `taskId`, `resourceType`, `resourceId`, `versionId`, `artifactHash`, `action`, `target`, `status`, `requestedAt`, `expiresAt`, `decidedBy`, `decidedAt`, `reason`, `consumedByOperationId` nullable |
| `socialAccounts/{accountId}` | `platform`, `remoteAccountId`, `displayName`, `connectionStatus`, `grantedScopes[]`, `tokenExpiresAt`, `lastCheckedAt`; backend-only secret reference bila diperlukan |
| `socialPosts/{postId}` | `taskId`, `sourceDraftId`, `sourceCommitSha`, `platform`, `accountId`, `payloadRef`, `artifactHash`, `version`, `scheduledAt`, `timezone`, `status`, `approvalId`, `operationId`, `remotePostId`, `remoteUrl`, `publishedAt`, `lastError` |

`tasks.type`: usulan `RESEARCH`, `CONTENT`, `CODE_CHANGE`, `SOCIAL_PUBLISH`, `ANALYTICS`, `WEBSITE_PUBLISH`. State task lengkap mengikuti [agent-workflow.md](agent-workflow.md). Draft: `DRAFT`, `IN_REVIEW`, `APPROVED`, `REJECTED`, `PUBLISHED`. Status `APPROVED` hanya cache UI; kewenangan selalu diverifikasi dari record approval, hash, dan expiry. Social post: `DRAFT`, `AWAITING_APPROVAL`, `SCHEDULED`, `PUBLISHING`, `PUBLISHED`, `NEEDS_RECONCILIATION`, `FAILED`, `CANCELLED`.

## Koleksi operasional

| Path konseptual | Isi dan pemilik write |
| --- | --- |
| `agentConfigs/{agentId}` | Prompt/model version, tool allowlist, permission, retry policy; backend atas perubahan pemilik |
| `schedules/{scheduleId}` | Cron, timezone, task template ref, enabled, nextRunAt, lastRunAt; scheduler backend |
| `budgets/{budgetId}` | Period start/end, currency, limit, reserved, spentActual, perTaskLimit; backend transaksional |
| `usageEvents/{eventId}` | Task/attempt/provider/model, input/output tokens, estimate/actual cost, unit/currency, latency, timestamp; backend append-only |
| `workerLeases/{workerId}` | Worker identity, capabilities, heartbeatAt, onlineUntil, runtime version; backend; ini liveness worker, bukan sumber lease task kedua |
| `deployments/{deploymentId}` | Repo, PR, commit SHA, environment, approval refs, CI run, URL, status, verifiedAt, rollback reference; backend/CI identity |
| `auditLogs/{eventId}` | Actor/type, action, resource, request/operation ID, timestamp, outcome, sanitized detail; backend append-only |
| `analyticsSnapshots/{snapshotId}` | Source, period, dimensions, metrics, collectedAt, provenance; ingestion backend |
| `operations/{operationId}` | Stable idempotency key, action/target, artifact hash, approval ID, status, remote ID, request/attempt timestamps, reconciliation outcome; publisher backend |

`operations` merupakan tambahan proposal untuk ledger side effect. `workerLeases` hanya heartbeat; `tasks` menyimpan lease eksekusi authoritative. Budget mata uang mengikuti billing provider dan normalisasi eksplisit; tidak mengasumsikan angka biaya tanpa unit atau kurs.

## Approval dan transaksi

Status approval: `PENDING`, `APPROVED`, `REJECTED`, `REVOKED`, `EXPIRED`, `CONSUMED`. Action terpisah, misalnya `CONTENT_PUBLISH`, `SOCIAL_PUBLISH`, `PRODUCTION_DEPLOY`. `target` memuat repo/branch/environment atau platform/account dan jadwal yang disetujui.

Backend memverifikasi identitas admin, action/target, versi/hash, policy dan expiry. Dalam transaksi, approval yang valid diikat ke satu operation dan ditandai `CONSUMED` saat reservasi aksi. Retry dari operation yang sama boleh resume berdasarkan ledger; operation lain tidak boleh memakai ulang approval. Approval consumed **bukan** bukti sukses publikasi. Gateway mengecek kembali pembatalan/expiry yang berlaku sebelum mengirim aksi eksternal; status remote ambigu harus direkonsiliasi. Revoke tidak dapat membatalkan efek remote yang sudah selesai.

Revisi membuat dokumen versi baru dan mencabut approval versi lama. Hash dihitung backend dari bytes/manifest immutable dengan canonicalization yang ditetapkan contract. Jangan mempercayai hash yang dikirim browser tanpa verifikasi. Update state, claim lease, fencing increment, budget reservation, dan schedule deduplication harus atomic atau menggunakan operation key yang deterministik.

## Query/index yang direncanakan

| Kegunaan | Query konseptual / kandidat composite index |
| --- | --- |
| Task siap jalan | `status == QUEUED`, `availableAt <= now`, order `availableAt ASC`, `priority DESC` |
| Retry siap jalan | `status == RETRY_WAIT`, `availableAt <= now`, order `availableAt ASC` |
| Lease kedaluwarsa | per active status, `leaseExpiresAt <= now`, order `leaseExpiresAt ASC` |
| Review pemilik | `status == PENDING`, order `requestedAt DESC` pada approvals |
| Social due | `status == SCHEDULED`, `scheduledAt <= now`, order `scheduledAt ASC` |
| Jadwal aktif | `enabled == true`, `nextRunAt <= now`, order `nextRunAt ASC` |
| Task history | `requestedBy == uid`, order `createdAt DESC` |
| Audit resource | `resourceId == id`, order `timestamp DESC` |

Ini kandidat, bukan file index siap deploy. Finalisasi mengikuti query implementasi dan Emulator. Firestore tidak memberi unique constraint pada field biasa: gunakan deterministic document IDs/transaksi untuk deduplication key dan slot schedule; claim atomik tidak boleh diganti query lalu update tanpa transaksi.

## Akses dan retensi

Website publik tidak membaca koleksi control plane. Admin dapat membaca proyeksi yang diizinkan setelah autentikasi; mutasi sensitif melalui Functions. Worker mengakses gateway dan scoped artefact access. Secret token tidak ada di dokumen frontend-readable; Firestore Rules tidak dapat menyembunyikan sebagian field pada read dokumen, sehingga metadata rahasia harus dipisahkan sepenuhnya.

Rules awal deny-by-default; IAM service account backend tetap perlu dibatasi karena Admin SDK melewati Rules. Test allow/deny, double claim, stale token, approval mismatch/expiry, retry duplicate, serta budget concurrency sebelum data nyata. TTL hanya untuk data sementara setelah kebijakan retensi diputuskan; TTL bukan mekanisme pencabutan lease/approval tepat waktu. Audit dan riwayat publikasi tidak dihapus otomatis. Backup/restore serta redaksi informasi pribadi ditetapkan sebelum production.
