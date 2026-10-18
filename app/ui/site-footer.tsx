import { Brand } from "./brand";
import { Icon } from "./outline-icon";

export function SiteFooter({ contactHref }: { contactHref: string }) {
  return (
    <footer className="site-footer" id="kontak" aria-label="Kontak">
      <div className="container">
        <div className="footer-main">
          <Brand />
          <h2>Mari terhubung.</h2>
          <a className="button button-primary footer-contact" href={contactHref}>Hubungi Saya <Icon name="arrow" /></a>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Kiki Kiswanto.</p></div>
      </div>
    </footer>
  );
}
