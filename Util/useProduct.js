import { useState, useEffect } from "react";
import { getProductById } from "@/pages/api/productItem";

export default function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("상품 정보를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading };
}
