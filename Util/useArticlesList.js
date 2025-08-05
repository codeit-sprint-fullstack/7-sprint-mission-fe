import { getArticleList } from "@/pages/api/product";
import { useEffect, useState } from "react";
import { realGetArticles } from "@/pages/api/articles";

export default function useArticleList(page, pageSize, orderBy = "recent") {
  const [articleList, setarticleList] = useState([]);

  useEffect(() => {
    realGetArticles(page, pageSize, orderBy).then((data) =>
      setarticleList(data.list || [])
    );
  }, [page, pageSize, orderBy]);

  return { articleList, setarticleList };
}
