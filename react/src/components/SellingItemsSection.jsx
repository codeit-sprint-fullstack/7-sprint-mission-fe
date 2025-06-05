import { useEffect, useState } from "react";
import PageButtonBox from "./PageButtonBox";
import ItemsList from "./ItemsList";
import { getItems } from "../api.jsx";
import SearchBox from "./SearchBox";
import OrderByBox from "./OrderByBox";

function SellingItemsSection() {
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(100);

  const fetchItems = async (options) => {
    const { list, totalCount } = await getItems(options);
    setItemsCount(totalCount);
    setItems(list);
  };

  const onSearchValueChange = (value) => {
    setSearchValue(value);
  };

  const onOrderByChange = (order) => {
    setOrderBy(order);
  };

  const onPageChange = (num) => {
    setPage(num);
  };

  useEffect(() => {
    fetchItems({ page, orderBy, keyword: searchValue });
  }, [page, orderBy, searchValue]);

  return (
    <div>
      <div className="SellingItemsSection">
        <div className="SellingItemsHeader">
          <h2 className="SectionTitle">판매 중인 상품</h2>
          <SearchBox value={searchValue} onChange={onSearchValueChange} />
          <OrderByBox orderBy={orderBy} onChange={onOrderByChange} />
        </div>
        <ItemsList itemsSection="selling" items={items} />
      </div>
      <PageButtonBox
        page={page}
        itemsCount={itemsCount}
        onClick={onPageChange}
      />
    </div>
  );
}

export default SellingItemsSection;
