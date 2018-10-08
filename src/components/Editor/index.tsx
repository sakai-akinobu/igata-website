import * as React from "react";

import styles from "./styles.scss";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({value, onChange}: IProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.textarea}
    />
  );
}
