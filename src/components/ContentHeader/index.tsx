import * as React from "react";

import styles from "./styles.scss";

export default function ContentHeader() {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>Igata</h2>
      <p className={styles.subTitle}>Convert a JSON Schema to a Flow type definition</p>
    </header>
  );
}
