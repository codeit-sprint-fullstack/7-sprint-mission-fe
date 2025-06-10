import Footer from "../../component/footer/footer";
import HomeBottomBanner from "../../component/homeBottomBanner/homeBottomBanner";
import HomeFeatureSection from "../../component/homeFeaturesSection/homeFeaturesSection";
import HomeSection from "../../component/homeSection/homeSection";
const Homepage = () => {
  return (
    <>
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
