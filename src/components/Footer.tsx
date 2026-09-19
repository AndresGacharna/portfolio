"use client";

import styles from "./Footer.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear().toString();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.mark}>
          <span className={styles.code}>AGCU</span>
          {t("footer.copyright").replace("{year}", CURRENT_YEAR)}
        </p>
        <p className={styles.hosting}>{t("footer.hosting")}</p>
        <a href="#top" className={styles.top}>
          {t("footer.top")}
          <ArrowDown className={styles.upArrow} />
        </a>
      </div>
    </footer>
  );
}
