import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <body className="line-numbers">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
