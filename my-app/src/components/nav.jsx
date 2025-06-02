import NavContainer from "./navContainer.jsx";
import UserMenu from "./userMenu.jsx";
import logoImg from "../assets/panda_logo.svg";
import styles from "./nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { PATH } from "../utils/path";

function Nav() {
  const getStyles = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    color: isActive ? "#6a1b9a" : "#000",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div className={styles.nav}>
      <NavContainer className={styles.container}>
        <div className={styles.navLeft}>
          <ul className={styles.menu}>
            <li>
              <Link to={PATH.index()} className={styles.logoWrap}>
                <img
                  src={logoImg}
                  alt="판다마켓 로고"
                  className={styles.logo}
                />
                <span className={styles.logoText}>판다마켓</span>
              </Link>
            </li>
            <li>
              <NavLink to={PATH.board()} style={getStyles}>
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink to={PATH.market()} style={getStyles}>
                중고마켓
              </NavLink>
            </li>
          </ul>
        </div>
        <button className={styles.loginBtn}>
          <UserMenu className={styles.loginText}/>
        </button>
      </NavContainer>
    </div>
  );
}

export default Nav;
