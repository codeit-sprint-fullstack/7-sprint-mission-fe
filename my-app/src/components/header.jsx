import logo from "../assets/panda_logo.svg";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="판다마켓 로고" className="logo-image" />
        <span className="logo-text">판다마켓</span>
      </div>

      <nav className="menu">
        <a href="#">자유게시판</a>
        <a href="#">중고마켓</a>
      </nav>

      <div className="auth">
        <button className="login-button">로그인</button>
      </div>
    </header>
  );
};

export default Header;
