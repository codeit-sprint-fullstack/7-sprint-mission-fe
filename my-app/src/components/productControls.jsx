// src/components/ProductControls.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../utils/path.js';
import SearchBar from './searchBar.jsx';
import styles from './productControls.module.css';

export default function ProductControls({
  keyword,
  onSearch,
  orderBy,
  onSort,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.controls}>
      <SearchBar value={keyword} onSearch={onSearch} />
      <button
        className={styles.addButton}
        onClick={() => navigate(PATH.productRegister())}
      >
        상품 등록하기
      </button>
      <select
        className={styles.sortSelect}
        value={orderBy}
        onChange={onSort}
      >
        <option value="latest">최신순</option>
        <option value="popular">인기순</option>
      </select>
    </div>
  );
}
