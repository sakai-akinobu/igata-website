import * as React from "react";
import * as ReactDOM from "react-dom";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import App from "./containers/App";
import "./utils/styles/global.scss";

ReactDOM.render(
  <App />,
  document.getElementById("app") as HTMLElement,
);
