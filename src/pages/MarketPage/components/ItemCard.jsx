import HeartIcon from "../../../assets/icons/ic_heart.svg";
import placeholderImg from "../../../assets/images/placeholder/placeholder_item.png";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img
        src={item.images[0]}
        alt={item.name}
        className="itemCardThumbnail"
        onError={e => {
          e.target.onerror = null; // 무한 루프 방지
          e.target.src = placeholderImg; // 상품 이미지가 없을 때 대체 이미지 설정
        }}
      />
      <div className="itemSummary">
        <h2 className="itemName">{item.name}</h2>
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div className="favoriteCount">
          <img src={HeartIcon} alt="찜" style={{ width: 16, height: 16 }} />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;