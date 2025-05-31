// src/components/SearchBar.jsx
import { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="검색할 상품을 입력하세요"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        검색
      </button>
    </form>
  );
};

export default SearchBar;
