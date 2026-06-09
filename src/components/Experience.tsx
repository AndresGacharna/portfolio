"use client";

import GlitchText from "./GlitchText";
import ScrollReveal from "./ScrollReveal";
import styles from "./Experience.module.css";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
  {
    id: "geekcore",
    dateKey: "exp.date0",
    company: "Geekcore S.A.S.",
    roleKey: "exp.role0",
    descKey: "exp.desc0",
  },
  {
    id: "ujtl",
    dateKey: "exp.date1",
    company: "Universidad Jorge Tadeo Lozano",
    roleKey: "exp.role1",
    descKey: "exp.desc1",
  },
  {
    id: "fortinet",
    dateKey: "exp.date10",
    company: "Fortinet",
    roleKey: "exp.role10",
    descKey: "exp.desc10",
  },
  {
    id: "scrum",
    dateKey: "exp.date9",
    company: "Upskill with SCRUMStudy",
    roleKey: "exp.role9",
    descKey: "exp.desc9",
  },
  {
    id: "udemy-openai",
    dateKey: "exp.date8",
    company: "Udemy",
    roleKey: "exp.role8",
    descKey: "exp.desc8",
  },
  {
    id: "udemy-graphql",
    dateKey: "exp.date7",
    company: "Udemy",
    roleKey: "exp.role7",
    descKey: "exp.desc7",
  },
  {
    id: "udemy-microservices",
    dateKey: "exp.date6",
    company: "Udemy",
    roleKey: "exp.role6",
    descKey: "exp.desc6",
  },
  {
    id: "udemy-nest",
    dateKey: "exp.date5",
    company: "Udemy",
    roleKey: "exp.role5",
    descKey: "exp.desc5",
  },
  {
    id: "uniandes",
    dateKey: "exp.date2",
    company: "Universidad de los Andes (Colombia)",
    roleKey: "exp.role2",
    descKey: "exp.desc2",
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className={styles.experience} id="experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t("exp.label")}</span>
            <GlitchText as="h2" className="section-title">
              {t("exp.title")}
            </GlitchText>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.id}
              delay={i * 0.12}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`${styles.timelineItem} ${
                  i % 2 === 0 ? styles.timelineLeft : styles.timelineRight
                }`}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <span className={styles.timelineDate}>{t(exp.dateKey)}</span>
                  <h3 className={styles.timelineCompany}>{exp.company}</h3>
                  <p className={styles.timelineRole}>{t(exp.roleKey)}</p>
                  <p className={styles.timelineDesc}>{t(exp.descKey)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
