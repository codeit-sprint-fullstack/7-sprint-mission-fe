import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

/**
 * BrandLogo 컴포넌트
 * @param {object} props - 컴포넌트 props
 * @param {'large' | 'small'} [props.size='small'] - 로고 크기
 */

export default function Logo({ size = "small" }) {
  const sizeClass = styles[size];
  return (
    <Link href="/" className={styles.logoContainer}>
      <div className={`${styles.logoImage} ${sizeClass}`}>
        <Image
          src="/images/branding/ic_panda_logo.svg"
          alt="판다마켓 로고"
          fill
          priority
        />
      </div>
      <h1 className={`${styles.logoTitle} ${sizeClass}`}>판다마켓</h1>
    </Link>
  );
}
