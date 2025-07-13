import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.codeit}>@codeit-2024</p>
        <ul className={styles.utilityLinks}>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
        <div className={styles.socialGroup}>
          <a href="https://www.facebook.com/" target="_blank">
            <Image
              src="/images/icons/ic_facebook.png"
              alt="페이스북 로고 이미지"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.x.com/" target="_blank">
            <Image
              src="/images/icons/ic_twitter.png"
              alt="트위터 로고 이미지"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <Image
              src="/images/icons/ic_youtube.png"
              alt="유튜브 로고 이미지"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Image
              src="/images/icons/ic_instagram.png"
              alt="인스타그램 로고 이미지"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
