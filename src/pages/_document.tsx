import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script> */}
      </body>
    </Html>
  );
}
