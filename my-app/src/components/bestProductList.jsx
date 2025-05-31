// src/components/BestProductList.jsx
import { useEffect, useState } from "react";
import { getProductList } from "../utils/productService.js";
import ProductCard from "./productCard";
import styles from "./BestProductList.module.css";
import SkeletonCard from "./skeletonCard.jsx";
import useWindowWidth from "../hooks/useWindowWidth.js";

const BestProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const width = useWindowWidth();

  const getVisibleCount = () => {
    if (width <= 768) return 1; // Mobile
    if (width <= 1024) return 2; // Tablet
    return 4; // Desktop
  };

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductList(1, 4, "", "favorite"); // 좋아요순
        setProducts(data.list);
        setLoading(false);
      } catch (error) {
        console.error("베스트 상품을 불러오는데 실패했습니다.", error);
        setLoading(false);
      }
    };
    fetchBestProducts();
  }, []);
  const visibleBestProducts = products.slice(0, getVisibleCount());
  return (
    <div className={styles.wrapper}>
      <h2>베스트 상품</h2>
      <div className={styles.list}>
        {loading
          ? Array.from({ length: getVisibleCount() }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : visibleBestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default BestProductList;
