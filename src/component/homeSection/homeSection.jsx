import heroImage from "../../assets/image/hero-image.png";
import "../homeSection/homeSection.css";

const HomeSection = () => {
  return (
    <section
      id="hero"
      className="banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="wrapper">
        <h1>
          일상의 모든 물건을
          <br />
          거래해 보세요
        </h1>
        <a href="items.html" className="button pill-button">
          구경하러 가기
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
