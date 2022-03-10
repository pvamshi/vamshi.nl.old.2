import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>
        <Link href="https://vamshi.nl">vamshi.nl</Link>
      </h1>
      <div
        style={{
          background: "#00000020",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
