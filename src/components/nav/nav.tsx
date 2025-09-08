import NavButton from "../button/navButton/button";
import style from "./nav.module.css";
import Logo from "../../assets/logo/logo.svg";
import TextLogo from "../../assets/logo/text_logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={style.Container}>
      <div className={style.LogoContainer}>
        <Link className={style.Logo} to={"/"}>
          <img src={Logo} alt="LOGO" />
          <img className={style.TextLogo} src={TextLogo} alt="Text LOGO" />
        </Link>
        <div className={style.NavOption}>
          <Link to={"/board"}>
            <p>자유게시판</p>
          </Link>
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

//내일해야할거 자유게시판이어서하고 ,글쓰기,글들어가기 이거 3개 하고 나머지 백엔드작업후 디테일작업하면 끝
