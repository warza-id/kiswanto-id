import Image from "next/image";
import Link from "next/link";
import { profile } from "./data/cv";
import { Icon } from "./ui/outline-icon";
import { SiteFooter } from "./ui/site-footer";
import { SiteHeader } from "./ui/site-header";

const contactHref = `mailto:${profile.email}`;

const navLinks = [
  { label: "Beranda", href: "#beranda", current: true },
  { label: "Tentang", href: "#tentang" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "CV", href: "/kiki" },
];

const experiences = [
  { icon: "briefcase", role: "Senior Scrum Master", organization: "SMBC Indonesia · 2022 – sekarang", description: "Mendampingi tim Scrum menyampaikan produk digital perbankan secara terukur." },
  { icon: "code", role: "Technical Lead", organization: "SMBC Indonesia (d/h BTPN) · 2019 – 2022", description: "Memimpin teknis tim FES (Frontend System)." },
  { icon: "database", role: "Full Stack Developer", organization: "BTPN · 2017 – 2019", description: "Pengembangan BTPN Alert dan FES." },
] as const;

const technologies = [
  { name: "Angular", file: "angular.svg", className: "technology-angular" },
  { name: "Node.js", file: "nodejs.svg", className: "technology-node" },
  { name: "PHP", file: "php.svg", className: "technology-php" },
  { name: "MySQL", file: "mysql.svg", className: "technology-mysql" },
  { name: "Docker", file: "docker.svg", className: "technology-docker" },
  { name: "AWS", file: "aws.svg", className: "technology-aws" },
];

export default function Home() {
  return (
    <>
      <div className="hero-shell" id="beranda">
        <SiteHeader contactHref={contactHref} links={navLinks} />
        <main id="konten">
          <section className="hero" id="tentang" aria-labelledby="hero-title">
            <div className="container hero-inner">
              <div className="hero-copy">
                <p className="eyebrow">Kiki Kiswanto · Senior Scrum Master · AI for Business</p>
                <h1 id="hero-title">
                  <span className="title-line">Mengubah kebutuhan bisnis</span>{" "}
                  <span className="title-line">menjadi solusi digital yang</span>{" "}
                  <span className="title-line hero-accent">tepat guna.</span>
                </h1>
                <p className="hero-description">
                  10+ tahun software development web &amp; mobile. Kini Senior Scrum Master di Bank SMBC Indonesia dan praktisi AI untuk bisnis.
                </p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/kiki">Lihat CV</Link>
                  <a className="button button-outline" href={contactHref}>Hubungi Saya <Icon name="arrow" /></a>
                </div>
              </div>
              <div className="hero-portrait">
                <Image
                  src="/images/kiki-kiswanto.webp"
                  alt="Kiki Kiswanto tersenyum, mengenakan kacamata dan kaos hitam polos."
                  fill
                  preload
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 800px"
                  className="portrait-image"
                />
              </div>
              <dl className="hero-stats" aria-label="Ringkasan pengalaman">
                <div className="stat">
                  <Icon name="briefcase" />
                  <div><dt>Tahun Pengalaman</dt><dd>10+</dd></div>
                </div>
                <div className="stat">
                  <Icon name="document" />
                  <div><dt>Proyek Digital</dt><dd>20+</dd></div>
                </div>
              </dl>
            </div>
          </section>
          <div className="profile-content">
            <div className="container">
              <section className="experience-section" id="pengalaman" aria-labelledby="experience-title">
                <h2 id="experience-title">Highlight pengalaman</h2>
                <ul className="experience-list">
                  {experiences.map((experience) => (
                    <li className="experience" key={experience.organization}>
                      <Icon name={experience.icon} />
                      <div>
                        <h3>{experience.role}</h3>
                        <p className="organization">{experience.organization}</p>
                        <p className="experience-description">{experience.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link className="text-link" href="/kiki">Lihat riwayat lengkap <Icon name="arrow" /></Link>
              </section>
              <section className="technology-section" aria-labelledby="tech-title">
                <h2 id="tech-title">Teknologi pilihan</h2>
                <ul className="technology-list">
                  {technologies.map((technology) => (
                    <li key={technology.name}>
                      <div className="technology-image">
                        <Image src={`/technologies/${technology.file}`} alt="" width={112} height={64} className={technology.className} />
                      </div>
                      <span>{technology.name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
      <SiteFooter contactHref={contactHref} />
    </>
  );
}
