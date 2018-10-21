import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import Html from "../../components/Html";

const html = ReactDOMServer.renderToString(<Html />);

// tslint:disable-next-line:no-console
console.log(html);
