import Pagination from "../../component/pagination/pagination.jsx";
import SalesHeader from "../../component/salesHeader/salesHeader.jsx";
import Items from "../../component/items/items.jsx";
import { useState } from "react";
const Selling = () => {
  const [bestItemCount, setBestItemCount] = useState(4);
  const [sort, setSort] = useState("recent");
  const [salesItemCount, setSalesItemCount] = useState(10);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [getBestItem, setGetBestItem] = useState([]);
  const [salesItems, setsalesItems] = useState([]);
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
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products?keyword=${e.target.value}`
        );
        const data = await res.json();
        setsalesItems(data.list || []);
      } catch (err) {
        console.error("판매 상품 가져오기 실패:", err);
      }
    }
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <>
      <div className="PandaMaketMiddleLevel">
        <div className="SalesItemsBox">
          <SalesHeader
            sort={sort}
            onSortChange={handleSortChange}
            onSearch={handleSearch}
          />
          <div className="SalesItemList">
            {salesItems.map((item) => (
              <Items
                key={item.id}
                name={item.name}
                price={item.price}
                favoriteCount={item.favoriteCount}
                image={item.images[0]}
                className={"ItemImgSales"}
              />
            ))}
          </div>
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

export default Selling;
