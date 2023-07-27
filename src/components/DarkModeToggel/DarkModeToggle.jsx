"use client";
import { useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

// import {ThemeContext} from
let mode = "dark";
export default function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
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
