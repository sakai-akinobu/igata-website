import * as React from "react";

import styles from "./styles.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Igata</h1>
      <nav className={styles.nav}>
        <a className={styles.link}>GitHub</a>
        <a className={styles.link}>npm</a>
      </nav>
    </header>
  );
}
