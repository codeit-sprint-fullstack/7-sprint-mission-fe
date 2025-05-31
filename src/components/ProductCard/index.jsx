import favoriteIcon from "../../assets/icons/ic_heart.svg";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ src, name, price, favoriteCount }) => {
  return (
    <section className={styles.card}>
      <img className={styles.productImage} src={src} alt={name} />
      <h3 className={styles.price}>{name}</h3>
      <p className={styles.price}>{price}원</p>
      <div className={styles.like}>
        <button className={styles.likeButton}>
          <img className={styles.likeImage} src={favoriteIcon} />
        </button>
        <p className={styles.likeCount}>{favoriteCount}</p>
      </div>
    </section>
  );
};
