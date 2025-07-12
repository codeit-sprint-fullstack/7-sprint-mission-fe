// components/ArticleList.js
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import styles from "./ArticleList.module.css";
import { PAGE_SIZE } from "@/constants/index";

export default function ArticleList({ articles, totalCount, currentPage }) {
  return (
    <section>
      <h2 className={styles.sectionTitle}>그냥 게시글</h2>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
      />
    </section>
  );
}
