import { useState, useEffect } from "react";
import Items from "../../component/items/items.jsx";
import Pagination from "../../component/pagination/pagination.jsx";
import SalesHeader from "../../component/salesHeader/salesHeader.jsx";
import { fetchSalesItems, fetchBestItems, searchItems } from "../../api/api.js";
import "./pandaMaket.css";

const PandaMaket = () => {
  const DEVICE_CONFIG = {
    Mobile: { best: 1, sales: 4 },
    Tablet: { best: 2, sales: 6 },
    PC: { best: 4, sales: 10 },
    Sort: { newest: "recent", like: "favorite" },
  };

  const [bestItemCount, setBestItemCount] = useState(DEVICE_CONFIG.PC.best);
  const [sort, setSort] = useState("recent");
  const [salesItemCount, setSalesItemCount] = useState(10);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [getBestItem, setGetBestItem] = useState([]);
  const [salesItems, setSalesItems] = useState([]);

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

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      const data = await searchItems(keyword);
      setSalesItems(data);
    }
  };

  const loadSalesItems = async () => {
    const data = await fetchSalesItems({
      page: currentPage,
      pageSize: salesItemCount,
      orderBy: sort,
    });
    setSalesItems(data);
  };

  const loadBestItems = async () => {
    const data = await fetchBestItems({
      pageSize: bestItemCount,
    });
    setGetBestItem(data);
  };

  const updatedItems = () => {
    const width = window.innerWidth;
    if (width >= 375 && width <= 743) {
      setBestItemCount(1); // Mobile
      setSalesItemCount(4);
    } else if (width >= 744 && width <= 1199) {
      setBestItemCount(2); // Tablet
      setSalesItemCount(6);
    } else if (width >= 1200) {
      setBestItemCount(4); // PC
      setSalesItemCount(10);
    }
  };

  useEffect(() => {
    loadSalesItems();
  }, [currentPage, salesItemCount, sort]);

  useEffect(() => {
    loadBestItems();
  }, [bestItemCount]);

  useEffect(() => {
    updatedItems();
    window.addEventListener("resize", updatedItems);
    return () => {
      window.removeEventListener("resize", updatedItems);
    };
  }, []);

  return (
    <>
      <div className="PandaMaketTopLevel">
        <div className="BestItemsBox">
          <div>
            <p className="PandaMaketItemsLabel">베스트 상품</p>
          </div>
          <div className="BestItemList">
            {getBestItem.map((item) => (
              <Items
                key={item.id}
                name={item.name}
                price={item.price}
                favoriteCount={item.favoriteCount}
                image={item.images[0]}
              />
            ))}
          </div>
        </div>
      </div>

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

export default PandaMaket;
