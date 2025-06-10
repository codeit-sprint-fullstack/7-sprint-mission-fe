import bottomBannerImage from "../../assets/image/bottom-banner-image.png";
import "./homeBottomBanner.css";

const HomeBottomBanner = () => {
  return (
    <section
      id="bottomBanner"
      className="banner"
      style={{ backgroundImage: `url(${bottomBannerImage})` }}
    >
      <div className="wrapper">
        <h1>
          믿을 수 있는
          <br />
          판다마켓 중고거래
        </h1>
      </div>
    </section>
  );
};

export default HomeBottomBanner;
