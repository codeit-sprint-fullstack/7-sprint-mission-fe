import "@/styles/reset.css";
import "@/styles/base.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="layout">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
