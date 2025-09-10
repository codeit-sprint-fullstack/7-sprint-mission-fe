import FormComponent from "../../components/login/form";
import Logo from "../../assets/logo/logo.svg";
import TextLogo from "../../assets/logo/text_logo.svg";
import ConvenientLoginBox from "../../components/login/ConvenientLoginBox";
import style from "./login.module.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className={style.Container}>
      <div className={style.Logo}>
        <img className={style.LogoImg} src={Logo} alt="LOGO" />
        <img className={style.TextLogo} src={TextLogo} alt="Text LOGO" />
      </div>
      <div>
        <FormComponent />
      </div>
      <ConvenientLoginBox />
      <div>
        <p className={style.noWrapText}>
          판다마켓은 처음이신가요?{" "}
          <Link to={"/signup"} className={style.signUp}>
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
