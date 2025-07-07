import Navbar from "@/components/Navbar";
import { UrlProvider } from "@/lib/UrlContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UrlProvider>
      <Navbar />
      <Component {...pageProps} />
    </UrlProvider>
  );
}
