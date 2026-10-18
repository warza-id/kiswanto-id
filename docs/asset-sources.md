# Sumber aset homepage

18 Oktober 2026. Semua aset halaman disajikan lokal; tidak ada CDN logo pada runtime.

- Logo header/footer: [master SVG V4](../design/home-v4/assets/brand/logo.svg), disalin tanpa perubahan ke [public/brand/logo.svg](../public/brand/logo.svg).
- Favicon ICO/SVG serta Apple touch icon: ekspor V4, disalin ke app/favicon.ico, app/icon.svg, app/apple-icon.png melalui konvensi metadata Next.js.
- Portrait: [portrait kaos hitam V3](../design/home-v3/assets/portrait-black-tee.png), dibuat sebelumnya dengan imagegen dari foto pengguna; dikompresi ke [WebP](../public/images/kiki-kiswanto.webp). Tidak ada regenerasi wajah pada implementasi ini.
- Teknologi: [Devicon](https://github.com/devicons/devicon), SVG AngularJS plain (label Angular sesuai CV/mockup), Node.js original wordmark, PHP original, MySQL original wordmark, Docker plain, dan AWS original wordmark. Kontur/warna dipertahankan; viewBox dirapikan mengikuti batas artwork dengan padding agar ukuran visual konsisten.
- [Lisensi Devicon](../public/technologies/LICENSE.devicon) disimpan bersama aset. Logo teknologi tetap merupakan merek masing-masing pemiliknya.
- [Manifest sumber dan SHA-256](asset-manifest.json) menyimpan URL unduhan serta hash file yang digunakan; URL master dapat berubah, file lokal dan hash mengidentifikasi versi implementasi ini.
- Ikon UI: outline SVG sederhana pada app/ui/outline-icon.tsx, tanpa paket ikon tambahan.
- Font: Geist dari next/font bawaan stack; di-host oleh aplikasi setelah build.
