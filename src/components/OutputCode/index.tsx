import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {monokai as theme} from "react-syntax-highlighter/styles/hljs";

import styles from "./styles.scss";

interface IProps {
  value: string;
}

export default function OutputCode({value}: IProps) {
  return (
    <SyntaxHighlighter
      language="javascript"
      className={styles.textarea}
      style={theme}
    >
      {value}
    </SyntaxHighlighter>
  );
}
