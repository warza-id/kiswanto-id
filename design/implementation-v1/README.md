# Homepage V4 — hasil implementasi

18 Oktober 2026. Screenshot berikut berasal dari aplikasi hasil build produksi, bukan gambar mockup.

- [Laptop — 1440 px](laptop.png)
- [Tablet — 834 px](tablet.png)
- [Mobile — 390 px](mobile.png)
- [Hasil pemeriksaan browser](checks.json)

## Yang diterapkan

Hero charcoal dengan portrait kaos hitam dari V3, master logo V4, headline personal, statistik 10+/20+ dari pengguna, tiga highlight CV, enam teknologi pilihan, dan footer kontak. Tombol Hubungi Saya memakai email publik yang dikonfirmasi pengguna: kiki@kiswanto.id. Navigasi memakai anchor halaman; Tentang Saya mengarah ke highlight pengalaman.

Layout laptop menampilkan pengalaman tiga kolom dan teknologi satu baris. Tablet memakai daftar pengalaman vertikal dan teknologi dua baris. Mobile memakai teks, portrait dan statistik dalam satu kolom; menu dapat dibuka/ditutup, ditutup dengan Escape/klik di luar/pemilihan tautan, dan fokus kembali ke tombol saat Escape.

Logo V4 dipasang ke header/footer, favicon ICO/SVG, serta Apple touch icon. Metadata berbahasa Indonesia memakai nama Kiki Kiswanto. Aset teknologi memakai SVG Devicon yang disimpan lokal beserta lisensi. [Sumber aset](../../docs/asset-sources.md).

## Validasi akhir

- npm run lint: lulus.
- npx tsc --noEmit: lulus.
- npm run build: lulus; homepage dan ikon diprerender.
- Browser Chrome: lebar 320, 390, 834, 1024, 1440, 1920 px; tidak ada overflow horizontal, semua gambar termuat, dan anchor memiliki target.
- Menu, Escape/fokus, tutup setelah navigasi, skip link, reduced motion, href email dan respons HTTP favicon diperiksa.
- Tidak ada pageerror pada pemeriksaan browser; ini bukan klaim audit accessibility menyeluruh atau pengujian semua browser.
- Screenshot laptop/tablet/mobile ditinjau visual. Tidak memasang test runner, dependency fitur tambahan, backend, atau layanan cloud.

## Menjalankan

Dari root proyek: npm run dev, kemudian buka http://localhost:3000. Untuk produksi lokal: npm run build lalu npm start.

Preview akhir sesi berjalan lokal di http://127.0.0.1:3000. Server ini sementara dan perlu dijalankan ulang jika berhenti. Tidak ada deployment/domain live.

## Batasan dan next action

Portrait merupakan derivative AI yang sudah dipakai pada mockup. Data pengalaman CV bersifat historis; statistik mengikuti instruksi pengguna. Logo teknologi menggunakan representasi Devicon sehingga detailnya dapat berbeda dari ilustrasi generatif pada mockup. Warna/crop/layout disesuaikan untuk ukuran layar nyata. Email membuka aplikasi email pengguna, tanpa mengirim otomatis.

Next action: review implementasi dan beri arahan revisi. Deployment memerlukan permintaan/approval tersendiri.

