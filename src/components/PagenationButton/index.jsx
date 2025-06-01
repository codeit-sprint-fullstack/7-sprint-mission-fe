import styles from "./PagenationButton.module.css";

export const PagenationButton = ({ children, onClick, disabled, isActive }) => {
  const buttonClasses = `${styles.button} ${isActive ? styles.activePage : ""}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
