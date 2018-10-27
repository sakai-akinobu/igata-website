import * as React from "react";

const trakingCode = `
  window.dataLayer = window.dataLayer || [];
  function gtag() {dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-7106314-13');
`;

export default function GoogleAnalyticsTags() {
  return <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-7106314-13"></script>
    <script dangerouslySetInnerHTML={{__html: trakingCode}} />
  </>;
}
