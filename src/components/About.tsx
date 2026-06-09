"use client";

import { useEffect, useRef, useState } from "react";
import GlitchText from "./GlitchText";
import ScrollReveal from "./ScrollReveal";
import styles from "./About.module.css";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { value: 18, suffix: "m+", label: "De Experiencia" },
  { value: 8, suffix: "", label: "Certificaciones" },
  { value: 10, suffix: "+", label: "Tecnologías" },
  { value: 999, suffix: "", label: "Tazas de Café", display: "∞" },
];

function AnimatedCounter({
  target,
  suffix,
  display,
}: {
  target: number;
  suffix: string;
  display?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          if (display) {
            setCount(target);
            return;
          }
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          intervalId = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(intervalId);
            }
            setCount(current);
          }, 30);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, [target, display]);

  return (
    <span ref={ref} className={styles.statNumber}>
      {display ? display : `${count}${suffix}`}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t("about.label")}</span>
            <GlitchText as="h2" className="section-title">
              {t("about.title")}
            </GlitchText>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.15}>
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotYellow}`} />
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span className={styles.terminalTitle}>about.sh</span>
              </div>
              <div className={styles.terminalBody}>
                <p>
                  <span className={styles.command}>{">"} whoami</span>
                </p>
                <p className={styles.output}>{t("about.whoami")}</p>
                <br />
                <p>
                  <span className={styles.command}>
                    {">"} cat interests.txt
                  </span>
                </p>
                <p className={styles.output}>{t("about.interests")}</p>
                {[
                  "Homelab & Proxmox",
                  "Microservices",
                  "GraphQL",
                  "Linux/Bash",
                  "DevOps",
                ].map((interest, i) => (
                  <p key={interest} className={styles.output}>
                    {"  "}
                    <span className={styles.string}>
                      &quot;{interest}&quot;
                    </span>
                    {i < 4 ? "," : ""}
                  </p>
                ))}
                <p className={styles.output}>{"];"}</p>
                <br />
                <p>
                  <span className={styles.command}>
                    {">"} cat certifications.txt
                  </span>
                </p>
                <p className={styles.output}>
                  {t("about.certifications")
                    .split("\n")
                    .map((cert: string, idx: number) => (
                      <span key={idx}>
                        {cert}
                        <br />
                      </span>
                    ))}
                </p>
                <br />
                <p>
                  <span className={styles.command}>{">"} echo $STATUS</span>
                </p>
                <p className={styles.output}>
                  <span className={styles.statusDot} /> {t("about.status")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 * (i + 1)}>
                <div className={styles.statCard}>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    display={stat.display}
                  />
                  <span className={styles.statLabel}>
                    {t(`about.stat${i}`)}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
