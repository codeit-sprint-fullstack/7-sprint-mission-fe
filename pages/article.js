import ArticleSection from "@/components/ArticleSection";
import BestArticleSection from "@/components/BestArticleSection";
import styles from "@/styles/Article.module.css";

export default function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.articleBox}>
        <BestArticleSection />
        <ArticleSection />
      </div>
    </div>
  );
}
