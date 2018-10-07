import * as React from "react";

interface IProps extends React.Props<any> {}

export default function SplitLayout({children}: IProps) {
  return <div>{children}</div>;
}
