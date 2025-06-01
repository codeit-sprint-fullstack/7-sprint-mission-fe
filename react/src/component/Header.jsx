import logo from "../assets/logo.svg";
import styles from "../styles/Header.module.css";
import { Link, NavLink } from "react-router";
function Header() {
  const getStyles = ({ isActive }) => {
    //{isActive, isPending, isTransitioning}
    //console.log(props);
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <header>
      <div class={styles.inner}>
        <div className={"logo"}>
          <h1>
            <span>판다마켓</span>
            <Link to={"/"}>
              <img src={logo} alt="판다마켓" />
            </Link>
          </h1>
        </div>
        <nav className={styles.gnb}>
          <ul className={styles.menuList}>
            <li>
              <NavLink to={"/"}>자유게시판</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>중고마켓</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.util}>
          <Link to={"/"} className={`btn active ${styles.login}`}>
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
