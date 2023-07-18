import styles from "./page.module.css";
import Image from "next/image";
// adjusting the img
export default function Home() {
  return (
    <div className={styles.div}>
      <div>
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
