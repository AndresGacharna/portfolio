"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Projects.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { containerId } from "@/lib/iso6346";
import {
  ArrowUpRight,
  FigmaIcon,
  GitHubIcon,
  LinkedInIcon,
  PlayIcon,
} from "./Icons";

type LinkKind = "repo" | "post" | "video" | "figma";

interface ProjectLink {
  kind: LinkKind;
  labelKey: string;
  href: string;
}

interface Project {
  /** Translation base: projects.<slug>.name / .desc */
  slug: string;
  sizeType: "22G1" | "45G1";
  paint: string;
  /** Ink that reads on the paint */
  onPaint: "dark" | "light";
  image?: string;
  /** Big stencil marking for containers without a picture */
  marking?: string;
  badgeKey?: string;
  noteKey?: string;
  contents: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    slug: "store",
    sizeType: "45G1",
    paint: "var(--paint-nest-red)",
    onPaint: "light",
    image: "/images/microservices-nest-project.jpg",
    contents: ["NestJS", "NATS", "Prisma", "Docker", "Kubernetes", "Stripe"],
    links: [
      {
        kind: "repo",
        labelKey: "projects.repos",
        href: "https://github.com/Nest-Microservices-AndresGach",
      },
    ],
  },
  {
    slug: "fraud",
    sizeType: "22G1",
    paint: "var(--paint-cert-gold)",
    onPaint: "dark",
    image: "/images/risktech.jpg",
    badgeKey: "projects.badgeWinner",
    contents: ["NestJS", "Python", "PostgreSQL", "CatBoost", "BERT", "LLM APIs"],
    links: [
      {
        kind: "post",
        labelKey: "projects.post",
        href: "https://lnkd.in/p/eSgqX5cE",
      },
    ],
  },
  {
    slug: "homelab",
    sizeType: "45G1",
    paint: "var(--paint-proxmox-teal)",
    onPaint: "light",
    image: "/images/homelab-project.jpg",
    badgeKey: "projects.badgeLive",
    noteKey: "projects.private",
    contents: [
      "Proxmox VE",
      "Debian LXC",
      "Docker",
      "Cloudflare Tunnels",
      "Nginx Proxy Manager",
      "Tailscale",
    ],
    links: [
      {
        kind: "post",
        labelKey: "projects.post",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7452028850974113793/",
      },
    ],
  },
  {
    slug: "anylist",
    sizeType: "22G1",
    paint: "var(--paint-graphql-magenta)",
    onPaint: "light",
    image: "/images/graphql-nest-project.jpg",
    contents: ["NestJS", "GraphQL", "Apollo", "TypeORM", "PostgreSQL", "JWT"],
    links: [
      {
        kind: "repo",
        labelKey: "projects.repo",
        href: "https://github.com/AndresGacharna/Nest-graphql",
      },
    ],
  },
  {
    slug: "utadelicias",
    sizeType: "45G1",
    paint: "var(--paint-utadeo-blue)",
    onPaint: "light",
    image: "/images/utadelicias-app-larga.jpg",
    badgeKey: "projects.badgeUtadeo",
    contents: ["Kotlin", "Firebase", "Android Studio", "Figma"],
    links: [
      {
        kind: "repo",
        labelKey: "projects.repo",
        href: "https://github.com/AndresGacharna/utadeliciasApp",
      },
      {
        kind: "video",
        labelKey: "projects.video",
        href: "https://youtu.be/xmISuETa1Dg",
      },
      {
        kind: "figma",
        labelKey: "projects.figmaClient",
        href: "https://www.figma.com/proto/Gf9cXrq0eoOZEKgV28fllm/Dise%C3%B1o-version-Clientes?node-id=601-19&p=f&t=weYRSocE17HVWAi5-0&scaling=min-zoom&content-scaling=fixed&page-id=1669%3A162202&starting-point-node-id=2694%3A30&show-proto-sidebar=1",
      },
      {
        kind: "figma",
        labelKey: "projects.figmaOwner",
        href: "https://www.figma.com/proto/f8E1qu1ZHMOqeNpa6ZvkkM/Dise%C3%B1o-version-due%C3%B1os-local?node-id=2-2&starting-point-node-id=2%3A19",
      },
      {
        kind: "post",
        labelKey: "projects.post",
        href: "https://www.linkedin.com/posts/andr%C3%A9s-gacharn%C3%A1-a455a5285_agradecido-con-mis-compa%C3%B1eros-por-hacer-parte-activity-7263284403563384833-R5oU",
      },
    ],
  },
  {
    slug: "resnet",
    sizeType: "22G1",
    paint: "var(--paint-resnet-indigo)",
    onPaint: "light",
    image: "/images/resnet-fine-tunning.jpg",
    badgeKey: "projects.badgeUtadeo",
    contents: ["Python", "ResNet", "Machine Learning"],
    links: [
      {
        kind: "post",
        labelKey: "projects.post",
        href: "https://www.linkedin.com/posts/olmerg_ia-2024i-utadeo-ugcPost-7197207389601710080-av-x/",
      },
    ],
  },
];

const linkIcons: Record<LinkKind, ReactNode> = {
  repo: <GitHubIcon />,
  post: <LinkedInIcon />,
  video: <PlayIcon />,
  figma: <FigmaIcon />,
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={styles.section}>
      <div className="wrap">
        <header className={styles.header}>
          <h2 className="yard-heading">{t("projects.title")}</h2>
          <p className={styles.intro}>{t("projects.intro")}</p>
        </header>

        <ol className={styles.stack}>
          {projects.map((project, i) => {
            const id = containerId("AGCU", i + 2);
            const name = t(`projects.${project.slug}.name`);

            return (
              <li
                key={project.slug}
                className={styles.container}
                data-on-paint={project.onPaint}
                style={{ "--paint": project.paint } as CSSProperties}
              >
                <div className={`${styles.side} corrugated`}>
                  <div className={styles.sideMarks} aria-hidden="true">
                    <span className={styles.code}>
                      {id.owner} {id.serial}{" "}
                      <span className={styles.check}>{id.check}</span>
                    </span>
                    <span>{project.sizeType}</span>
                  </div>

                  <h3 className={styles.name}>{name}</h3>

                  {project.badgeKey && (
                    <p className={styles.placard}>{t(project.badgeKey)}</p>
                  )}

                  {project.image ? (
                    <div className={styles.hatch}>
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        unoptimized
                        sizes="(max-width: 900px) 92vw, 700px"
                      />
                    </div>
                  ) : (
                    <p className={styles.marking} aria-hidden="true">
                      {project.marking}
                    </p>
                  )}
                </div>

                <div className={styles.manifest}>
                  <p className={styles.desc}>
                    {t(`projects.${project.slug}.desc`)}
                  </p>

                  <div className={styles.plate}>
                    <p className={styles.plateTitle}>{t("projects.contents")}</p>
                    <ul className={styles.contents}>
                      {project.contents.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {project.links.length > 0 && (
                    <ul className={styles.handles}>
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <a
                            className="handle"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {linkIcons[link.kind]}
                            {t(link.labelKey)}
                            <ArrowUpRight className="handle-arrow" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.noteKey && (
                    <p className={styles.note}>{t(project.noteKey)}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
