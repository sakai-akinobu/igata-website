import * as React from "react";
import {useEffect, useRef} from "react";
import * as ReactCodemirror from "react-codemirror";

import styles from "./styles.scss";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor(props: IProps) {
  const codeMirrorRef = useRef<any>(null);
  useEffect(() => {
    const codeMirror = codeMirrorRef.current.codeMirror;
    setTimeout(() => codeMirror.refresh(), 0);
  }, []);

  const {value, onChange} = props;

  return (
    <ReactCodemirror
      value={value}
      onChange={(v: string) => onChange(v)} options={({
        lineNumbers: true,
        mode: "javascript",
        theme: "night",
      })}
      className={styles.textarea}
      ref={codeMirrorRef}
    />
  );
}
