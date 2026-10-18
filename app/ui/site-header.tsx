"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";

export type NavLink = { label: string; href: string; current?: boolean };

export function SiteHeader({ contactHref, links }: { contactHref: string; links: NavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenuOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1200px)");
    function onResize(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={header}>
      <a className="skip-link" href="#konten">Lewati ke konten utama</a>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {links.map((link) => (
            <Link aria-current={link.current ? "page" : undefined} href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
        <a className="button button-primary header-contact" href={contactHref}>Hubungi Saya</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} ref={menuButton}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="m5 5 14 14M5 19 19 5" /> : <path d="M3 5h18M3 12h18M3 19h18" />}
          </svg>
        </button>
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Navigasi seluler" hidden={!menuOpen}>
          {links.map((link) => (
            <Link aria-current={link.current ? "page" : undefined} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <a href={contactHref} onClick={() => setMenuOpen(false)}>Hubungi Saya</a>
        </nav>
      </div>
    </header>
  );
}
