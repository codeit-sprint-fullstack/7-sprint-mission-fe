import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/lib/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const useLayout = Component.useLayout ?? true;

  return (
    <UserProvider>
      {useLayout && <Navbar />}
      <Component {...pageProps} />
      {useLayout && <Footer />}
    </UserProvider>
  );
}
