// components/BestArticles.js
import { formatKoreanDate } from "@/utils/formatKrDate";
import styles from "./BestArticles.module.css";
import SafeImage from "./SafeImage"; // 이미지 placeholder 처리 시 사용

export default function BestArticles({ articles }) {
  return (
    <section className={styles.bestArticles}>
      <h2 className={styles.sectionTitle}>베스트 게시글</h2>
      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <div className={styles.badge}>🏆 Best</div>
            <div className={styles.content}>
              <div className={styles.bestHeader}>
                <p className={styles.title}>{article.title}</p>
                <SafeImage
                  src={article.image}
                  alt={article.title}
                  width={80}
                  height={80}
                  className={styles.thumbnail}
                />
              </div>
              <div className={styles.footer}>
                <span className={styles.writer}>{article.user.nickname}</span>
                <span className={styles.likes}>
                  ❤️ {article.likeCount > 999 ? "999+" : article.likeCount}
                </span>
                <span className={styles.date}>
                  {formatKoreanDate(article.createdAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
