import "./ItemsList.css";
import IcHeart from "../../../assets/icon/ic_heart.svg";

function Item({ item, itemsSection }) {
  const { name, descripton, price, images, favoriteCount, createdAt } = item;

  return (
    <div className={`Item ${itemsSection}`}>
      <img className={`ItemImg ${itemsSection}`} src={images} alt={name} />
      <div className={`ItemInfo ${itemsSection}`}>
        <div className={`ItemText ${itemsSection}`}>
          <div className="ItemTitle">{name}</div>
          <div className="ItemPrice">{price}</div>
        </div>
        <div className={`ItemHeart ${itemsSection}`}>
          <img src={IcHeart} alt="heart icon" />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
}

function ItemsList({ items, itemsSection }) {
  return (
    <ul className={`ItemsList ${itemsSection}`}>
      {items.map((item) => (
        <li key={item.id}>
          <Item itemsSection={itemsSection} item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;
