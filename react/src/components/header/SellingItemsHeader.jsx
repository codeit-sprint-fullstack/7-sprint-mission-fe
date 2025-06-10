import SearchBox from "./SearchBox";
import OrderByBox from "./OrderByBox";
import "./SellingItemsHeader.css";
import ItemRegBox from "./ItemRegBox";

function SellingItemsHeader({
  value,
  orderBy,
  onSearchValueChange,
  onOrderByChange,
}) {
  return (
    <div className="SellingItemsHeader">
      <h2 className="SectionTitle">판매 중인 상품</h2>
      <SearchBox value={value} onChange={onSearchValueChange} />
      <ItemRegBox />
      <OrderByBox orderBy={orderBy} onChange={onOrderByChange} />
    </div>
  );
}

export default SellingItemsHeader;
