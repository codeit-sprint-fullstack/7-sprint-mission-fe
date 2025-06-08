// src/pages/UsedMarketPage.jsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/product.js";
import { useNavigate } from "react-router-dom";
import { PATH } from "../utils/path.js";
import useWindowWidth from "../hooks/useWindowWidth.js";

import SearchBar from "../components/searchBar.jsx";
import KeywordNoResult from "../components/keywordNoResult.jsx";
import ProductList from "../components/productList.jsx";
import Pagination from "../components/pagination.jsx";
import ProductModal from "../components/productModal.jsx";

import styles from "./UsedMarketPage.module.css";

export default function UsedMarketPage() {
  const navigate = useNavigate();
  const width = useWindowWidth();
  const pageSize = width <= 768 ? 4 : width <= 1024 ? 6 : 10;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [orderBy, setOrderBy] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const [modalProd, setModalProd] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(); // back엔드에서 _count 포함
        // 1) 검색 필터
        let list = data.filter((p) => p.name.includes(keyword));
        // 2) 정렬 //추후 백엔드에서 분류할예정
        list = list.sort((a, b) =>
          orderBy === "latest"
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : (b._count.likedBy || 0) - (a._count.likedBy || 0)
        );
        setTotalCount(list.length);
        // 3) 페이징
        setProducts(list.slice((page - 1) * pageSize, page * pageSize));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [keyword, orderBy, page, pageSize]);

  const handleSearch = (k) => {
    setKeyword(k);
    setPage(1);
  };
  const handleSort = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };
  const handlePage = (p) => setPage(p);
  const openModal = (p) => setModalProd(p);
  const closeModal = () => setModalProd(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>판매 중인 상품</h1>
        <div className={styles.controls}>
          <SearchBar onSearch={handleSearch} />
          <button
            className={styles.addButton}
            onClick={() => navigate(PATH.productRegister())}
          >
            상품 등록하기
          </button>
          <select
            className={styles.sortSelect}
            value={orderBy}
            onChange={handleSort}
          >
            <option value="latest">최신순</option>
            <option value="popular">인기순</option>
          </select>
        </div>
      </header>

      {!loading && products.length === 0 ? (
        <KeywordNoResult keyword={keyword} />
      ) : (
        <ProductList
          products={products.map((p) => ({
            ...p,
            images: p.imageUrls,
            favoriteCount: p._count.likedBy ?? 0,
          }))}
          loading={loading}
          pageSize={pageSize}
          onImageClick={openModal}
        />
      )}

      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePage}
      />

      {modalProd && (
        <ProductModal isOpen onRequestClose={closeModal} product={modalProd} />
      )}
    </div>
  );
}
