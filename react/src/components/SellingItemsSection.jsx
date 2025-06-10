import { useEffect, useState } from "react";
import PageButtonBox from "./PageButtonBox";
import ItemsList from "./ItemsList";
import { getItems } from "../api.jsx";
import "./SellingItemsSection.css";
import SellingItemsHeader from "./header/SellingItemsHeader.jsx";

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

  // SellingItemsHeader를 컴포로 빼야 할지 말지가 고민입니다.
  // 빼게 도면 서치박스랑 오더박스에 있는 스테이트 2개랑 함수 2개를 프롭스로 한 번 더 내려줘야 하는데
  // 이러면 너무 여러번 번거롭게 내려가는 게 아닌가 싶기도 하고요..?

  return (
    <div id="Rerendering">
      <div className="SellingItemsSection">
        <SellingItemsHeader
          value={searchValue}
          orderBy={orderBy}
          onOrderByChange={onOrderByChange}
          onSearchValueChange={onSearchValueChange}
        />
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
