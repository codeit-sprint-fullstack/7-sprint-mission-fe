
import BestProductList from "../components/bestProductList.jsx";
import ProductList from "../components/productList.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { getProductList } from "../utils/productService.js";
import styles from "./marketPage.module.css";
import SearchBar from "../components/searchBar.jsx";
import useWindowWidth from "../hooks/useWindowWidth.js";
import Pagination from "../components/pagination.jsx";
import KeywordNoResult from "../components/keywordNoResult.jsx";

const SORT_OPTIONS = {
  recent: "최신순",
  favorite: "좋아요순",
};

const MarketPage = () => {
  const width = useWindowWidth();
  const getPageSize = () => {
    if (width <= 768) return 4;
    if (width <= 1024) return 6;
    return 10;
  };
  const pageSize = getPageSize();
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [prevPageSize, setPrevPageSize] = useState(pageSize);

  useEffect(() => {
    if (pageSize !== prevPageSize) {
      const currentItemStartIndex = (page - 1) * prevPageSize;
      const newPage = Math.floor(currentItemStartIndex / pageSize) + 1;
      setPage(newPage);
      setPrevPageSize(pageSize);
    }
  }, [pageSize]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductList(page, pageSize, keyword, orderBy);
        setProducts(data.list);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error("상품을 불러오는데 실패했습니다.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [orderBy, keyword, page, pageSize]);
  const handleSortChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };
  const handleSearch = (newKeyword) => {
    setKeyword(newKeyword);
    setPage(1);
  };
  const handlePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <BestProductList />
      <div className={styles.topBar}>
        <h2>판매 중인 상품</h2>
        <div className={styles.topBarRight}>
          <SearchBar onSearch={handleSearch} />
          <select
            value={orderBy}
            onChange={handleSortChange}
            className={styles.sortSelect}
          >
            {Object.entries(SORT_OPTIONS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!loading && products.length === 0 ? (
        <KeywordNoResult keyword={keyword} />
      ) : (
        <ProductList
          products={products}
          loading={loading}
          pageSize={pageSize}
        />
      )}

      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePage}
      />
    </div>
  );
};

export default MarketPage;
