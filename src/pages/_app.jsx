import "@/styles/reset.css";
import "@/styles/base.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <main className="layout">
        <Component {...pageProps} />
      </main>
      <Footer />
    </AuthProvider>
  );
}
