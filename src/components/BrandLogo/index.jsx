import { Link } from "react-router-dom";
import styles from "./BrandLogo.module.css";
import logoImg from "../../assets/branding/ic_panda_logo.svg";
/**
 * BrandLogo 컴포넌트
 * @param {object} props - 컴포넌트 props
 * @param {'large' | 'small'} [props.size='small'] - 로고 크기
 */
export const BrandLogo = ({ size = "small" }) => {
  const sizeClass = styles[size];
  return (
    <Link to="/" className={styles.logo}>
      <img
        className={`${styles.logoImg} ${sizeClass}`}
        src={logoImg}
        alt="로고 이미지"
      />
      <h1 className={`${styles.logoText} ${sizeClass}`}>판다마켓</h1>
    </Link>
  );
};
