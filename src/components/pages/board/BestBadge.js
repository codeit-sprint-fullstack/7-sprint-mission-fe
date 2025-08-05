import Image from "next/image";
import styles from "./BestBadge.module.css";
export default function BestBadge() {
  return (
    <div className={styles.bestBadgeContainer}>
      <Image
        src={"/images/icons/ic_medal.svg"}
        alt={"메달 이미지"}
        width={16}
        height={16}
      />
      <p className={styles.badgePhrase}>Best</p>
    </div>
  );
}
