import "./homeHeader.css";
import logo from "../../assets/image/icon_panda.svg";

const homeHeader = () => {
  return (
    <>
      <header>
        <a href="index.html" aria-label="홈으로 이동">
          <img src={logo} alt="판다마켓 로고" width="153" />
        </a>
        <a href="login.html" id="loginLink" className="button">
          로그인
        </a>
      </header>
    </>
  );
};

export default homeHeader;
