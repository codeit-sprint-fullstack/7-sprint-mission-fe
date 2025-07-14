import { Link } from "react-router-dom";
import PandaLogo from "../assets/icon/panda_logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <header className="navHeader">
      <div className="nav">
        <div className="logo-text link">
          <Link to="/">
            <img className="logo" src={PandaLogo} alt="판다 로고 아이콘" />
          </Link>
          <Link to="/">
            <h1>판다마켓</h1>
          </Link>
          <div className="linksList">
            <Link to="/community" className="comLink">
              자유게시판
            </Link>
            <Link to="/items" className="itemsLink">
              중고마켓
            </Link>
          </div>
        </div>
        <div className="login link">
          <Link to="/login" className="loginLink">
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
