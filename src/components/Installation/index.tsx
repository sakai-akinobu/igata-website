import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark as theme} from "react-syntax-highlighter/styles/hljs";

import SectionTitle from "../SectionTitle";
import styles from "./styles.scss";

export default function Installation() {
  return (
    <div className={styles.container}>
      <SectionTitle title="Installation" />
      <SyntaxHighlighter
        language="sh"
        style={theme}
      >
        {`npm install --save igata`}
      </SyntaxHighlighter>
    </div>
  );
}
