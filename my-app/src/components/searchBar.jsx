// src/components/SearchBar.jsx
import { useState } from "react";
import styles from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
      <div className={styles.inputWrap}>
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.icon}
          onClick={handleSubmit}
        />
        <input
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색할 상품을 입력하세요"
          className={styles.input}
        />
      </div>
    </form>
  );
};

export default SearchBar;
