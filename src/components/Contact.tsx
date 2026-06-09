"use client";

import GlitchText from "./GlitchText";
import ScrollReveal from "./ScrollReveal";
import styles from "./Contact.module.css";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  { icon: "⌘", label: "GitHub", href: "https://github.com/AndresGacharna" },
  {
    icon: "◆",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andr%C3%A9s-gacharn%C3%A1-a455a5285/",
  },
  { icon: "✉", label: "Email", href: "mailto:andrestibochero@hotmail.com" },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t("contact.label")}</span>
            <GlitchText as="h2" className="section-title">
              {t("contact.title")}
            </GlitchText>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className={styles.contactCard}>
            <h3 className={styles.contactHeading}>{t("contact.cardTitle")}</h3>
            <p className={styles.contactText}>{t("contact.cardText")}</p>

            <div className={styles.socialLinks}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
