import Document, { Html, Head, Main, NextScript } from "next/document";
import { GlobalStyles } from "@/styles/global";

// @ts-ignore
class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <GlobalStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
