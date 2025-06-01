import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard";
import { getProductList } from "../../api/productApi";
import { getPageSizeForWidth } from "../../../utils/screenUtils/getPageSizeForWidth";
import styles from "./ProductList.module.css";
import { Button } from "../Button";
import { Pagenation } from "../Pagenation";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSizeForWidth);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (page, pageSize, orderBy, keyword) => {
    try {
      const data = await getProductList(page, pageSize, orderBy, keyword);
      setTotalCount(data.totalCount);
      setProducts(data.list);
    } catch (err) {
      console.error("상품 조회 실패", err);
    }
  };

  // 정렬 기준(<select>) 변경 시 호출되는 함수
  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
    setPage(1);
  };

  // 검색 입력창(<input>)의 내용이 변경될 때마다 호출되는 함수
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // 검색 폼(<form>)이 제출될 때 (Enter 키 또는 submit 버튼 클릭 시) 호출되는 함수
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setKeyword(searchInput);
    setPage(1);
  };

  // page, pageSize, orderBy, keyword 상태 중 하나라도 변경되면 fetchData 함수를 호출하여 데이터를 새로 가져옴
  useEffect(() => {
    fetchData(page, pageSize, orderBy, keyword);
  }, [page, pageSize, orderBy, keyword]);

  // 화면 크기 변경을 감지하여 pageSize와 page 상태를 업데이트하는 useEffect
  useEffect(() => {
    // 화면 크기가 변경될 때 실행될 함수
    const handleResize = () => {
      const newPageSize = getPageSizeForWidth();
      // 이전 pageSize 값을 받아와서 현재 계산된 newPageSize와 다를 경우에만 상태 업데이트
      setPageSize((prevPageSize) => {
        if (prevPageSize !== newPageSize) {
          setPage(1);
          return newPageSize;
        }
        return prevPageSize;
      });
    };

    // 컴포넌트가 화면에 처음 나타날 때 'resize' 이벤트 리스너를 window에 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 화면에서 사라질 때 실행될 클린업 함수
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setPage, setPageSize]);

  return (
    <div className={styles.productListSection}>
      <div className={styles.listHeaderContainer}>
        <h2 className={styles.title}>판매 중인 상품</h2>
        <div className={styles.toolbar}>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="상품을 검색해보세요"
              value={searchInput}
              onChange={handleSearchInputChange}
            ></input>
          </form>
          <Button size="small" color="primary100">
            상품 등록하기
          </Button>
          <select
            className={styles.sortSelect}
            value={orderBy}
            onChange={handleOrderByChange}
          >
            <option className={styles.value} value="recent">
              최신순
            </option>
            <option className={styles.value} value="favorite">
              좋아요순
            </option>
          </select>
        </div>
      </div>
      <ul className={styles.productListGrid}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard
                name={product.name}
                src={product.images[0]}
                price={product.price}
                favoriteCount={product.favoriteCount}
              />
            </li>
          );
        })}
      </ul>
      <Pagenation
        currentPage={page}
        totalPages={parseInt(totalCount / pageSize)}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};
