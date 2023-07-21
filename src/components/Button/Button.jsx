import Link from "next/link";
import styles from "./button.module.css";
export default function Button(props) {
  return (
    <Link href={props.url}>
      <button className={styles.container}>{props.text}</button>
    </Link>
  );
}
