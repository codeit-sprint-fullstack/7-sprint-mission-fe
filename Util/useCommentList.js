import { getCommentListByAricleId } from "@/pages/api/product";
import { useEffect, useState } from "react";
import { realGetCommentList } from "@/pages/api/articles";

export default function useCommentList(articleId) {
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    console.log("id값넘어감???????????", articleId);
    if (!articleId) return;
    const data = await realGetCommentList(articleId);
    if (!data) return;
    setCommentList(data.list || []);
  };

  useEffect(() => {
    if (articleId) {
      fetchComments();
    }
  }, [articleId]);

  return { commentList, setCommentList, refetchComments: fetchComments };
}
