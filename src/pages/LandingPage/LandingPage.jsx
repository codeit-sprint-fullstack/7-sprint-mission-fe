import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BottomImgSection from "./components/BottomImgSection";
import HotItemSection from "./components/HotItemSection";
import RegisterSection from "./components/RegisterSection";
import SearchSection from "./components/SearchSection";
import TopImgSection from "./components/TopImgSection";
import "./LandingPage.css";

function RandingPage() {
  return (
    <>
      <Header />
      <TopImgSection />
      <main>
        <HotItemSection />
        <SearchSection />
        <RegisterSection />
      </main>
      <BottomImgSection />
    </>
  );
}

export default RandingPage;
