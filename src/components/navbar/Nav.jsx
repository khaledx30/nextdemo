"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { links } from "./data";
import DarkModeToggle from "./../DarkModeToggel/DarkModeToggle";

export default function Nav() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Khaled essam
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
}
