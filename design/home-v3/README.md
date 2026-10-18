# Mockup home V3 — sederhana, tiga ukuran layar

18 Oktober 2026. Konsep visual untuk review; belum menjadi halaman web.

## Hasil

| Versi | Gambar | Resolusi file |
| --- | --- | --- |
| Laptop | [Buka mockup laptop](home-laptop-v3.png) | 1448 × 1086 |
| Tablet | [Buka mockup tablet](home-tablet-v3.png) | 949 × 1657 |
| Mobile | [Buka mockup mobile](home-mobile-v3.png) | 725 × 2169 |

Resolusi adalah ukuran PNG hasil generasi, bukan breakpoint CSS atau hasil pengujian browser.

## Perubahan dari V2

- Isi dikurangi menjadi hero, tiga highlight pengalaman CV, enam teknologi pilihan, dan footer kontak.
- Menghapus proses kerja “Memahami bisnis sebelum memilih teknologi”, bagian “Berbagi cara berpikir”, kartu layanan, dan kartu produk agar halaman lebih sederhana.
- Highlight CV: Web Developer di BTPN, Full Stack/DevOps pada pengalaman Walden Global Services, dan Tutor Pemrograman di Privat Bandung Course. Ini pengalaman historis yang tercatat dalam CV Mei 2018, bukan klaim jabatan aktif saat ini.
- Mempertahankan 10+ Tahun Pengalaman dan 20+ Proyek Digital sesuai instruksi pengguna sebelumnya. Angka berasal dari pengguna, tidak dihitung atau diaudit secara independen.
- Teknologi dipadatkan menjadi Angular, Node.js, PHP, MySQL, Docker, AWS; daftar teknologi lain dari CV dapat muncul di halaman Tentang nanti.
- Pakaian portrait diganti menjadi kaos hitam polos crew-neck yang rapi, menggunakan foto asli pengguna sebagai acuan identitas.
- [Logo K vektor](assets/logo-k-ascending.svg) diperbaiki dengan batang terpisah, diagonal naik ke kanan atas, dan lipatan/rongga di kanan bawah. [Preview logo](assets/logo-reference-board.png) menjadi referensi gambar ketiga mockup. Ini rekonstruksi vektor, bukan klaim salinan piksel persis dari bitmap lama.

## Adaptasi layout

Laptop: navigasi penuh, teks/foto berdampingan, pengalaman tiga kolom, teknologi satu baris.

Tablet: navigasi lebih ringkas, teks/foto berdampingan dengan lebar yang disesuaikan, pengalaman disusun vertikal, teknologi dua baris.

Mobile: logo/menu, teks, tombol, portrait, lalu statistik; highlight vertikal dan teknologi dua baris. Tidak sekadar mengecilkan versi laptop.

## Aset dan proses

- [Portrait kaos hitam](assets/portrait-black-tee.png) — edit AI dari foto yang diberikan, bukan foto baru yang benar-benar diambil.
- [Logo SVG](assets/logo-k-ascending.svg) dan [PNG transparan](assets/logo-k-ascending.png).
- [Prompt lengkap](prompts.md), mode built-in image_gen untuk portrait/mockup; geometri logo dibuat sebagai SVG native.
- [Manifest](manifest.json) mencatat ukuran dan SHA-256 seluruh gambar/SVG.

## Verifikasi dan batasan

Ketiga mockup ditinjau visual: pakaian, garis naik pada logo, statistik, highlight CV, enam teknologi, dan footer terlihat. Bagian yang diminta dihapus tidak muncul. Semua PNG dapat didekode dan SVG valid XML.

Ini gambar statis generatif; bentuk logo teknologi, font, dan layout belum merupakan aset UI presisi atau implementasi responsif yang diuji. Untuk implementasi, gunakan logo SVG terpisah dan aset resmi teknologi. Kemiripan portrait tetap perlu review pengguna. Tidak mengubah app/, public/, package.json, atau package-lock.json; lint/typecheck/build tidak dijalankan ulang. V1/V2 tetap disimpan.

Langkah berikutnya: review tiga layout dan portrait; revisi desain sesuai arahan sebelum implementasi homepage.

