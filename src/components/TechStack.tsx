"use client";

import GlitchText from "./GlitchText";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import styles from "./TechStack.module.css";
import { CSSProperties } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface TechItem {
  icon: string;
  image?: string;
  name: string;
  width?: number;
  height?: number;
  extraStyle?: CSSProperties;
}

interface TechCategory {
  key: string;
  name: string;
  techs: TechItem[];
}

const categories: TechCategory[] = [
  {
    key: "tech.cat.frameworks",
    name: "Frameworks - Libraries",
    techs: [
      { icon: "🦁", image: "/images/Logos/NestJS.svg", name: "NestJS" },
      {
        icon: "💜",
        image: "/images/Logos/NET_Core_Logo.svg.png",
        name: ".NET Core",
      },
      {
        icon: "💚",
        image: "/images/Logos/nodejs_original_logo_icon_146411.webp",
        name: "Node.js",
      },
      { icon: "⚛️", image: "/images/Logos/React-icon.svg.png", name: "React" },
    ],
  },
  {
    key: "tech.cat.devops",
    name: "DevOps & Tools",
    techs: [
      {
        icon: "🐧",
        image: "/images/Logos/Bash_Logo_Colored.svg.png",
        name: "Linux / Bash",
      },
      { icon: "🐳", image: "/images/Logos/docker.svg", name: "Docker" },
      {
        icon: "☸️",
        image: "/images/Logos/Kubernetes_logo_without_workmark.svg.png",
        name: "Kubernetes",
      },
      { icon: "🖥️", image: "/images/Logos/proxmox.svg", name: "Proxmox VE" },
      {
        icon: "☁️",
        image: "/images/Logos/Microsoft.VisualStudio.Services.Icons.png",
        name: "CI / CD",
      },
      { icon: "📦", image: "/images/Logos/git_logo.png", name: "Git" },
    ],
  },
  {
    key: "tech.cat.languages",
    name: "Languages",
    techs: [
      {
        icon: "🔷",
        image: "/images/Logos/Typescript_logo_2020.svg",
        name: "TypeScript",
      },
      {
        icon: "💜",
        image: "/images/Logos/Csharp_Logo.png",
        name: "C#",
        width: 36,
        height: 36,
      },
      {
        icon: "🐍",
        image: "/images/Logos/Python-logo-notext.svg.png",
        name: "Python",
      },
    ],
  },
  {
    key: "tech.cat.databases",
    name: "Databases",
    techs: [
      {
        icon: "🐘",
        image: "/images/Logos/Postgresql_elephant.svg.png",
        name: "PostgreSQL",
      },
      {
        icon: "🍃",
        image: "/images/Logos/mongodb.png",
        name: "MongoDB",
        width: 80,
        height: 34,
      },
      {
        icon: "▲",
        image: "/images/Logos/prisma-orm-removebg-preview.png",
        name: "Prisma ORM",
      },
      { icon: "🛠️", image: "/images/Logos/typeorm.png", name: "TypeORM" },
    ],
  },
  {
    key: "tech.cat.architecture",
    name: "Architecture & Concepts",
    techs: [
      { icon: "🧩", name: "Microservices" },
      {
        icon: "🕸️",
        image: "/images/Logos/GraphQL_Logo.svg.png",
        name: "GraphQL",
      },
      { icon: "🔌", name: "REST APIs" },
      { icon: "⚡", name: "WebSockets" },
      { icon: "🤖", name: "AI Integrations" },
      { icon: "🧱", name: "Layered Architecture" },
    ],
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className={styles.techStack} id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t("tech.label")}</span>
            <GlitchText as="h2" className="section-title">
              {t("tech.title")}
            </GlitchText>
          </div>
        </ScrollReveal>

        <div className={styles.categories}>
          {categories.map((category, catIndex) => (
            <ScrollReveal key={category.key} delay={catIndex * 0.08}>
              <div className={styles.category}>
                <div className={styles.categoryHeader}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                  <span className={styles.categoryName}>{t(category.key)}</span>
                </div>
                <div className={styles.categoryBody}>
                  <div className={styles.techGrid}>
                    {category.techs.map((tech, techIndex) => (
                      <ScrollReveal
                        key={tech.name}
                        delay={0.04 * techIndex + catIndex * 0.08}
                        distance={15}
                      >
                        <div className={styles.techCard}>
                          {tech.image ? (
                            <div className={styles.techImageWrapper}>
                              <Image
                                src={tech.image}
                                alt={tech.name}
                                width={tech.width || 28}
                                height={tech.height || 28}
                                style={{
                                  objectFit: "contain",
                                  maxHeight: tech.height
                                    ? `${tech.height}px`
                                    : "1.6rem",
                                  width: "auto",
                                  ...tech.extraStyle,
                                }}
                              />
                            </div>
                          ) : (
                            <span className={styles.techIcon}>{tech.icon}</span>
                          )}
                          <span className={styles.techName}>
                            {tech.name === "Layered Architecture"
                              ? t("tech.layered")
                              : tech.name}
                          </span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
