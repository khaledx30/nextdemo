import styles from "./page.module.css";
import Image from "next/image";
// adjusting the img
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into reality we bring together the team for the
          global tech industry
        </p>
        <button className={styles.button}>see our works</button>
      </div>
      <div className={`${styles.item} ${styles.fex}`}>
        <Image
          src="/hero.png"
          width={500}
          height={500}
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
}
