import Image from "next/image";
import styles from "./IdArticleContent.module.css";
import IcHeart from "@/public/ic_heart.svg";
import Hearts from "./Hearts";
import DropOption from "./DropOption";
import dateFormat from "@/utils/dateFormat";

export default function IdArticleContent({ data }) {
  return (
    <div className={styles.articleContent}>
      <div className={styles.header}>
        <div className={styles.titleHeader}>
          <div className={styles.title}>{data.title}</div>
          <DropOption />
        </div>
        <div className={styles.info}>
          <div className={styles.user}>
            <Image
              className={styles.userImg}
              src={"/user-default-img.svg"}
              width={40}
              height={40}
              alt="유저 이미지"
            />
            <div className={styles.nickname}>{data.user.nickname}</div>
            <div className={styles.date}>{dateFormat(data.updatedAt)}</div>
          </div>
          <div className={styles.line}></div>
          <Hearts
            heartId={data.AHeart.id}
            articleId={data.id}
            heartCount={data._count.AHeart}
            size="big"
          />
        </div>
        <div className={styles.longLine}></div>
      </div>
      <div className={styles.textContent}>{data.content}</div>
    </div>
  );
}
