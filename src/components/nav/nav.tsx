import NavButton from "../button/navButton/button";
import style from "./nav.module.css";
import Logo from "../../assets/logo/logo.svg";
import TextLogo from "../../assets/logo/text_logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={style.Container}>
      <div className={style.LogoContainer}>
        <Link to={"/"}>
          <img src={Logo} alt="LOGO" />
          <img className={style.TextLogo} src={TextLogo} alt="Text LOGO" />
        </Link>
        <div className={style.NavOption}>
          <p>자유게시판</p>
          <Link to={"/market"}>
            <p>중고마켓</p>
          </Link>
        </div>
      </div>
      <Link to={"/login"}>
        <NavButton />
      </Link>
    </div>
  );
}

export default Nav;
