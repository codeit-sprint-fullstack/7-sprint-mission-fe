import { useAuth } from "@/context/AuthContext";
import Button from "./Button";
import styles from "./Header.module.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";

export default function Header() {
  const { auth } = useAuth();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.brandSection}>
        <Logo />
        <Navigation />
      </div>
      {auth?.user ? (
        <UserMenu />
      ) : (
        <Button href="/login" size="small" color="primary100">
          로그인
        </Button>
      )}
    </header>
  );
}
