# Desain produk dan visi

Status: homepage V4 diimplementasikan pada 18 Oktober 2026; bagian dashboard/agent tetap rancangan. Acuan visual: [V4](../design/home-v4/README.md), hasil browser: [implementasi V1](../design/implementation-v1/README.md).

## Visi

`kiswanto.id` adalah pusat personal brand Kiswanto; **Kiswanto AI** merupakan sistem pendukung semi-otonom untuk mengelola ekosistem tersebut. Website tetap bermanfaat dan tersedia ketika worker lokal mati. Sasaran jangka panjang meliputi website, satu dashboard kendali, dan distribusi ke Instagram, Facebook, serta LinkedIn.

Audiens yang dituju: rekan profesional/recruiter, komunitas developer, pemilik bisnis, dan calon mitra atau klien. Positioning yang diusulkan adalah **Technology Leader & Product Builder**. Judul jabatan, lama pengalaman, nama panggilan, pencapaian, dan detail biografi harus diverifikasi pemilik sebelum ditampilkan.

Warza dapat muncul sebagai bagian dari portofolio dan perjalanan entrepreneurship; identitas personal tetap utama. Jangan menganggap seluruh data internal ekosistem Warza boleh dipublikasikan.

## Arah website publik

Rute yang direncanakan: Home, About, Projects, Insights, Uses, Contact. Beranda kelak memuat perkenalan, nilai yang ditawarkan, karya terpilih, tulisan terbaru, dan kontak. Artikel mencakup software engineering, AI/automation, leadership, serta entrepreneurship.

Arah visual terdahulu menggabungkan Tech Builder dan Founder/Thought Leader: modern, editorial, personal, tipografi jelas, ruang kosong cukup, kontras baik, responsif. Usulan warna, tipografi, token, ilustrasi, dan mockup V1 kini tersedia pada [paket desain home](../design/home-v1/README.md), belum disetujui sebagai desain final. Pilihan homepage V4 kini diterapkan pada aplikasi root; spesifikasi lama lainnya tetap konteks rancangan. Implementasi home memakai token semantik, navigasi keyboard, focus state, alt portrait dan dukungan reduced motion. Bagian desain lain tetap rencana.

## Arah dashboard

Dashboard admin responsif direncanakan menjadi PWA: instruksi/chat, task queue, draft preview, revisi, approve/reject, kalender, koneksi sosial, status worker, usage/budget, serta audit. Mulai dari alur inti sebelum fitur PWA lanjutan. Status antrean, menunggu approval, gagal, dan worker offline harus terlihat jelas.

## Batas kemampuan

AI boleh meneliti, menyiapkan draft, mengusulkan jadwal, menguji kode di sandbox, dan membuat PR sesuai izin. AI tidak boleh mengesahkan pekerjaannya sendiri, mengubah permission sendiri, atau merge production. Konten publik dan tindakan sosial membutuhkan approval yang sesuai aksi, versi, target, dan waktu.

Single orchestrator dengan enam peran awal: Research, Content, Developer, Social, Analytics, Quality. SEO dan creative adalah kapabilitas lintas peran, bukan keharusan menambah proses independen. Satu worker dapat menjalankannya berurutan.

## Mutu dan hasil yang diharapkan

- Konten faktual, berguna, bergaya Indonesia profesional, dan memakai sumber untuk klaim teknis.
- Pengalaman pribadi harus berasal dari knowledge base terverifikasi atau instruksi pemilik.
- Contoh/mockup dan fitur rencana diberi label; jangan tampilkan angka atau bukti sosial rekaan.
- Metrik nanti: kualitas dan waktu produksi konten, organic clicks, engagement, kontak masuk, peluang kerja sama, keberhasilan task, dan biaya per task. Belum ada baseline atau target angka tervalidasi.

Hosting, provider model, anggaran, identitas visual, dan prioritas konten dirangkum sebagai keputusan terbuka di [decisions.md](decisions.md).
