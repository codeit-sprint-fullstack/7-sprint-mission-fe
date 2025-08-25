//app/articles/[id]/page.js

import ArticleDetail from "@/components/Article/ArticleDetail";
import { API_BASE_URL } from "@/constants";
import { cookies } from "next/headers";

export default async function ArticlePage({ params }) {
  const { id } = await params;

  const cookieStore = await cookies(); // Next.js에서 서버에서 쿠키 직접 추출
  const cookieString = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${API_BASE_URL}/articles/${id}`, {
    cache: "no-store",
    headers: {
      Cookie: cookieString, // 수동으로 쿠키 전달!
    },
  });

  if (!res.ok) {
    return <div>존재하지 않는 게시글입니다.</div>;
  }

  const article = await res.json();
  console.log(article);
  return <ArticleDetail article={article} />;
}

// import ArticleDetail from "@/components/Article/ArticleDetail";
// import { API_BASE_URL } from "@/constants";

// export default async function ArticlePage({ params }) {
//   const { id } = await params;
//   const res = await fetch(`${API_BASE_URL}/articles/${id}`, {
//     cache: "no-store",
//     credentials: "include",
//   });
//   if (!res.ok) {
//     //@TODO 에러 처리 (404 페이지 이동 등)
//     return <div>존재하지 않는 게시글입니다.</div>;
//   }
//   const article = await res.json();
//   console.log(article);
//   return <ArticleDetail article={article} />;
// }
