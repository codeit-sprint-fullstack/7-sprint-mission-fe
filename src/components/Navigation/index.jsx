import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/board" className={styles.boardLink}>
        자유 게시판
      </Link>
      <Link to="/items" className={styles.itemsLink}>
        중고마켓
      </Link>
    </nav>
  );
};
