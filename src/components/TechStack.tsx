"use client";

import type { CSSProperties } from "react";
import styles from "./TechStack.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface Bay {
  key: string;
  paint: string;
  onPaint: "dark" | "light";
  primary: string[];
  secondary: string[];
}

const bays: Bay[] = [
  {
    key: "core",
    paint: "var(--paint-crimson)",
    onPaint: "light",
    primary: ["TypeScript", "C#", "NestJS", "ASP.NET Core", "Node.js"],
    secondary: ["Python", "React + Vite"],
  },
  {
    key: "arch",
    paint: "var(--paint-cobalt)",
    onPaint: "light",
    primary: ["Microservices", "Clean Architecture", "REST", "GraphQL", "SOLID"],
    secondary: ["Design patterns", "OpenAPI / Swagger"],
  },
  {
    key: "data",
    paint: "var(--paint-green)",
    onPaint: "light",
    primary: ["PostgreSQL", "SQL Server"],
    secondary: ["Entity Framework", "TypeORM", "Prisma", "MongoDB", "Redis", "Firebase"],
  },
  {
    key: "infra",
    paint: "var(--paint-orange)",
    onPaint: "dark",
    primary: ["Docker", "Linux / Bash", "CI/CD", "Proxmox VE"],
    secondary: ["Nginx", "Cloudflare Tunnels", "Kubernetes", "NATS", "GCP"],
  },
  {
    key: "ai",
    paint: "var(--paint-ochre)",
    onPaint: "dark",
    primary: ["Claude Code", "Codex", "herdr", "LLM API integration"],
    secondary: ["Gemini · Antigravity", "OpenCode"],
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className={styles.section}>
      <div className="wrap">
        <header className={styles.header}>
          <h2 className="yard-heading">{t("stack.title")}</h2>
          <div className={styles.headerSide}>
            <p className={styles.intro}>{t("stack.intro")}</p>
            <ul className={styles.legend}>
              <li>
                <span className={`${styles.swatch} ${styles.swatchSolid}`} aria-hidden="true" />
                {t("stack.primary")}
              </li>
              <li>
                <span className={`${styles.swatch} ${styles.swatchOutline}`} aria-hidden="true" />
                {t("stack.secondary")}
              </li>
            </ul>
          </div>
        </header>

        <div className={styles.plan}>
          {bays.map((bay) => (
            <div
              key={bay.key}
              className={styles.bay}
              data-on-paint={bay.onPaint}
              style={{ "--paint": bay.paint } as CSSProperties}
            >
              <h3 className={styles.bayName}>{t(`stack.cat.${bay.key}`)}</h3>
              <ul className={styles.slots}>
                {bay.primary.map((item) => (
                  <li key={item} className={`${styles.box} ${styles.solid} corrugated`}>
                    {item}
                  </li>
                ))}
                {bay.secondary.map((item) => (
                  <li key={item} className={`${styles.box} ${styles.outline}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
