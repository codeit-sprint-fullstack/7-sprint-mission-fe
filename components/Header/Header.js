"use client";
import logoImg from "@/public/assets/panda_logo.svg";
import { PATH } from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftbig}>
        <Link href={PATH.index()}>
          <div className={styles.left}>
            <Image src={logoImg} alt="판다마켓 로고" width={32} height={32} />
            <span className={styles.logoText}>판다마켓</span>
          </div>
        </Link>
        <NavMenu />
      </div>
      <div className={styles.right}>
        <UserMenu />
      </div>
    </header>
  );
}
