import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {hybrid} from "react-syntax-highlighter/styles/hljs";

import styles from "./styles.scss";

interface IProps {
  value: string;
}

export default function OutputCode({value}: IProps) {
  return (
    <SyntaxHighlighter
      language="flow"
      className={styles.textarea}
      style={hybrid}
    >
      {value}
    </SyntaxHighlighter>
  );
}
