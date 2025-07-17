import { getCommentListByAricleId } from "@/pages/api/product";
import { useEffect, useState } from "react";
import { relGetArticlesById } from "@/pages/api/articles";

export default function useCommentList(articleId) {
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    if (!articleId) return;
    const data = await relGetArticlesById(articleId);
    setCommentList(data);
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  return { commentList, setCommentList, refetchComments: fetchComments };
}
