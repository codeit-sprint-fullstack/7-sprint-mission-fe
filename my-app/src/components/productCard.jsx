import styles from "./productCard.module.css";
import productPlaceHolder from "../assets/landscape-placeholder-svgrepo-com.svg";

const ProductCard = ({ product,onImageClick }) => {
  const { name, price, images, favoriteCount } = product;
  const imgUrl = images && images.length > 0 ? images[0] : productPlaceHolder;

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
