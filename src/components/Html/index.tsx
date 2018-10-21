import * as React from "react";

import App from "../../containers/App";

export default function Html() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="Igata - Convert a JSON Schema to a Flow type definition" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igata.netlify.com/" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:description" content="Convert a JSON Schema to a Flow type definition" />
        <meta name="twitter:card" content="summary"></meta>
        <title>Igata - Convert a JSON Schema to a Flow type definition</title>
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32" />
        <link rel="stylesheet" href="/dist/bundle.css"></link>
        <script src="/dist/bundle.js" defer></script>
      </head>
      <body>
        <div id="app">
          <App />
        </div>
      </body>
    </html>
  );
}
