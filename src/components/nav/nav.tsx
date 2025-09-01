import NavButton from "../button/navButton/button";
import style from "./nav.module.css";
import Logo from "../../assets/logo/logo.svg";
import TextLogo from "../../assets/logo/text_logo.svg";

function Nav() {
  return (
    <div className={style.Container}>
      <div className={style.LogoContainer}>
        <img src={Logo} alt="LOGO" />
        <img className={style.TextLogo} src={TextLogo} alt="Text LOGO" />
      </div>
      <NavButton />
    </div>
  );
}

export default Nav;
