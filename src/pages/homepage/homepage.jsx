import Footer from "../../component/footer/footer";
import HomeBottomBanner from "../../component/homeBottomBanner/homeBottomBanner";
import HomeFeatureSection from "../../component/homeFeature/homeFeatureSection";
import HomeHearder from "../../component/homeHearder";

const Homepage = () => {
  return (
    <>
      <HomeHearder></HomeHearder>
      <main>
        <homeSection></homeSection>
        <HomeFeatureSection></HomeFeatureSection>
        <HomeBottomBanner></HomeBottomBanner>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
