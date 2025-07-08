import { getCommentListByAricleId } from "@/pages/api/product";
import { useEffect, useState } from "react";

export default function useCommentList(articleId) {
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    if (!articleId) return;
    const data = await getCommentListByAricleId(articleId);
    setCommentList(data);
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  return { commentList, setCommentList, refetchComments: fetchComments };
}
