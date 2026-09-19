"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useLanguage, type Language } from "@/context/LanguageContext";

const navLinks = ["projects", "experience", "stack", "about", "contact"];
const languages: Language[] = ["en", "es", "pt"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={styles.bar}>
      <nav className={`wrap ${styles.inner}`} aria-label="Main">
        <a href="#top" className={styles.mark} onClick={() => setMenuOpen(false)}>
          <span className={styles.markCode}>AGCU</span>
          <span className={styles.markName}>Andrés Gacharná</span>
        </a>

        <ul
          id="site-menu"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        >
          {navLinks.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className={styles.link}
                aria-current={activeSection === key ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.lang} role="group" aria-label={t("nav.language")}>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              className={styles.langButton}
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? t("nav.close") : t("nav.menu")}
        </button>
      </nav>
    </header>
  );
}
