import styles from "./Footer.module.css";
import facebookIcon from "../../assets/icons/ic_facebook.png";
import twitterIcon from "../../assets/icons/ic_twitter.png";
import youtubeIcon from "../../assets/icons/ic_youtube.png";
import instagramIcon from "../../assets/icons/ic_instagram.png";
// 페이지 내부 링크를 위해 Link 컴포넌트 사용 (React Router 사용 시)
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p className={styles.codeit}>@codeit-2024</p>
        <ul className={styles.utilityLinks}>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className={styles.socialGroup}>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://www.x.com/" target="_blank">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeIcon} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};
