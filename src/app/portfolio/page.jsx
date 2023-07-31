import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "portfolio",
  description: "this is portfolio page",
};

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="portfolio/illustrations" className={styles.item}>
          <span className={styles.s_title}>Illustrations</span>
        </Link>
        <Link href="portfolio/websites" className={styles.item}>
          <span className={styles.s_title}>Websites</span>
        </Link>
        <Link href="portfolio/application" className={styles.item}>
          <span className={styles.s_title}>Application</span>
        </Link>
      </div>
    </div>
  );
}
