import { useState } from "react";
import Items from "../component/items/items";
import "./pandaMaket.css";
import { useEffect } from "react";
import Pagination from "../component/pagination/pagination";
const PandaMaket = () => {
  const [ItemsCount, setItemsCount] = useState(4);
  const [sort, setSort] = useState("latest");
  const [salesItem, setSalesItem] = useState(10);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    const newStart = startPage + 5;
    setStartPage(newStart);
    setCurrentPage(newStart);
  };

  const handlePrevClick = () => {
    if (startPage > 1) {
      const newStart = Math.max(1, startPage - 5);
      setStartPage(newStart);
      setCurrentPage(newStart);
    }
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const updatedItems = () => {
      const width = window.innerWidth;
      if (width >= 375 && width <= 743) {
        setItemsCount(1); // Mobile
        setSalesItem(4);
      } else if (width >= 744 && width <= 1199) {
        setItemsCount(2); // Tablet
        setSalesItem(6);
      } else if (width >= 1200) {
        setItemsCount(4); // PC
        setSalesItem(10);
      }
    };
    updatedItems();
    const result = window.addEventListener("resize", updatedItems);
    return result;
  }, []);
  return (
    <>
      <div className="PandaMaketTopLevel">
        <div className="BestItemsBox">
          <div>
            <p className="PandaMaketItemsLabel">베스트 상품</p>
          </div>
          <div className="BestItemList">
            {Array.from({ length: ItemsCount }).map((_, i) => (
              <Items key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="PandaMaketMiddleLevel">
        <div className="SalesItemsBox">
          <div className="salesHeaderContainer ">
            <div className="salesTitleWrapper ">
              <p className="PandaMaketItemsLabel">판매 중인 상품</p>
            </div>
            <div className="salesControlGroup">
              <input
                placeholder={"검색할 상품을 입력해주세요"}
                className="salesSearch"
              ></input>
              <span className="productRegistration">상품 등록하기</span>
              <select
                value={sort}
                onChange={handleSortChange}
                className="sortStyle"
              >
                <option value="latest">최신순</option>
                <option value="likes">좋아요순</option>
              </select>
            </div>
          </div>
        </div>
        <div className="SalesItemList">
          {Array.from({ length: salesItem }).map((_, i) => (
            <Items key={i} className="SalesItemImg" />
          ))}
        </div>
      </div>
      <div>
        <Pagination
          startPage={startPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onNext={handleNextClick}
          onPrev={handlePrevClick}
        />
      </div>
    </>
  );
};
export default PandaMaket;
