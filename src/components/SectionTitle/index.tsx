import * as React from "react";

import styles from "./styles.scss";

export default function SplitLayout({title}: {title: string}) {
  return (
    <h2 className={styles.title}>
      {title}
    </h2>
  );
}
