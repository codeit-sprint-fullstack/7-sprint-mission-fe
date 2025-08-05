import { fetchCommentList } from "@/pages/api/product";
import { useEffect, useState } from "react";

export default function useComment() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentList().then((data) => setComments(data));
  }, []);

  return { comments, setComments };
}
