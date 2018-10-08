import * as React from "react";

import styles from "./styles.scss";

interface IProps extends React.Props<any> {}

export default function ContentContainer({children}: IProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
