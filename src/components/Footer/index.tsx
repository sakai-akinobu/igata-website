import * as React from "react";
import {FaGithub} from "react-icons/fa";
import {FaNpm} from "react-icons/fa";

import styles from "./styles.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="https://github.com/sakai-akinobu/igata"><FaGithub /></a>
      <a className={styles.link} href="https://www.npmjs.com/package/igata"><FaNpm /></a>
    </footer>
  );
}
