import axios from "axios";
import { getBoardById } from "@/pages/api/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { relGetArticlesById } from "@/pages/api/articles";

export default function useGetBoardById() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState();

  useEffect(() => {
    if (!id) return;
    relGetArticlesById(id).then((data) => setArticle(data));
  }, [id]);

  return { article, setArticle };
}
