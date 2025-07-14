import { Link } from "react-router-dom";
import IcFacebook from "../assets/icon/ic_facebook.png";
import IcInstagram from "../assets/icon/ic_instagram.png";
import IcTwitter from "../assets/icon/ic_twitter.png";
import IcYoutube from "../assets/icon/ic_youtube.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-text">@codeit - 2024</div>
        <div className="footer-links">
          <div className="link">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <div className="link">
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
        <div className="footer-icons">
          <div
            className="icon link"
            target="_blank"
            href="https://www.facebook.com"
          >
            <img src={IcFacebook} alt="페이스북 아이콘" />
          </div>
          <div className="icon link" target="_blank" href="https://twitter.com">
            <img src={IcTwitter} alt="트위터 아이콘" />
          </div>
          <div
            className="icon link"
            target="_blank"
            href="https://www.youtube.com"
          >
            <img src={IcYoutube} alt="유투브 아이콘" />
          </div>
          <div
            className="icon link"
            target="_blank"
            href="https://www.instagram.com"
          >
            <img src={IcInstagram} alt="인스타그램 아이콘" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
