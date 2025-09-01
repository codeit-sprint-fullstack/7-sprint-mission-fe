import google from "../../assets/social/google-logo.png";
import kakao from "../../assets/social/kakao-logo.png";
import style from "./ConvenientLoginBox.module.css";

function ConvenientLoginBox() {
  return (
    <div className={style.Container}>
      <p>간편 로그인하기</p>
      <div className={style.Box}>
        <img src={google} />
        <img src={kakao} />
      </div>
    </div>
  );
}

export default ConvenientLoginBox;
