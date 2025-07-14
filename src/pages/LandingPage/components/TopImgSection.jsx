import { Link } from "react-router-dom";
import ImgHomeTop from "../../../assets/img/Img_home_top.png";

function TopImgSection() {
  return (
    <section className="top image">
      <div className="top-image-main">
        <div className="top-image-text">
          <h2>
            일상의 모든 물건을 <br /> 거래해 보세요
          </h2>
          <div className="items link">
            <Link to="/items" className="itemsLink">
              구경하러 가기
            </Link>
          </div>
        </div>
        <img className="top-image" src={ImgHomeTop} alt="상단 이미지" />
      </div>
    </section>
  );
}

export default TopImgSection;
