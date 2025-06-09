// src/hooks/useProducts.js
import { useState, useEffect } from "react";
import { fetchProducts } from "../api/product.js";

export default function useProducts({ keyword, orderBy, page, pageSize }) {
  const [raw, setRaw] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1) 데이터 fetch
  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => setRaw(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // 2) 필터·정렬·페이징
  useEffect(() => {
    let list = raw.filter((p) => p.name.includes(keyword));
    list = list.sort((a, b) =>
      orderBy === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : (b._count.likedBy || 0) - (a._count.likedBy || 0)
    );
    setTotalCount(list.length);

    //내가 원는 형태로 매핑
    const pageItems = list
      .slice((page - 1) * pageSize, page * pageSize)
      .map((p) => ({
        ...p,
        images: p.imageUrls,
        favoriteCount: p._count.likedBy ?? 0,
      }));

    setFiltered(pageItems);
  }, [raw, keyword, orderBy, page, pageSize]);

  return { products: filtered, totalCount, loading };
}
