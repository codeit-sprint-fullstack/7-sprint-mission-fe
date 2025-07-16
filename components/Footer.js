import Link from "next/link";
import IcFacebook from "@/public/ic_facebook.png";
import IcInstagram from "@/public/ic_instagram.png";
import IcTwitter from "@/public/ic_twitter.png";
import IcYoutube from "@/public/ic_youtube.png";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox}>
        <div className={styles.footerText}>@codeit - 2024</div>
        <div className={styles.footerLinks}>
          <div className={styles.link}>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className={styles.link}>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
        <div className={styles.footerIcons}>
          <div
            className={`${styles.link} ${styles.icon}`}
            target="_blank"
            href="https://www.facebook.com"
          >
            <Image src={IcFacebook} alt="페이스북 아이콘" />
          </div>
          <div
            className={`${styles.link} ${styles.icon}`}
            target="_blank"
            href="https://twitter.com"
          >
            <Image src={IcTwitter} alt="트위터 아이콘" />
          </div>
          <div
            className={`${styles.link} ${styles.icon}`}
            target="_blank"
            href="https://www.youtube.com"
          >
            <Image src={IcYoutube} alt="유투브 아이콘" />
          </div>
          <div
            className={`${styles.link} ${styles.icon}`}
            target="_blank"
            href="https://www.instagram.com"
          >
            <Image src={IcInstagram} alt="인스타그램 아이콘" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
