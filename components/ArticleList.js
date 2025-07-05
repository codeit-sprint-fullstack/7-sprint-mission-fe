// components/ArticleList.js
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import styles from "./ArticleList.module.css";

export default function ArticleList({ articles, totalCount, currentPage }) {
  return (
    <section>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      <Pagination totalCount={totalCount} currentPage={currentPage} pageSize={10} />
    </section>
  );
}
