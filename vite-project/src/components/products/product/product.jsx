import "./product.css";
import { ItemImage } from "../itemImage/itemImage";
import { Likes } from "../likes/likes";

const toCurrency = (price, currency = "ko-KR") =>
  new Intl.NumberFormat(currency).format(price);

export const Product = ({ item }) => {
  return (
    <div className="product">
      <ItemImage images={item.images} />
      <div className="product__info">
        <span className="product__name">{item.name}</span>
        <span className="product__price">{toCurrency(item.price)}</span>
        <Likes likeCount={item.favoriteCount} />
      </div>
    </div>
  );
};
