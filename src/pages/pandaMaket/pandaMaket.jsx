import { useState } from "react";
import Items from "../../component/items/items.jsx";
import "./pandaMaket.css";
import { useEffect } from "react";
import Pagination from "../../component/pagination/pagination.jsx";
import SearchIcon from "../../assets/image/ic_search.svg";
import CustomButton from "../../component/customSelect/customSelect.jsx";
import SalesHeader from "../../component/salesHeader/salesHeader.jsx";

const PandaMaket = () => {
  const [bestItemCount, setBestItemCount] = useState(4);
  const [sort, setSort] = useState("recent");
  const [salesItemCount, setSalesItemCount] = useState(10);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [getBestItem, setGetBestItem] = useState([]);
  const [salesItems, setsalesItems] = useState([]);

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

  const fetchSalesItems = async () => {
    try {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${salesItemCount}&orderBy=${sort}`
      );
      const data = await res.json();
      setsalesItems(data.list || []);
    } catch (err) {
      console.error("판매 상품 가져오기 실패:", err);
    }
  };

  const fetchBestItems = async () => {
    try {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?page=1&pageSize=${bestItemCount}&orderBy=favorite`
      );
      const data = await res.json();
      setGetBestItem(data.list || []);
    } catch (err) {
      console.error("베스트 상품 가져오기 실패:", err);
    }
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
    fetchSalesItems();
  }, [currentPage, salesItemCount, sort]);

  useEffect(() => {
    fetchBestItems();
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
