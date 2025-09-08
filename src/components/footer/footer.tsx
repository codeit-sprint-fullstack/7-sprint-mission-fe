import facebook from "../../assets/social/facebook-logo.svg";
import twitter from "../../assets/social/twitter-logo.svg";
import youtube from "../../assets/social/youtube-logo.svg";
import instar from "../../assets/social/instagram-logo.svg";
import style from "./footer.module.css";
function Footer() {
  return (
    <div className={style.Container}>
      <p className={style.FontColor}>©codeit - 2024</p>
      <div className={style.Center}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={style.IconBox}>
        <img src={facebook} />
        <img src={twitter} />
        <img src={youtube} />
        <img src={instar} />
      </div>
    </div>
  );
}

export default Footer;
