import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>
        <Link href="https://vamshi.nl">vamshi.nl</Link>
      </h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
