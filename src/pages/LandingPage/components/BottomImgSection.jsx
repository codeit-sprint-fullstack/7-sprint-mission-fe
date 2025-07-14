import { Link } from "react-router-dom";
import ImgHomeBottom from "../../../assets/img/Img_home_bottom.png";

function BottomImgSection() {
  return (
    <section className="bottom image">
      <div className="bottom-image-main">
        <div className="bottom-image-text">
          <h2>
            믿을 수 있는 <br /> 판다마켓 중고 거래
          </h2>
        </div>
        <img className="bottom-image" src={ImgHomeBottom} alt="하단 이미지" />
      </div>
    </section>
  );
}

export default BottomImgSection;
