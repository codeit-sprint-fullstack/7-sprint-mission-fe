// components/ArticleCard.js
import SafeImage from "./SafeImage";
import styles from "./ArticleCard.module.css";
import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <div className={styles.card}>
      <Link href={`/articles/${article.id}`} className={styles.link}>
        <div className={styles.left}>
          <h3 className={styles.title}>{article.title}</h3>
          <div className={styles.meta}>
            <span>{article.writer.nickname}</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div className={styles.right}>
          {article.image && (
            <SafeImage
              src={article.image}
              alt={article.title}
              width={60}
              height={60}
              className={styles.thumbnail}
            />
          )}
          <div className={styles.likes}>❤️ {article.likeCount}</div>
        </div>
      </Link>
    </div>
  );
}
