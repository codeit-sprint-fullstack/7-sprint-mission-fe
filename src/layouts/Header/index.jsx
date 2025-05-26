import { BrandLogo } from "../../components/BrandLogo";
import { Navigation } from "../../components/Navigation";
import { Button } from "../../components/Button";
import styles from "./Header.module.css";

/**
 * Header 컴포넌트
 * @param {object} props - 컴포넌트 props
 * @param {'full' | 'simple'} [props.type='full'] - 헤더 타입 ('full': 네비게이션 있음, 'simple': 네비게이션 없음)
 */
export const Header = ({ type = "full" }) => {
  return (
    <header className={styles.header}>
      <div className={styles.brandSection}>
        <BrandLogo className={styles.logo} size="small" />
        {type === "full" && <Navigation className={styles.navigation} />}
      </div>
      <Button size="small" color="primary100">
        로그인
      </Button>
    </header>
  );
};
