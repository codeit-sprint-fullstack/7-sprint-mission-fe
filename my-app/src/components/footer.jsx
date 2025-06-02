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
        <a href="/privacy" className={styles.link}>
          Privacy Policy
        </a>
        <a href="/faq" className={styles.link}>
          FAQ
        </a>
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
