import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import { Link } from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 khaled All rights reserved</div>
      <div className={styles.socail}>
        <Link href="/">
          <Image src="/1.png" width={15} height={15} alt="kimg" />
        </Link>
        <Link href="/">
          <Image src="/2.png" width={15} height={15} alt="kimg" />
        </Link>
        <Link href="/">
          <Image src="/3.png" width={15} height={15} alt="kimg" />
        </Link>
        <Link href="/">
          <Image src="/4.png" width={15} height={15} alt="kimg" />
        </Link>
      </div>
    </div>
  );
}
