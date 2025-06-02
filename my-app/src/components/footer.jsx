import { Link } from "react-router-dom";
import { PATH } from "../utils/path";
import styles from "./footer.module.css";

const Footer = () => {
  const socialLinks = [
    { href: "https://facebook.com", icon: "facebook" },
    { href: "https://twitter.com", icon: "twitter" },
    { href: "https://youtube.com", icon: "youtube" },
    { href: "https://instagram.com", icon: "instagram" },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>©codeit - 2024</div>

      <div className={styles.center}>
        <Link to={PATH.privacy()} className={styles.link}>
          Privacy Policy
        </Link>
        <Link to={PATH.faq()} className={styles.link}>
          FAQ
        </Link>
      </div>

      <div className={styles.right}>
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            aria-label={`${link.icon} icon`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-${link.icon}`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
