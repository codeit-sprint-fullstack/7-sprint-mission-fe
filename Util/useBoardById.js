import axios from "axios";
import { getBoardById } from "@/pages/api/product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useGetBoardById() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState();

  useEffect(() => {
    if (!id) return;
    getBoardById(id).then((data) => setArticle(data));
  }, [id]);

  return { article };
}
