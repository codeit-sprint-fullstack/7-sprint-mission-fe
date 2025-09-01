import style from "./area.module.css";
import img from "../../assets/ui/Img_home_bottom.png";
function AreaBottom() {
  return (
    <div className={style.Container}>
      <div className={style.Box}>
        <div className={style.TextBox}>
          <p>믿을 수 있는</p>
          <p>판다마켓 중고 거래</p>
        </div>
        <div>
          <img className={style.image} src={img} alt="이미지" />
        </div>
      </div>
    </div>
  );
}

export default AreaBottom;
