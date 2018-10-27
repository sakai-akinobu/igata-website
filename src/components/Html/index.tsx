import * as React from "react";

import App from "../../containers/App";
import Head from "../Head";

export default function Html() {
  return (
    <html>
      <Head />
      <body>
        <div id="app">
          <App />
        </div>
      </body>
    </html>
  );
}
