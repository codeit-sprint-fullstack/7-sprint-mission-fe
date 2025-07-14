import { Link } from "react-router-dom";
import PandaLogo from "../assets/icon/panda_logo.svg";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div className="header">
        <div className="logo-text link">
          <Link to="/">
            <img className="logo" src={PandaLogo} alt="판다 로고 아이콘" />
          </Link>
          <Link to="/">
            <h1>판다마켓</h1>
          </Link>
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

export default Header;
