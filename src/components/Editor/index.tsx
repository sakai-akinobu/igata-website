import * as React from "react";
import * as ReactCodemirror from "react-codemirror";

import styles from "./styles.scss";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({value, onChange}: IProps) {
  return (
    <ReactCodemirror
      value={value}
      onChange={(v: string) => onChange(v)}
      options={({
        lineNumbers: true,
        mode: "javascript",
        theme: "monokai",
      })}
      className={styles.textarea}
    />
  );
}
