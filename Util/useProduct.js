import { useState, useEffect } from "react";
import { getProductById } from "@/pages/api/product";

export default function useProduct(id) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (!id) return;
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  return { product };
}
