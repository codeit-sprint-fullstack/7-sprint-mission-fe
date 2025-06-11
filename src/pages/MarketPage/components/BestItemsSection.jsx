import React from "react";
import ItemCard from "./ItemCard";
import { useProducts } from "../../../hooks/useProducts";
import { useBestPageSize } from "../../../hooks/useBestPageSize";

function BestItemsSection() {
  const pageSize = useBestPageSize();
  const { itemList, loading, error } = useProducts({
    orderBy: "favorite",
    page: 1,
    pageSize,
  });

  console.log("itemList", itemList);

  return (
    <div className="bestItemsContainer">
      <h1 className="sectionTitle">베스트 상품</h1>
      <div className="bestItemsCardSection">
        {loading && <div>로딩 중...</div>}
        {error && <div>에러 발생: {error.message}</div>}
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;