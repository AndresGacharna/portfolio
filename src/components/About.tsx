"use client";

import styles from "./About.module.css";
import { useLanguage } from "@/context/LanguageContext";

const certifications = [
  {
    name: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    date: "11/2025",
    expiresKey: "about.expires",
  },
  { name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", date: "11/2025" },
  {
    name: "DevOps Foundations: Core Principles and Practices",
    issuer: "Microsoft",
    date: "07/2025",
  },
  {
    name: "Creación de empresas",
    issuer: "Universidad de los Andes",
    date: "01/2024",
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.story}>
          <h2 className="yard-heading">{t("about.title")}</h2>
          <p className={styles.lead}>{t("about.p0")}</p>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>

        <aside className={styles.papers}>
          <h3 className={styles.papersTitle}>{t("about.languages")}</h3>
          <ul className={styles.list}>
            <li>{t("about.spanish")}</li>
            <li>{t("about.english")}</li>
          </ul>

          <h3 className={styles.papersTitle}>{t("about.certs")}</h3>
          <ul className={styles.list}>
            {certifications.map((cert) => (
              <li key={cert.name} className={styles.cert}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certMeta}>
                  {cert.issuer} · {cert.date}
                  {cert.expiresKey && ` · ${t(cert.expiresKey)}`}
                </span>
              </li>
            ))}
          </ul>

          <h3 className={styles.papersTitle}>{t("about.courses")}</h3>
          <p className={styles.courses}>{t("about.coursesList")}</p>
        </aside>
      </div>
    </section>
  );
}
