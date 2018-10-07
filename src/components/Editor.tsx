import * as React from "react";

interface IProps {
  value: string;
}

export default function Editor({value}: IProps) {
  return <textarea value={value} />;
}
