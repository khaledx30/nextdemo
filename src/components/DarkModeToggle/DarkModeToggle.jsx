"use client";
import { useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={`${styles.container} Bdark`} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={
          mode === "light"
            ? { transform: "translateX(20px)" }
            : { transform: "translateX(0px)" }
        }
      />
    </div>
  );
}
