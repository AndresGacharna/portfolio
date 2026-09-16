"use client";

import GlitchText from "./GlitchText";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import styles from "./Projects.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectItem {
  /** Identificador estable: se usa como key de React y como fallback del título. */
  name: string;
  /** Opcional: solo para nombres que cambian de idioma. Los propios no la llevan. */
  nameKey?: string;
  descKey: string;
  tech: string[];
  gradient: string;
  image?: string;
  demo?: string;
  code?: string;
  linkedin?: string;
  extraLinks?: { label: string; url: string }[];
  imageFit?: "cover" | "contain";
  imageBg?: string;
  imageAspect?: string;
  badgeKey?: string;
}

const projects: ProjectItem[] = [
  {
    name: "Home Data Center (Homelab / Proxmox VE)",
    descKey: "projects.desc0",
    tech: ["Proxmox", "Linux", "Docker", "Tailscale", "Nginx Proxy Manager"],
    gradient: "linear-gradient(135deg, #ff134c 0%, #ff6b6b 100%)",
    image: "/images/homelab-project.jpg",
    imageAspect: "1600 / 679",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7452028850974113793/",
    code: "#",
  },
  {
    name: "Tienda — Microservicios con NestJS",
    nameKey: "projects.name6",
    descKey: "projects.desc6",
    tech: ["NestJS", "NATS", "Prisma", "Docker", "Kubernetes", "Stripe"],
    gradient: "linear-gradient(135deg, #e0234e 0%, #326ce5 100%)",
    image: "/images/microservices-nest-project.jpg",
    imageAspect: "1600 / 679",
    code: "https://github.com/Nest-Microservices-AndresGach",
  },
  {
    name: "AnyList — API GraphQL con NestJS",
    nameKey: "projects.name7",
    descKey: "projects.desc7",
    tech: ["NestJS", "GraphQL", "Apollo", "TypeORM", "PostgreSQL", "JWT"],
    gradient: "linear-gradient(135deg, #e535ab 0%, #e0234e 100%)",
    image: "/images/graphql-nest-project.jpg",
    imageAspect: "1600 / 679",
    code: "https://github.com/AndresGacharna/Nest-graphql",
  },
  {
    name: "Utadelicias",
    descKey: "projects.desc4",
    tech: ["Kotlin", "Firebase", "Android Studio", "Figma"],
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ff134c 100%)",
    image: "/images/utadelicias-app-larga.jpg",
    imageAspect: "1584 / 672",
    badgeKey: "projects.badgeUtadeo",
    demo: "https://youtu.be/xmISuETa1Dg",
    code: "https://github.com/AndresGacharna/utadeliciasApp",
    linkedin:
      "https://www.linkedin.com/posts/andr%C3%A9s-gacharn%C3%A1-a455a5285_agradecido-con-mis-compa%C3%B1eros-por-hacer-parte-activity-7263284403563384833-R5oU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVSHZUBMIzgp6HgEvebGVf-4Owv5mXnlJY",
    extraLinks: [
      {
        label: "Figma (Cliente)",
        url: "https://www.figma.com/proto/Gf9cXrq0eoOZEKgV28fllm/Dise%C3%B1o-version-Clientes?node-id=601-19&p=f&t=weYRSocE17HVWAi5-0&scaling=min-zoom&content-scaling=fixed&page-id=1669%3A162202&starting-point-node-id=2694%3A30&show-proto-sidebar=1",
      },
      {
        label: "Figma (Dueños Local)",
        url: "https://www.figma.com/proto/f8E1qu1ZHMOqeNpa6ZvkkM/Dise%C3%B1o-version-due%C3%B1os-local?node-id=2-2&starting-point-node-id=2%3A19",
      },
    ],
  },
  {
    name: "ResNet Fine-tuning",
    descKey: "projects.desc5",
    tech: ["Python", "ResNet", "Machine Learning"],
    gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    image: "/images/resnet-fine-tunning.jpg",
    imageAspect: "1584 / 672",
    badgeKey: "projects.badgeUtadeo",
    linkedin:
      "https://www.linkedin.com/posts/olmerg_ia-2024i-utadeo-ugcPost-7197207389601710080-av-x/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVSHZUBMIzgp6HgEvebGVf-4Owv5mXnlJY",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t("projects.label")}</span>
            <GlitchText as="h2" className="section-title">
              {t("projects.title")}
            </GlitchText>
          </div>
        </ScrollReveal>

        <div className={styles.projectGrid}>
          {projects.map((project, i) => {
            const overlayHref = [
              project.demo,
              project.linkedin,
              project.code,
            ].find((url) => url && url !== "#");

            const title = project.nameKey
              ? t(project.nameKey)
              : project.name;

            return (
              <ScrollReveal key={project.name} delay={i * 0.1}>
                <div className={styles.projectCard}>
                  <div
                    className={styles.projectImage}
                    style={
                      project.imageAspect
                        ? { height: "auto", aspectRatio: project.imageAspect }
                        : undefined
                    }
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={title}
                        fill
                        style={{
                          objectFit: project.imageFit || "contain",
                          backgroundColor: project.imageBg || "transparent",
                        }}
                        className={styles.projectImageContent}
                      />
                    ) : (
                      <div
                        className={styles.projectGradient}
                        style={{ background: project.gradient }}
                      />
                    )}
                    <div className={styles.projectOverlay}>
                      {overlayHref && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={overlayHref}
                          className={styles.overlayLink}
                        >
                          {t("projects.btnDemo")}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={styles.projectContent}>
                    {project.badgeKey && (
                      <span className={styles.projectBadge}>
                        {t(project.badgeKey)}
                      </span>
                    )}
                    <h3 className={styles.projectName}>{title}</h3>
                    <p className={styles.projectDesc}>{t(project.descKey)}</p>

                    <div className={styles.projectTags}>
                      {project.tech.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.projectLinks}>
                      {project.demo && project.demo !== "#" && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.demo}
                          className={styles.projectLink}
                        >
                          {project.demo.includes("figma.com")
                            ? "Figma"
                            : project.demo.includes("youtu")
                              ? "YouTube"
                              : t("projects.btnDemo")}
                        </a>
                      )}
                      {project.extraLinks &&
                        project.extraLinks.map((link) => (
                          <a
                            key={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                            className={styles.projectLink}
                          >
                            {link.label}
                          </a>
                        ))}
                      {project.code && project.code !== "#" && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.code}
                          className={styles.projectLink}
                        >
                          GitHub
                        </a>
                      )}
                      {project.linkedin && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.linkedin}
                          className={styles.projectLink}
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
