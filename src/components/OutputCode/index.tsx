import * as React from "react";

import styles from "./styles.scss";

interface IProps {
  value: string;
}

export default function OutputCode({value}: IProps) {
  return (
    <textarea
      value={value}
      className={styles.textarea}
      readOnly={true}
    />
  );
}
