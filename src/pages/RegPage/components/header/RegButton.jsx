import { Link } from "react-router-dom";
import { registerItem } from "../../../../api/api";
import "./RegButton.css";

function RegButton({ itemData }) {
  const onClick = async (e) => {
    console.log(`itemData: ${itemData.name}`);
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", itemData.images);
    formData.append("name", itemData.name);
    formData.append("description", itemData.description);
    formData.append("price", itemData.price);
    formData.append("tags", itemData.tags);
    const newItem = await registerItem(formData);
  };
  return (
    <button className="regButton" onClick={onClick}>
      <Link to={`/products/${itemData.price}`}>등록</Link>
    </button>
  );
}

export default RegButton;
