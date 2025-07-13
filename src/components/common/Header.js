import Logo from "./Logo";
import Button from "./Button";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.brandSection}>
        <Logo />
        <Navigation />
      </div>
      <Button href="/login" size="small" color="primary100">
        로그인
      </Button>
    </header>
  );
}
