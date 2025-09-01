import Logo from "../../assets/logo/logo.svg";
import TextLogo from "../../assets/logo/text_logo.svg";
import style from "./signup.module.css";
import SignForm from "../../components/signup/form/form";
import ConvenientLoginBox from "../../components/login/ConvenientLoginBox";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className={style.Container}>
      <div className={style.Logo}>
        <img className={style.LogoImg} src={Logo} alt="LOGO" />
        <img className={style.TextLogo} src={TextLogo} alt="Text LOGO" />
      </div>
      <SignForm />
      <ConvenientLoginBox />
      <div>
        <p>
          이미 회원이신가요?
          <Link to={"/login"} className={style.signUp}>
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
