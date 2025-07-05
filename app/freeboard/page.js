import ArticleList from "@/components/ArticleList";
import BestArticles from "@/components/BestArticles";
import { getArticlePath } from "@/constants/api";

export default async function FreeBoard({ searchParams }) {
  const page = searchParams.page || 1;

  const bestRes = await fetch(
    getArticlePath({ page: 1, pageSize: 3, orderBy: "like" }),
    { cache: "no-store" }
  );
  const bestData = await bestRes.json();

  const recentRes = await fetch(getArticlePath(), { cache: "no-store" });
  const recentData = await recentRes.json();

  // console.log(data); //list, totalCount

  return (
    <>
      <h1>자유게시판 영역</h1>
      <BestArticles articles={bestData.list.slice(0, 3)} />
      <ArticleList
        articles={recentData.list}
        totalCount={recentData.totalCount}
        currentPage={page}
      />
    </>
  );
}
