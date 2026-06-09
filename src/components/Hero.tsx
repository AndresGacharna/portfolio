"use client";

import { useState } from "react";
import Image from "next/image";
import TextScramble from "./TextScramble";
import Typewriter from "./Typewriter";
import Particles from "./Particles";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const titles = [
    t("hero.title0"),
    t("hero.title1"),
    t("hero.title2"),
    t("hero.title3"),
  ];

  return (
    <section className={styles.hero} id="hero">
      <Particles count={35} />

      <div className={`container ${styles.content}`}>
        <div className={styles.textSide}>
          <p className={styles.greeting}>
            <span className={styles.greetingSymbol}>{">"}</span> console.log(
            <span className={styles.greetingString}>
              &quot;{t("hero.console")}&quot;
            </span>
            );
          </p>

          <h1 className={styles.name}>
            <TextScramble text="Andrés Gacharná" delay={300} speed={60} />
          </h1>

          <div className={styles.titleWrapper}>
            <span className={styles.titlePrefix}>{">"}&nbsp;</span>
            <Typewriter
              titles={titles}
              className={styles.typewriter}
              cursorClassName={styles.cursor}
            />
          </div>

          <p className={styles.bio}>
            {t("hero.bio")}
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn-primary">
              <span>{t("hero.btnPrimary")}</span>
              <span>→</span>
            </a>
            <a href="#contact" className="btn-outline">
              <span>{t("hero.btnOutline")}</span>
            </a>
          </div>
        </div>

        <div className={styles.photoSide}>
          <div className={styles.photoContainer}>
            <div className={styles.photoGlow} />
            <div className={styles.photoInner}>
              {!imageError ? (
                <Image
                  src="/images/myprofilepic.png"
                  alt="Profile photo of Andrés Gacharná"
                  fill
                  sizes="(max-width: 768px) 340px, 480px"
                  priority
                  className={styles.photoImage}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className={styles.photoPlaceholder}>
                  <span className={styles.photoPlaceholderText}>
                    &lt;img/&gt;
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Decorative elements */}
          <div className={styles.decorDot1} />
          <div className={styles.decorDot2} />
          <div className={styles.decorLine} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
