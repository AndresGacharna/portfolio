import styles from "./BackgroundGradient.module.css";

export default function BackgroundGradient() {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      <div className={styles.gradientsContainer}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.blob} ${styles.blob4}`} />
        <div className={`${styles.blob} ${styles.blob5}`} />
      </div>
    </div>
  );
}
