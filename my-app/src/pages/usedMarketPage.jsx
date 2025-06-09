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
import ProductControls from "../components/productControls.jsx";
import useProducts from "../hooks/useProducts.js";
import { getPageSize } from "../utils/getPageSize.js";

export default function UsedMarketPage() {
  
  const width = useWindowWidth();
  const pageSize = getPageSize(width);

  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const [modal, setModal] = useState(null);
  const { products, totalCount, loading } = useProducts({
    keyword,
    orderBy,
    page,
    pageSize,
  });
  // const [totalCount, setTotalCount] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const handleSearch = (k) => {
    setKeyword(k);
    setPage(1);
  };
  const handleSort = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };
  // const handlePage = (p) => setPage(p);
  const openModal = (p) => setModal(p);
  const closeModal = () => setModal(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>판매 중인 상품</h1>
        <ProductControls
          keyword={keyword}
          onSearch={handleSearch}
          orderBy={orderBy}
          onSort={handleSort}
        />
      </header>

      {!loading && products.length === 0 ? (
        <KeywordNoResult keyword={keyword} />
      ) : (
        <ProductList
          products={products}
          loading={loading}
          pageSize={pageSize}
          onImageClick={openModal}
        />
      )}

      <Pagination
        page={page}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={setPage}
      />

      {modal && (
        <ProductModal isOpen onRequestClose={closeModal} product={modal} />
      )}
    </div>
  );
}
