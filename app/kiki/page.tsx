import type { Metadata } from "next";
import { certifications, education, experiences, portfolio, profile, projects, skillGroups } from "../data/cv";
import { Icon } from "../ui/outline-icon";
import { SiteFooter } from "../ui/site-footer";
import { SiteHeader } from "../ui/site-header";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "CV Kiki Kiswanto",
  description: `Curriculum vitae ${profile.name} — riwayat pekerjaan, proyek, keahlian, dan pendidikan.`,
  alternates: { canonical: "/kiki" },
};

const contactHref = `mailto:${profile.email}`;

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "CV", href: "/kiki", current: true },
];

export default function CvPage() {
  return (
    <>
      <div className="hero-shell cv-hero-shell">
        <SiteHeader contactHref={contactHref} links={navLinks} />
        <section className="cv-hero" aria-labelledby="cv-title">
          <div className="container">
            <p className="eyebrow">Curriculum Vitae</p>
            <h1 id="cv-title">{profile.name}</h1>
            <p className="cv-role">{profile.title}</p>
            <p className="hero-description">{profile.summary}</p>
            <ul className="cv-contact" aria-label="Kontak">
              <li><a href={contactHref}>{profile.email}</a></li>
              <li><a href={`https://${profile.website}`}>{profile.website}</a></li>
              <li><a href={profile.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
              <li><span>{profile.location}</span></li>
            </ul>
            <div className="hero-actions cv-actions">
              <PrintButton />
              <a className="button button-outline" href={profile.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn <Icon name="arrow" /></a>
            </div>
          </div>
        </section>
      </div>
      <main className="cv-page" id="konten">
        <div className="container cv-grid">
          <div className="cv-main">
            <section className="cv-section" id="pengalaman" aria-labelledby="cv-experience">
              <h2 id="cv-experience">Pengalaman kerja</h2>
              <ol className="cv-timeline">
                {experiences.map((item) => (
                  <li className="cv-entry" key={item.organization}>
                    <div className="cv-entry-head">
                      <h3>{item.organization}</h3>
                      <p className="cv-period">{item.period}</p>
                    </div>
                    {(item.formerly || item.location) && (
                      <p className="cv-meta">
                        {[item.formerly && `d/h ${item.formerly}`, item.location].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {item.summary && <p className="cv-text">{item.summary}</p>}
                    <ul className="cv-positions">
                      {item.positions.map((position) => (
                        <li key={position.role + position.period}>
                          <div className="cv-entry-head">
                            <p className="cv-org">{position.role}</p>
                            {item.positions.length > 1 && <p className="cv-period">{position.period}</p>}
                          </div>
                          {position.points.length > 0 && (
                            <ul className="cv-points">
                              {position.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>
            <section className="cv-section" aria-labelledby="cv-projects">
              <h2 id="cv-projects">Proyek &amp; portofolio</h2>
              <ul className="cv-portfolio" aria-label="Portofolio">
                {portfolio.map((site) => (
                  <li key={site.href}>
                    <a href={site.href} rel="noopener noreferrer" target="_blank">
                      <strong>{site.name} <Icon name="arrow" /></strong>
                      <span>{site.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="cv-projects">
                {projects.map((project) => (
                  <li key={project.name}>
                    <strong>{project.name}</strong>
                    <span>{project.context}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="cv-side" aria-label="Keahlian, pendidikan, dan sertifikasi">
            <section className="cv-section" aria-labelledby="cv-skills">
              <h2 id="cv-skills">Keahlian</h2>
              <dl className="cv-skills">
                {skillGroups.map((group) => (
                  <div key={group.name}>
                    <dt>{group.name}</dt>
                    <dd>
                      <ul className="cv-tags">
                        {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="cv-section" id="pendidikan" aria-labelledby="cv-education">
              <h2 id="cv-education">Pendidikan</h2>
              <ul className="cv-list">
                {education.map((item) => (
                  <li key={item.school}>
                    <Icon name="graduation" />
                    <div>
                      <h3>{item.degree}</h3>
                      <p className="cv-org">{item.school}</p>
                      <p className="cv-period">{item.period}</p>
                      <p className="cv-text">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="cv-section" aria-labelledby="cv-certs">
              <h2 id="cv-certs">Sertifikasi &amp; pelatihan</h2>
              <ul className="cv-list">
                {certifications.map((item) => (
                  <li key={item.name}>
                    <Icon name="award" />
                    <div>
                      <h3>{item.name}</h3>
                      {(item.issuer || item.date) && (
                        <p className="cv-period">{[item.issuer, item.date].filter(Boolean).join(" · ")}</p>
                      )}
                      {item.href && (
                        <a className="cv-cert-link" href={item.href} rel="noopener noreferrer" target="_blank">Lihat sertifikat <Icon name="arrow" /></a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>
      <SiteFooter contactHref={contactHref} />
    </>
  );
}
