import { getCommentListByProductId } from "@/pages/api/product";
import { useEffect, useState } from "react";

export default function useProductComment(id) {
  const [commentListProduct, setCommentListProduct] = useState([]);

  const fetchComments = async () => {
    if (!id) return;
    const data = await getCommentListByProductId(id);
    setCommentListProduct(data);
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  return {
    commentListProduct,
    setCommentListProduct,
    refetchComments: fetchComments,
  };
}
