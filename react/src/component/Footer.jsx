import facebookIcon from "../assets/ic_facebook.png";
import twitterIcon from "../assets/ic_twitter.png";
import youtubeIcon from "../assets/ic_youtube.png";
import instagramIcon from "../assets/ic_instagram.png";
import styles from "../styles/Footer.module.css";
import { Link, NavLink } from "react-router";

function Footer() {
  return (
    <footer>
      <div className={styles.inner}>
        <ul className={styles.snsList}>
          <li>
            <Link to="https://www.facebook.com/" target="_blank">
              <img src={facebookIcon} alt="페이스북" />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/" target="_blank">
              <img src={twitterIcon} alt="트위터" />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/" target="_blank">
              <img src={youtubeIcon} alt="유튜브" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/" target="_blank">
              <img src={instagramIcon} alt="인스타그램" />
            </Link>
          </li>
        </ul>
        <ul className={styles.fUtil}>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
        <p class={styles.copyright}>&copy;codeit - 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
