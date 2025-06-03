import React, { useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { useAllPageSize } from "../../../hooks/useAllPageSize";
import ItemCard from "./ItemCard";
import sortIconMobile from "../../../assets/icons/ic_sort_mobile.svg";
import sortIconArrowDown from "../../../assets/icons/ic_arrow_down.svg";
import searchIcon from "../../../assets/icons/ic_search.svg";
import DropdownList from "../../../components/UI/DropdownList";
import PaginationBar from "../../../components/UI/PaginationBar";

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const pageSize = useAllPageSize();

  const { itemList, totalCount, loading, error } = useProducts({
    orderBy,
    page,
    pageSize,
    keyword,
  });

  const totalPageNum = Math.ceil(totalCount / pageSize);

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
    setPage(1);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    setPage(1);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const convertToKorean = (orderBy) => {
    switch (orderBy) {
      case "recent":
        return "최신 순";
      case "favorite":
        return "좋아요 순";
      default:
        return "최신 순";
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">판매 중인 상품</h1>

        <div className="searchBarWrapper">
          <img src={searchIcon} alt="검색" className="searchIcon" />
          <input
            className="searchBarInput"
            placeholder="검색할 상품을 입력해 주세요"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div to="/additem" className="createItemButton button">
          상품 등록하기
        </div>
        <div className="sortButtonWrapper">
          <button
            className="sortDropdownTriggerButton"
            onClick={toggleDropdown}
          >
            <div className="sortBtn">
              <span>{convertToKorean(orderBy)}</span>
              <img src={sortIconArrowDown} alt="정렬" className="sortIconArrowDown" />
            </div>
            <img src={sortIconMobile} alt="모바일 정렬" className="mobileSortBtn" />
          </button>
          {isDropdownVisible && (
            <DropdownList onSortSelection={handleSortSelection} />
          )}
        </div>
      </div>

      <div className="allItemsCardSection">
        {loading && <div>로딩 중...</div>}
        {error && <div>에러 발생: {error.message}</div>}
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>

      <div className="paginationBarWrapper">
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItemsSection;