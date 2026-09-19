"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { contact } from "@/lib/contact";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section id="contact" className={`${styles.section} corrugated`}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <p className={styles.text}>{t("contact.text")}</p>

        <a className={styles.email} href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <div className={styles.handles}>
          <a className="handle handle--light handle--big" href={`mailto:${contact.email}`}>
            <MailIcon />
            {t("hero.email")}
          </a>
          <button type="button" className="handle handle--big" onClick={copyEmail}>
            {copied ? t("contact.copied") : t("contact.copy")}
          </button>
          <a
            className="handle handle--big"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
            <ArrowUpRight className="handle-arrow" />
          </a>
          <a
            className="handle handle--big"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub
            <ArrowUpRight className="handle-arrow" />
          </a>
        </div>
        <p className={styles.status} role="status" aria-live="polite">
          {copied ? t("contact.copied") : ""}
        </p>
      </div>
    </section>
  );
}
