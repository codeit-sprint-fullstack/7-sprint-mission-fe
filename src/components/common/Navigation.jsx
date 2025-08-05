import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link href="/board" className={styles.boardLink}>
        자유 게시판
      </Link>
      <Link href="/products" className={styles.itemsLink}>
        중고마켓
      </Link>
    </nav>
  );
}
