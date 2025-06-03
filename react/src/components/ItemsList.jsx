import "./ItemsList.css";
import "../reset.css";

function ItemsListItem({ item, itemsSection }) {
  const { name, descripton, price, images, favoriteCount, createdAt } = item;

  return (
    <div className={`ItemsListItem ${itemsSection}`}>
      <img className={`ItemImg ${itemsSection}`} src={images} alt={name} />

      <div className={`ItemInfo ${itemsSection}`}>
        <div>{name}</div>
        <div>{price}</div>
        <div>{favoriteCount}</div>
      </div>
    </div>
  );
}

function ItemsList({ items, itemsSection }) {
  return (
    <ul className={`ItemsList ${itemsSection}`}>
      {items.map((item) => (
        <li key={item.id}>
          <ItemsListItem itemsSection={itemsSection} item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;
