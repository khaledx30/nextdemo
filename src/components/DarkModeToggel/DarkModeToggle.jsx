"use client";
import styles from "./darkmode.module.css";

// import {ThemeContext} from
let mode = "dark";
export default function DarkModeToggle() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
