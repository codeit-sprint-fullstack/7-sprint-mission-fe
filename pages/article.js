import ArticleSection from "@/components/ArticleSection";
import BestArticleSection from "@/components/BestArticleSection";
import { setPageUrl, useUrl } from "@/lib/UrlContext";
import { useRouter } from "next/router";
import styles from "@/styles/Article.module.css";

export default function Article() {
  const router = useRouter();
  const { setUrl } = useUrl();
  setUrl(router.pathname);

  return (
    <div className={styles.article}>
      <div className={styles.articleBox}>
        <BestArticleSection />
        <ArticleSection />
      </div>
    </div>
  );
}
