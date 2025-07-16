import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/lib/UserContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}
