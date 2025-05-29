import LogoIcon from "../../assets/image/icon_panda.svg";
import "./nav.css";
import { Link } from "react-router-dom";
import LoginIcon from "../../assets/image/LoginIcon.png";

const Nav = () => {
  return (
    <div className="NavTopLevel">
      <div className="NavLeft">
        <div className="NavLogo">
          <Link to="/" className="LogoWrapper">
            <img src={LogoIcon} alt="판다로고" className="LogoIcon" />
            <span className="LogoText">판다마켓</span>
          </Link>
        </div>
        <div className="NavButton">
          <div className="NavBtnStyle">
            <Link>
              <span>자유게시판</span>
            </Link>
          </div>
          <div className="NavBtnStyle">
            <Link>
              <span>중고마켓</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="NavRight">
        <div className="NavLogin">
          <Link>
            <img src={LoginIcon} className="LoginIcon"></img>
            <span className="LoginText">로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
