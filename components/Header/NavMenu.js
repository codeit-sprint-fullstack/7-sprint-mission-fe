"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { NAV_MENUS } from "@/utils/path";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.menu}>
        {NAV_MENUS.map((menu) => (
          <li key={menu.href}>
            <Link
              href={menu.href}
              className={pathname === menu.href ? styles.active : undefined}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

{
  /* <ul>
  <li>
    <Link href={PATH.index()}>
      <Image src={logoImg} alt="판다마켓 로고" />
      <span>판다마켓</span>
    </Link>
  </li>
  <li>
    <Link href={PATH.freeBoard()}>
      <span>자유게시판</span>
    </Link>
  </li>
  <li>
    <Link href={PATH.secondHandMarket()}>
      <span>중고장터</span>
    </Link>
  </li>
</ul>; */
}
