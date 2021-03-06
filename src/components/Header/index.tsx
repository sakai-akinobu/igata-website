import * as React from "react";
import {FaGithub} from "react-icons/fa";
import {FaNpm} from "react-icons/fa";

import styles from "./styles.scss";

const iconSize = 28;

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Igata</h1>
      <nav className={styles.nav}>
        <a className={styles.link} href="https://github.com/sakai-akinobu/igata">
          <FaGithub size={iconSize} />
        </a>
        <a className={styles.link} href="https://www.npmjs.com/package/igata">
          <FaNpm size={iconSize} />
        </a>
      </nav>
    </header>
  );
}
