import { Link } from "react-router-dom";
import "./ItemRegBox.css";

function ItemRegBox() {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <button onClick={onClick}>
      <Link to="/registration" className="linkReg">
        상품 등록하기
      </Link>
    </button>
  );
}

export default ItemRegBox;
