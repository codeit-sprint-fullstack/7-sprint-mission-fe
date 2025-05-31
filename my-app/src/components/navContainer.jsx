// src/components/NavContainer.jsx
import styles from "./navContainer.module.css";
const NavContainer = ({ children, className = "" }) => {
  return (
    <div className={`${styles.navContainer} ${className}`}>{children}</div>
  );
};

export default NavContainer;
