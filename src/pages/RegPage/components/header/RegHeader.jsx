import RegButton from "./RegButton";
import "./RegHeader.css";

function RegHeader({ itemData }) {
  return (
    <div className="regHeader">
      <h2 className="regHeaderTitle">상품 등록하기</h2>
      <RegButton itemData={itemData} />
    </div>
  );
}

export default RegHeader;
