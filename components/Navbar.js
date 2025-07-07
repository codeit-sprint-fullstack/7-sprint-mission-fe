import PandaLogo from "@/public/panda-logo.svg";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useUrl } from "@/lib/UrlContext";

function PageLink({ link, text }) {
  const { url } = useUrl();

  return (
    <div
      className={`${styles.pageLink} ${link === url ? styles.blueText : ""}`}
    >
      <Link href={link}>{text}</Link>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <div className={`${styles.landingLink} ${styles.Link}`}>
          <Link href="/" className={styles.IconLink}>
            <Image
              className={styles.logoIcon}
              src={PandaLogo}
              alt="판다 로고 아이콘"
            />
          </Link>
          <h1 className={styles.logoTitle}>
            <Link href="/">판다마켓</Link>
          </h1>
        </div>
        <div className={`${styles.pagesLink} ${styles.Link}`}>
          <PageLink link="/article" text={"자유게시판"} />
          <PageLink link="/items" text={"중고마켓"} />
        </div>
        <div className={styles.loginLink}>
          <Link href="/login"> 로그인</Link>
        </div>
      </div>
    </header>
  );
}
