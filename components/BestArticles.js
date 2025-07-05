// components/BestArticles.js
import Image from "next/image";
import styles from "./BestArticles.module.css";

export default function BestArticles({ articles }) {
  return (
    <section className={styles.bestArticles}>
      {articles.map((article) => (
        <div key={article.id} className={styles.card}>
          <span>🏆 Best</span>
          <p>{article.title}</p>
          <Image src={article.image} alt={article.title} width={100} height={100} />
        </div>
      ))}
    </section>
  );
}
