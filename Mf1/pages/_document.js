import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from "@module-federation/nextjs-mf/utils";
import Script from "next/Script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    if (
      process.env.NODE_ENV === "development" &&
      !ctx.req.url.includes("_next")
    ) {
      await revalidate().then((shouldReload) => {
        if (shouldReload) {
          ctx.res.writeHead(302, { Location: ctx.req.url });
          ctx.res.end();
        }
      });
    } else {
      ctx?.res?.on("finish", () => {
        revalidate();
      });
    }
    const initialProps = await Document.getInitialProps(ctx);
    const chunks = await flushChunks();

    return {
      ...initialProps,
      chunks,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          <FlushedChunks chunks={this.props.chunks} />
          <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
        </Head>

        <body className="bg-background-grey">
          <Main />
          <NextScript />
          {/* <Script
            type="text/javascript"
            src="https://scripts.sirv.com/sirvjs/v3/sirv.js"
          ></Script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
