import * as React from "react";

interface IProps extends React.Props<any> {}

export default function ContentContainer({children}: IProps) {
  return <div>{children}</div>;
}
