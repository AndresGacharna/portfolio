"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { containerId } from "@/lib/iso6346";
import { contact } from "@/lib/contact";
import {
  ArrowDown,
  ArrowUpRight,
  DocumentIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./Icons";

const id = containerId("AGCU", 1);

export default function Hero({ cvHref }: { cvHref?: string }) {
  const { t } = useLanguage();

  return (
    <section id="top" className={`${styles.door} corrugated`}>
      <div className={styles.rods} aria-hidden="true">
        <span className={styles.seam} />
        <span className={styles.rod}>
          <span className={styles.rodHandle} />
        </span>
        <span className={styles.rod}>
          <span className={styles.rodHandle} />
        </span>
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.markings} aria-hidden="true">
          <p className={styles.code}>
            <span>{id.owner}</span>
            <span>{id.serial}</span>
            <span className={styles.check}>{id.check}</span>
          </p>
          <p className={styles.sizeType}>45G1</p>
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameLine}>Andrés</span>
          <span className={styles.nameLine}>Gacharná</span>
        </h1>

        <p className={styles.role}>
          {t("hero.role")}
          <span className={styles.roleSep} aria-hidden="true" />
          <strong>{t("hero.focus")}</strong>
        </p>

        <div className={styles.lower}>
          <div className={styles.copy}>
            <p className={styles.lede}>{t("hero.lede")}</p>

            <ul className={styles.proof}>
              {[0, 1, 2].map((i) => (
                <li key={i}>{t(`hero.proof${i}`)}</li>
              ))}
            </ul>

            <div className={styles.handles}>
              <a
                className="handle handle--light handle--big"
                href={`mailto:${contact.email}`}
              >
                <MailIcon />
                {t("hero.email")}
              </a>
              {cvHref && (
                <a className="handle handle--big" href={cvHref} download>
                  <DocumentIcon />
                  {t("hero.cv")}
                </a>
              )}
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
            </div>
          </div>

          <figure className={styles.plate}>
            <figcaption className={styles.plateTitle}>
              {t("hero.plateTitle")}
            </figcaption>
            <div className={styles.photo}>
              <Image
                src="/images/myprofilepic.png"
                alt="Andrés Gacharná"
                fill
                sizes="(max-width: 860px) 40vw, 260px"
                priority
              />
            </div>
            <dl className={styles.plateRows}>
              <dt>{t("hero.plateName")}</dt>
              <dd>Andrés Felipe Gacharná Tibochá</dd>
              <dt>{t("hero.platePort")}</dt>
              <dd>{t("hero.location")}</dd>
            </dl>
          </figure>
        </div>

        <a href="#projects" className={styles.next}>
          {t("hero.next")}
          <ArrowDown />
        </a>
      </div>
    </section>
  );
}
