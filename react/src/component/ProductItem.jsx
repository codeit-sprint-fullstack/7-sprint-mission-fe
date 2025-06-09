import heartIcon from "../assets/ic_heart.svg";
function ProductItem({ item }) {
  console.log(item);
  return (
    <div className="productItem">
      <div className="imgArea">
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div className="infoArea">
        <h4 className="name">{item.name}</h4>
        <p className="price">
          <span>{item.price}</span>원
        </p>
        <p className="likes">
          <img src={heartIcon} alt="좋아요 아이콘" />
          <span>{item.favoriteCount}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
