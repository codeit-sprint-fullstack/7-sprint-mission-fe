import Image from "next/image";
import styles from "./ArticleContent.module.css";
import IcHeart from "@/public/ic_heart.svg";

export default function ArticleContent() {
  return (
    <div className={styles.articleContent}>
      <div className={styles.header}>
        <div className={styles.titleHeader}>
          <div className={styles.title}>{`title`}</div>
          <div className={styles.dropOption}>{`drop option`}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.user}>
            <Image />
            <div className={styles.nickname}>{`user name`}</div>
            <div className={styles.date}>{`date`}</div>
          </div>
          <div className={styles.heart}>
            <Image className={styles.heartIc} src={IcHeart} />
            <div className={styles.heartCount}>{`heart count`}</div>
          </div>
        </div>
      </div>
      <div className={styles.textContent}>{`text content`}</div>
    </div>
  );
}
