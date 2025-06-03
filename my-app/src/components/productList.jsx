import ProductCard from "./productCard.jsx";
import styles from "./productList.module.css";
import SkeletonCard from "./skeletonCard.jsx";

const ProductList = ({ products, loading, pageSize, onImageClick }) => {
  return (
    <div className={styles.list}>
      {loading
        ? Array.from({ length: pageSize }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))
        : products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={onImageClick}
            />
          ))}
    </div>
  );
};

export default ProductList;
