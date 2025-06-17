import React from "react";
import styles from "./productCard.module.css";
import productPlaceHolder from "../assets/logos/panda_question.svg";
// import productPlaceHolder from "../assets/landscape-placeholder-svgrepo-com.svg";

const ProductCard = ({ product, onImageClick }) => {
  const { name, price, images: imageUrls, favoriteCount } = product;
  const rawUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : null;
  const imgUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `http://localhost:5500${rawUrl}`
    : productPlaceHolder;

  // console.log(rawUrl);
  // console.log(`${import.meta.env.VITE_API_URL}${rawUrl}`);
  // const imgUrl = imageUrls && imageUrls.length > 0 ? imageUrls[0] : productPlaceHolder;

  const handleXBoxImage = (e) => {
    e.target.src = productPlaceHolder;
  };
  return (
    <div className={styles.card}>
      <img
        src={imgUrl}
        alt={name}
        className={styles.image}
        onError={handleXBoxImage}
        onClick={() => onImageClick(product)}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>{price.toLocaleString()}원</p>
        <p className={styles.likes}>❤️ {favoriteCount ?? 0}</p>
      </div>
    </div>
  );
};

export default ProductCard;
