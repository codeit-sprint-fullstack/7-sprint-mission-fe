//app/articles/[id]/page.js
import ArticleDetail from "@/components/Article/ArticleDetail";
import { API_BASE_URL } from "@/constants";

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const res = await fetch(`${API_BASE_URL}/articles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // 에러 처리 (404 페이지 이동 등)
    return <div>존재하지 않는 게시글입니다.</div>;
  }
  const article = await res.json();

  return <ArticleDetail article={article} />;
}
