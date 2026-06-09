"use client";

import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageContext";

const CURRENT_YEAR = new Date().getFullYear().toString();

const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andr%C3%A9s-gacharn%C3%A1-a455a5285/" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>&lt;A/&gt;</span>
            <p className={styles.footerTagline}>
              {t("footer.tagline")}
            </p>
          </div>

          <div className={styles.footerNav}>
            <span className={styles.footerNavTitle}>{t("footer.nav")}</span>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.footerLink}>
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          <div className={styles.footerSocials}>
            <span className={styles.footerNavTitle}>{t("footer.connect")}</span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.footerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.copyright}>
            {t("footer.copyright").replace("{year}", CURRENT_YEAR)}
          </span>
          <span className={styles.madeWith}>{t("footer.madeWith")}</span>
        </div>
      </div>
    </footer>
  );
}
