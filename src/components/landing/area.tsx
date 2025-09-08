import { Link } from "react-router-dom";
import img from "../../assets/ui/Img_home_top.png";
import style from "./area.module.css";

function Area() {
  return (
    <div className={style.Container}>
      <div className={style.Box}>
        <div className={style.TextBox}>
          <p>일상의 모든 물건을</p>
          <p>거래해 보세요</p>
          <Link to={"/market"}>
            <button className={style.TextBoxButton}>구경하러 가기</button>
          </Link>
        </div>
        <div>
          <img className={style.image} src={img} alt="이미지" />
        </div>
      </div>
    </div>
  );
}

export default Area;
