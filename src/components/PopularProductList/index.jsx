import { ProductCard } from "../ProductCard";
import { getProductList } from "../../api/productApi";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./PopularProductList.module.css";

export const PopularProductList = () => {
  const [products, setProducts] = useState([]);

  // Best 상품에 대한 데이터를 조회하는 함수
  const fetchData = async () => {
    try {
      const data = await getProductList(1, 4, "favorite");
      setProducts(data.list);
    } catch (err) {
      console.error("베스트 상품 조회 실패", err);
    }
  };

  console.log("products 객체", products);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.popularProductList}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              name={product.name}
              src={product.images[0]}
              price={product.price}
              favoriteCount={product.favoriteCount}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
