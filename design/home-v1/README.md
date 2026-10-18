# Kiswanto.id — aset dan mockup home V1

16 Oktober 2026 · **Draft untuk revisi, belum diimplementasikan atau dipublikasikan.**

## Buka hasil

- [Mockup desktop lengkap](mockups/home-desktop-v1.png)
- [Preview logo dan favicon](assets/brand/brand-board.png)
- [Daftar dependency](dependencies.md)
- [Prompt gambar lengkap](prompts.md)
- [Manifest aset dan SHA-256](asset-manifest.json)

Semua hasil berada di `design/home-v1/`, terpisah dari `app/` dan `public/`. Logo/favicon baru belum dipasang ke aplikasi. Tidak ada package ditambahkan. Mockup adalah gambar statis; tombol dan tautannya belum berfungsi.

## Arah revisi

Tetap mempertahankan hero charcoal, aksen indigo, dan bagian isi terang dari referensi. Fokus berubah menjadi perkenalan Kiki Kiswanto sebagai pengembang web dengan pengalaman membangun sistem dan mengajar. Foto terbaru pengguna menjadi acuan portrait. Judul utama: **Membangun solusi. Terus belajar. Berbagi lewat karya.**

- Newsletter dan seluruh isian berlangganan dihapus.
- Angka 10+, 100+, 20+, dan 1K+ dihapus karena tidak tersedia bukti pendukung.
- CTA utama menjadi “Jelajahi karya”, dengan “Tentang saya” sebagai pendamping.
- Tidak menampilkan login atau tombol chat aktif. Kiswanto AI diberi label “Dalam pengembangan”.
- Empat kartu generik dipadatkan menjadi tiga: Proyek & Eksperimen, Catatan Belajar, Kiswanto AI. Kolaborasi mendapat ruang tersendiri pada penutup.
- Tidak mengarang daftar artikel, testimoni, hasil bisnis, pekerjaan terkini, atau status peluncuran proyek.

## Aset yang sudah dibuat

| Kebutuhan | File | Penggunaan |
| --- | --- | --- |
| Ikon header utama | [logo-mark.svg](assets/brand/logo-mark.svg) | Monogram K geometris, gradient indigo, latar transparan; ukuran header 28–36 px |
| Ikon header latar terang | [logo-mark-dark.svg](assets/brand/logo-mark-dark.svg) | Warna solid indigo |
| Ikon monokrom | [logo-mark-white.svg](assets/brand/logo-mark-white.svg) | Putih untuk permukaan gelap |
| Ekspor logo | [logo-mark-512.png](assets/brand/logo-mark-512.png) | PNG transparan 512 × 512 |
| Favicon vektor | [favicon.svg](assets/brand/favicon.svg) | K pada bidang gelap dengan sudut membulat |
| Favicon legacy | [favicon.ico](assets/brand/favicon.ico) | Berisi ukuran 16, 32, 48 px |
| Ikon PNG | `assets/brand/icon-{16,32,48,180,192,512}.png` | 180 untuk Apple touch icon kelak; 192/512 disiapkan sebagai ekspor, bukan implementasi PWA |
| Portrait hero | [portrait-hero.webp](assets/images/portrait-hero.webp) | 1536 × 1024, sekitar 70 KiB; derivative AI dari foto pengguna |
| Catatan Belajar | [notes-learning.webp](assets/images/notes-learning.webp) | 1536 × 1024, sekitar 117 KiB; ilustrasi meja belajar |
| Proyek & Eksperimen | [projects-ecosystem.webp](assets/images/projects-ecosystem.webp) | 1536 × 1024, sekitar 47 KiB; ilustrasi konseptual web/mobile |
| Kiswanto AI | [ai-exploration.webp](assets/images/ai-exploration.webp) | 1536 × 1024, sekitar 51 KiB; ilustrasi eksplorasi AI |

Keempat gambar mempunyai master `.png` dengan nama dasar yang sama. WebP disiapkan untuk website; master PNG untuk revisi. Gambar proyek bukan screenshot aplikasi yang telah dirilis; meja belajar bukan dokumentasi tempat kerja pengguna. Footer tidak membutuhkan foto tambahan. Ikon navigasi nantinya bisa memakai SVG atau Lucide.

Logo dirancang ulang sebagai vektor mengikuti bentuk K pada referensi, bukan hasil crop bitmap. Wordmark disarankan berupa teks “KISWANTO.ID” di samping ikon agar tetap tajam dan mudah diakses. Preview logo menggunakan Arial; implementasi dapat memakai Geist yang sudah tersedia pada scaffold.

## Fakta dan batas personalisasi

Sumber utama: CV Kiki Kiswanto versi Mei 2018, dua halaman, diberikan langsung oleh pengguna. Foto terbaru berasal dari lampiran pengguna, bukan foto formal pada CV. PDF dan data kontak pribadi lengkap tidak disalin ke aset publik.

| Fakta | Sumber | Pemakaian |
| --- | --- | --- |
| Nama Kiki Kiswanto; Full Stack Developer | CV halaman 1 | Nama dan deskripsi keahlian; bukan klaim jabatan pada perusahaan saat ini |
| Freelance Developer, CYBERKAY DEV, 2012–2015 | CV halaman 2 | Timeline |
| Tutor pemrograman, Privat Bandung Course, Feb 2016–Jan 2017 | CV halaman 1 | Timeline ringkas 2016–2017 dan narasi berbagi |
| Web Developer BTPN mulai Feb 2017 | CV halaman 1 | “2017 — Mulai di BTPN”; tidak menganggap “Present” dari 2018 masih berlaku |
| Pengembangan web dan sistem perbankan | CV halaman 1 | Ringkasan pengalaman historis |

Pengalaman Walden Global Services dan pendidikan Universitas Pasundan dapat memperkaya halaman Tentang nanti; tidak semuanya perlu dimasukkan ke home. Warza tercatat pada konteks proyek pengguna, tetapi jabatan founder dan pencapaiannya tidak diasumsikan dari CV. Tidak memasukkan alamat, nomor telepon, tanggal lahir, agama, atau status pernikahan.

Portrait telah diproses AI untuk latar, pencahayaan, dan penghilangan lanyard. Ia bukan foto asli tanpa retouch. Kemiripan wajah perlu ditinjau pengguna sebelum dipilih sebagai aset publik. Foto sumber hanya 417 × 425 px; hasil lebih besar tidak berarti detail aslinya bertambah.

## Opsi footer tanpa berlangganan

| Opsi | Isi | Cocok bila |
| --- | --- | --- |
| **A. Percakapan & kolaborasi — dipakai di mockup** | “Punya ide yang ingin diwujudkan?” + deskripsi topik diskusi + CTA “Mari berdiskusi”; di bawahnya logo, Tentang, Karya, Kontak, copyright | Home diarahkan untuk perkenalan dan peluang percakapan |
| B. Personal & ringkas | Logo, “Belajar. Membangun. Berbagi.”, satu kalimat tentang situs, Tentang/Karya/Catatan/Kontak, copyright | Ingin footer kecil tanpa banner CTA |
| C. Karya & ekosistem | “Lanjutkan menjelajah.” + area Karya, Catatan Belajar, Ekosistem Warza, dan Kontak | Ingin menonjolkan hubungan portofolio dengan proyek Warza; pilih URL dan karya yang layak dipublikasikan dahulu |

Tidak perlu form kontak untuk desain ini. CTA dapat menuju bagian kontak atau tautan kontak yang nanti dipilih pengguna. Tidak memakai email/nomor lama dari CV sebagai tujuan aktif secara otomatis. Tautan sosial hanya ditambahkan setelah akun publik dikonfirmasi.

## Susunan dan copy acuan

1. **Header:** KISWANTO.ID · Beranda · Tentang · Karya · Catatan · Mari berdiskusi.
2. **Hero:** KIKI KISWANTO / FULL STACK DEVELOPER. “Membangun solusi. Terus belajar. Berbagi lewat karya.” Deskripsi: “Dari pengembangan web dan sistem perbankan hingga mengajar pemrograman. Di sini saya merangkum perjalanan, karya, dan hal-hal yang saya pelajari.” CTA: Jelajahi karya / Tentang saya.
3. **Jejak perjalanan:** “Berangkat dari kode, tumbuh lewat pengalaman.” Tiga titik historis di atas, dengan catatan “Cuplikan perjalanan dari CV 2018.”
4. **Ruang berkarya:** “Yang saya bangun, tulis, dan eksplorasi.” Kartu Proyek & Eksperimen, Catatan Belajar, Kiswanto AI. Tidak menganggap artikel atau portofolio sudah tersedia; saat implementasi, gunakan empty state atau tautkan ke section yang benar-benar ada.
5. **Penutup A:** “Punya ide yang ingin diwujudkan?” Deskripsi: “Mari bertukar pikiran tentang produk digital, pengembangan web, atau belajar teknologi.” CTA: Mari berdiskusi.
6. **Footer:** Logo, “Belajar. Membangun. Berbagi.”, Tentang/Karya/Kontak, © 2026 Kiki Kiswanto.

Mockup dihasilkan dengan imagegen sehingga font dan warna piksel merupakan acuan visual, bukan spesifikasi CSS yang presisi. Copy di dokumen ini menjadi rujukan implementasi kelak.

## Spesifikasi untuk implementasi berikutnya

- Token usulan: canvas `#FAFAF8`, surface `#FFFFFF`, inverse `#101117`, text `#171923`, muted `#626779`, brand `#5147DB`, accent-display `#7972FF`, border `#E5E6ED`. Accent-display untuk elemen besar di latar gelap; CTA putih menggunakan brand yang lebih gelap.
- Font: Geist melalui `next/font`, tanpa paket font tambahan. Hero desktop sekitar 56–64 px, judul section 32–40 px, body 16–18 px, line-height minimal 1.5 untuk paragraf.
- Desktop: container maksimum 1280 px, gutter 48–80 px, hero dua kolom, kartu tiga kolom. Mobile: satu kolom, teks hero dahulu lalu portrait, timeline vertikal, CTA dan footer menumpuk. Navigasi mobile menggunakan tombol dengan label dan status expanded. Ini spesifikasi, belum mockup mobile atau UI teruji.
- Gambar hero jangan menjadi satu bitmap bersama teks; gunakan teks HTML terpisah dan crop portrait dengan fokus di wajah (sekitar 68% horizontal). Kartu memakai rasio 16:9–2:1; periksa crop di mobile.
- Alt portrait: “Kiki Kiswanto tersenyum mengenakan kacamata dan jaket hitam krem.” Gambar kartu boleh dekoratif dengan alt kosong bila judul kartu sudah menjelaskan tujuannya. Ikon logo dapat dekoratif bila wordmark di sampingnya punya nama aksesibel.
- Target implementasi: focus terlihat, kontras AA diverifikasi, tombol setidaknya 44 px, navigasi keyboard, reduced motion, tanpa tautan mati. Review gambar saat ini bukan bukti accessibility aplikasi.

## Langkah berikutnya

Revisi arah mockup, kemiripan portrait, wording, dan pilihan footer. Lengkapi pengalaman setelah 2018 serta tujuan kontak ketika diperlukan. Setelah ada permintaan implementasi, bangun home dari aset individual; jangan menjadikan gambar mockup sebagai seluruh halaman. Publikasi tetap mengikuti approval proyek.
