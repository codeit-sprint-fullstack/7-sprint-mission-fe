import ArticleList from "@/components/ArticleList";
import BestArticles from "@/components/BestArticles";
import { ORDER_BY, PAGE_SIZE } from "@/constants";
import { getArticlePath } from "@/constants/apiPath";
import { mapArticlesWithPlaceholder } from "@/utils/placeholderMapping";

export default async function FreeBoard({ searchParams }) {
  const pageParam = await searchParams;
  const page = Number(pageParam?.page || 1);
  const pageSize = Number(PAGE_SIZE) || 5;
  const orderBy = ORDER_BY || "recent";

  const bestRes = await fetch(
    getArticlePath({ page: 1, pageSize: 3, orderBy: "like" }),
    { next: { revalidate: 60 } } //베스트 게시글은 60초에 한번만
  );
  const bestData = await bestRes.json();
  const bestArticles = mapArticlesWithPlaceholder(bestData.list);

  const recentRes = await fetch(getArticlePath({ page, pageSize, orderBy }), {
    cache: "no-store",
  });
  const recentData = await recentRes.json();
  const recentArticles = mapArticlesWithPlaceholder(recentData.list);

  // console.log(data); //list, totalCount

  return (
    <>
      <h1>자유게시판 영역</h1>
      <BestArticles articles={bestArticles} />
      <ArticleList
        articles={recentArticles}
        totalCount={recentData.totalCount}
        currentPage={page}
      />
    </>
  );
}
