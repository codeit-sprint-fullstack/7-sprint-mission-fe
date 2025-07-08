import { getAricleList } from "@/pages/api/product";
import { useEffect, useState } from "react";

export default function useArticleList() {
  const [articleList, setarticleList] = useState([]);

  useEffect(() => {
    getAricleList().then((data) => setarticleList(data));
  }, []);

  return { articleList, setarticleList };
}
