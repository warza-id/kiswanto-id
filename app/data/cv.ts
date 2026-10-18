// Satu sumber data CV untuk home dan /kiki.
// Sumber: profil LinkedIn (Save to PDF, 18 Okt 2026) + CV Januari 2018 untuk detail proyek lama.
// Data pribadi (alamat, telepon, email pribadi) sengaja tidak dipublikasikan.

export const profile = {
  name: "Kiki Kiswanto",
  title: "Senior Scrum Master · AI for Business",
  location: "Bandung, Jawa Barat",
  email: "kiki@kiswanto.id",
  website: "kiswanto.id",
  linkedin: "https://www.linkedin.com/in/kiki-kiswanto-a33b99118/",
  summary:
    "Profesional IT dengan pengalaman lebih dari 10 tahun di software development web dan mobile. Saat ini Senior Scrum Master di Bank SMBC Indonesia sekaligus praktisi AI untuk bisnis — fokus membantu tim menyampaikan produk digital secara terukur, menerapkan Agile yang realistis di lingkungan enterprise, kolaborasi lintas fungsi, dan AI yang benar-benar membantu keputusan.",
};

export type Position = {
  role: string;
  period: string;
  points: string[];
};

export type Experience = {
  organization: string;
  formerly?: string;
  location?: string;
  period: string;
  summary?: string;
  positions: Position[];
};

export const experiences: Experience[] = [
  {
    organization: "PT Bank SMBC Indonesia Tbk",
    formerly: "PT Bank BTPN Tbk",
    location: "Jakarta Selatan",
    period: "Feb 2017 – sekarang · 9 thn 9 bln",
    positions: [
      { role: "Scrum Master", period: "Mar 2022 – sekarang", points: ["Tim BES."] },
      { role: "Technical Lead", period: "Feb 2019 – Mar 2022", points: ["Tim FES (Frontend System)."] },
      { role: "Full Stack Developer", period: "Feb 2017 – Feb 2019", points: ["BTPN Alert (PHP) dan FES Phase 2.0 (Angular)."] },
    ],
  },
  {
    organization: "PT Walden Global Services (WGS)",
    location: "Soekarno-Hatta",
    period: "Mar 2016 – Feb 2018",
    summary: "PHP developer untuk anak perusahaan dan klien WGS, termasuk penempatan onsite di BTPN.",
    positions: [
      {
        role: "Web Developer",
        period: "Mar 2016 – Feb 2018",
        points: [
          "HelloBisnis — WordPress developer untuk platform e-commerce dan company profile.",
          "Gracia Teknologi — Moodle developer untuk platform pendidikan.",
        ],
      },
    ],
  },
  {
    organization: "Emveep (Kiranatama)",
    location: "Bandung",
    period: "Nov 2016 – Jan 2017",
    positions: [{ role: "PHP Developer", period: "Nov 2016 – Jan 2017", points: ["PHP developer (Laravel) — Whizliz.com, FinTech, GoFit."] }],
  },
  {
    organization: "Privat Bandung Course",
    location: "Bandung",
    period: "Mei 2016 – Jan 2017",
    positions: [{ role: "Tutor", period: "Mei 2016 – Jan 2017", points: ["Mengajar les privat pemrograman web, jaringan, dan komputer umum."] }],
  },
  {
    organization: "PT Jasa Marga (Persero) Tbk",
    location: "Cabang Purbaleunyi",
    period: "Jun – Agu 2015",
    positions: [{ role: "Web Developer", period: "Jun – Agu 2015", points: ["Magang Kerja Praktek Universitas Pasundan."] }],
  },
  {
    organization: "Cyberkay Dev",
    period: "2012 – 2015",
    summary: "Membentuk tim bersama rekan mahasiswa untuk mengerjakan proyek web skala kecil–menengah.",
    positions: [{ role: "Freelance Developer", period: "2012 – 2015", points: ["Proyek antara lain Profxy Music Center dan Klinik Bekam."] }],
  },
];

export const portfolio = [
  { name: "Kasir Q – Smart Point Of Sales", description: "Aplikasi kasir (POS) Android di Google Play.", href: "https://play.google.com/store/apps/details?id=com.beebeesoft.beekasir" },
  { name: "Warza Teknologi", description: "Software terintegrasi untuk UMKM: kasir, antrian, HR, dan toko online.", href: "https://www.warza.id/" },
];

export const projects = [
  { name: "FES (Frontend System)", context: "BTPN / SMBC Indonesia" },
  { name: "BTPN Alert", context: "IT Enterprise, BTPN" },
  { name: "Whizliz.com, FinTech, GoFit", context: "Emveep (Kiranatama)" },
  { name: "ITTaherl Shoes, Buddy Pranata, platform e-commerce & company profile", context: "HelloBisnis" },
  { name: "Education Platform", context: "Gracia Teknologi" },
  { name: "Profxy Music Center, Klinik Bekam", context: "Freelance" },
];

export const skillGroups = [
  { name: "Agile & Delivery", items: ["Scrum", "Agile", "Waterfall", "Business Analysis"] },
  { name: "AI", items: ["AI for Business", "Retrieval-Augmented Generation (RAG)", "Vibe Coding"] },
  { name: "Frontend", items: ["Angular 2+", "WordPress", "Moodle"] },
  { name: "Backend", items: ["Node.js", "PHP (CodeIgniter, Laravel)", "Java SE", "Android"] },
  { name: "Database", items: ["MySQL", "MongoDB", "Oracle"] },
  { name: "Infrastruktur", items: ["Networking", "Docker", "AWS"] },
  { name: "Bahasa", items: ["Indonesia", "Inggris", "Sunda"] },
];

export const education = [
  { degree: "Sarjana Teknik Informatika", school: "Universitas Pasundan, Bandung", period: "2012 – 2017", note: "Kelompok Keilmuan Teknologi Informasi (Networking)." },
  { degree: "SMK Rekayasa Perangkat Lunak", school: "SMKN 1 Majalengka", period: "2009 – 2012", note: "Praktek kerja industri sebagai cameraman di Radar Cirebon Televisi (Apr – Jul 2011)." },
];

export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
  href?: string;
};

export const certifications: Certification[] = [
  { name: "Sertifikasi Manajemen Risiko" },
  { name: "AI-Powered Apps Fundamental", issuer: "WPU Course", date: "30 Juni 2026", href: "https://learn.wpucourse.id/certificate/R6WRDQX9" },
  { name: "Junior Programmer — Uji Kompetensi", issuer: "Niftrasoft", date: "2012" },
  { name: "Sertifikasi LSP Telematika", date: "2012" },
  { name: "Pelatihan ESQ" },
];
