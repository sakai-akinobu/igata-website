import * as React from "react";

import styles from "./styles.scss";

interface IProps extends React.Props<any> {}

export default function SplitLayout({children}: IProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
