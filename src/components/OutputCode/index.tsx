import * as React from "react";

interface IProps {
  value: string;
}

export default function OutputCode({value}: IProps) {
  return (
    <textarea
      value={value}
      readOnly={true}
    />
  );
}
