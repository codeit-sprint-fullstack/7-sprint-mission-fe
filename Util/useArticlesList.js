import { getAricleList } from "@/pages/api/product";
import { useEffect, useState } from "react";

export default function useArticleList(sort = "recent") {
  const [articleList, setarticleList] = useState([]);

  useEffect(() => {
    getAricleList(sort).then((data) => setarticleList(data));
  }, [sort]);

  return { articleList, setarticleList };
}
