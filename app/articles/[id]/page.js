//app/articles/[id]/page.js
import { API_BASE_URL } from "@/constants";
import ArticleDetail from "@/components/ArticleDetail";

export default async function ArticlePage({ params }) {
  const res = await fetch(`${API_BASE_URL}/articles/${params.id}`, { cache: "no-store" });
  if (!res.ok) {
    // 에러 처리 (404 페이지 이동 등)
    return <div>존재하지 않는 게시글입니다.</div>;
  }
  const article = await res.json();

  return <ArticleDetail article={article} />;
}
