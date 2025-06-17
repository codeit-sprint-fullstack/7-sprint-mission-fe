import "./itemImage.css";
const DEFAULT_IMAGE =
  "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png";

export const ItemImage = ({ images = [] }) => {
  const hasImages = Array.isArray(images) && images.length > 0;
  const imgSrc = hasImages ? images[0] : DEFAULT_IMAGE;

  return (
    <div className="item-image__wrapper">
      <img className="item-image" src={imgSrc} alt="상품 이미지" />
    </div>
  );
};
