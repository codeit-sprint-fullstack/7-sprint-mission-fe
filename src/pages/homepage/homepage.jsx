import Footer from "../../component/footer/footer";
import HomeBottomBanner from "../../component/homeBottomBanner/homeBottomBanner";
import HomeFeatureSection from "../../component/homeFeaturesSection/homeFeaturesSection";
import HomeHeader from "../../component/homeHearder/homeHeader";
import HomeSection from "../../component/homeSection/homeSection";
const Homepage = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      <main>
        <HomeSection></HomeSection>
        <HomeFeatureSection></HomeFeatureSection>
        <HomeBottomBanner></HomeBottomBanner>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
