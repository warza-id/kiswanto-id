# Revisi logo & mockup V4

18 Oktober 2026. Logo mengikuti screenshot khusus yang diberikan pengguna pada turn ini.

## Mockup

- [Laptop](home-laptop-v4.png)
- [Tablet](home-tablet-v4.png)
- [Mobile](home-mobile-v4.png)

Logo pada header/footer direvisi melalui image_gen built-in dengan referensi terisolasi. Isi dan susunan V3 menjadi acuan yang dipertahankan; ini edit generatif, bukan jaminan identik piksel di luar area logo.

## Aset siap digunakan

| Aset | File |
| --- | --- |
| Master logo transparan | [logo.svg](assets/brand/logo.svg) |
| PNG transparan 512 px | [logo-512.png](assets/brand/logo-512.png) |
| PNG tambahan | logo-64.png, logo-128.png, logo-256.png dalam assets/brand/ |
| Favicon vektor dengan latar gelap | [favicon.svg](assets/brand/favicon.svg) |
| Favicon ICO multiukuran | [favicon.ico](assets/brand/favicon.ico), 16/32/48 px |
| PNG favicon | favicon-16.png, favicon-32.png, favicon-48.png, favicon-180.png, favicon-192.png, favicon-512.png dalam assets/brand/ |
| Preview perbandingan | [logo-review.png](assets/brand/logo-review.png) |
| Referensi asli tanpa perubahan | [logo-original.png](reference/logo-original.png) |

SVG merekonstruksi kontur logo dari screenshot 66 × 68 px: batang kiri, diagonal naik dengan ujung datar, celah gelap, serta kaki/tiang kanan bawah. Efek lipatan 3D V3 dihilangkan. Warna biru-ungu mengikuti sampel piksel sumber. PNG/ICO adalah ekspor dari SVG yang sama. Rekonstruksi tajam tidak mempertahankan blur/antialias screenshot kecil secara piksel-identik; referensi asli disimpan utuh.

Favicon memakai bidang gelap dan ruang tepi agar terbaca pada tab browser. PNG 180 disiapkan untuk Apple touch icon; 192/512 merupakan ekspor tambahan, bukan aktivasi PWA.

Semua aset berada dalam folder desain, belum mengganti favicon aplikasi atau file public/. Untuk implementasi berikutnya, gunakan SVG ini sebagai sumber logo, bukan potongan logo hasil generatif dari mockup.

## Pemeriksaan

Ketiga mockup dan preview logo diperiksa visual. Semua raster dapat didekode; logo PNG memiliki alpha transparan; SVG valid XML; ICO memuat 16/32/48. [Manifest](manifest.json) mencatat SHA-256 dan ukuran aktual. File aplikasi serta package.json/lockfile tetap identik dengan HEAD; lint/typecheck/build tidak dijalankan karena tidak ada perubahan aplikasi.

[Prompt mockup](prompts.md) mencatat penggunaan built-in image_gen. Logo SVG dibuat sebagai aset vektor native. Versi terdahulu dipertahankan. Next action: review logo V4 dan mockup, lalu implementasi hanya jika diminta.

