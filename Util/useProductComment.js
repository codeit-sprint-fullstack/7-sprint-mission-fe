import { getCommentListByProductId } from "@/pages/api/product";
import { useEffect, useState } from "react";
import { getProductCommentList } from "@/pages/api/productItem";

export default function useProductComment(id) {
  const [commentListProduct, setCommentListProduct] = useState([]);

  const fetchComments = async () => {
    if (!id) return;
    const data = await getProductCommentList(id);
    setCommentListProduct(data.list);
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
