import styles from "./SortOption.module.css";
import Image from "next/image";

export default function SortOption() {
  return (
    <div className={styles.sortOption}>
      최신순
      <Image
        src={"/ic_arrow_down.svg"}
        className={styles.arrowIc}
        width={24}
        height={24}
        alt="화살표"
      />
    </div>
  );
}
