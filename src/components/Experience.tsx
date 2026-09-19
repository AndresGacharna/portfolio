"use client";

import styles from "./Experience.module.css";
import { useLanguage } from "@/context/LanguageContext";

const entries = [
  {
    id: "geekcore",
    company: "Geekcore S.A.S.",
    place: "Bogotá",
    current: true,
    bullets: 4,
  },
  {
    id: "utadeo",
    company: "Universidad Jorge Tadeo Lozano",
    place: "Bogotá",
    current: false,
    bullets: 1,
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.section}>
      <div className="wrap">
        <header className={styles.header}>
          <h2 className="yard-heading">{t("exp.title")}</h2>
          <p className={styles.intro}>{t("exp.intro")}</p>
        </header>

        <div className={styles.sheet}>
          <p className={styles.formHead} aria-hidden="true">
            <span>{t("exp.colPeriod")}</span>
            <span>{t("exp.colCompany")}</span>
            <span>{t("exp.colWork")}</span>
          </p>
          <ol>
            {entries.map((entry) => (
              <li key={entry.id} className={styles.entry}>
                <p className={styles.period}>
                  {t(`exp.${entry.id}.period`)}
                  {entry.current && (
                    <span className={styles.live} aria-hidden="true" />
                  )}
                </p>
                <div className={styles.who}>
                  <h3 className={styles.company}>{entry.company}</h3>
                  <p className={styles.role}>{t(`exp.${entry.id}.role`)}</p>
                  <p className={styles.place}>{entry.place}</p>
                </div>
                <ul className={styles.bullets}>
                  {Array.from({ length: entry.bullets }, (_, i) => (
                    <li key={i}>{t(`exp.${entry.id}.b${i}`)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
