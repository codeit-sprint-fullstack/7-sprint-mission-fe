import Image from "next/image";
import styles from "./ArticleItem.module.css";
import Hearts from "./Hearts";

export default function ArticleItem({ article }) {
  console.log(article);
  const updatedAt = article.updatedAt.split("T")[0];
  return (
    <div className={styles.article}>
      <div className={styles.content}>
        <div className={styles.title}>{article.title}</div>
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
          <div className={styles.nickname}>{article.user.nickname}</div>
          <div className={styles.updatedAt}>{updatedAt}</div>
        </div>
        <Hearts
          heartId={article.AHeart[0]}
          articleId={article.id}
          heartCount={article._count.AHeart}
        />
      </div>
    </div>
  );
}
