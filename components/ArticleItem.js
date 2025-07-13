import Image from "next/image";
import styles from "./ArticleItem.module.css";
import IcHeart from "@/public/ic_heart.svg";

export default function ArticleItem() {
  return (
    <div className={styles.article}>
      <div className={styles.content}>
        <div className={styles.title}>{`title`}</div>
        <Image src={"/default.png"} alt="이미지" width={48} height={48} />
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <Image
            src={"/user-default-img.svg"}
            className={styles.userImg}
            alt="이미지"
            width={24}
            height={24}
          />
          <div className={styles.nickname}>{`nickname`}</div>
          <div className={styles.updatedAt}>{`updatedAt`}</div>
        </div>
        <div className={styles.heart}>
          <Image src={IcHeart} className={styles.heartBtn} alt="이미지" />
          <div className={styles.heartCount}>{`heartCount`}</div>
        </div>
      </div>
    </div>
  );
}
