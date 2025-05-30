import React from "react";
import "./footer.css"; // CSS 파일명에 맞게 경로 수정해주세요
import faceBook from "../../assets/image/ic_facebook.png";
import instagram from "../../assets/image/ic_instagram.png";
import twitter from "../../assets/image/ic_twitter.png";
import youtube from "../../assets/image/ic_youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <div className="footer_text">
          <p>©codeit - 2024</p>
        </div>

        <div className="footer_text_center">
          <a className="atag_deco_v2" href="/privacy">
            Privacy Policy
          </a>
          <a className="atag_deco_v2" href="/faq">
            FAQ
          </a>
        </div>

        <div className="footer_gap">
          <a
            href="https://ko-kr.facebook.com/login.php/?login_attempt=1&display=popup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={faceBook} alt="Facebook" />
          </a>
          <a
            href="https://x.com/search-home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter (X)" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.instagram.com/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
