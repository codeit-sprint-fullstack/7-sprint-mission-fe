import clsx from "clsx";
import "./searchInput.css";
import SearchIcon from "/ic_search.svg";
import { useState } from "react";
import { useSalesProductContext } from "../../../context/salesProductContext";
export const SearchInput = ({ className }) => {
  const [searchInput, setSearchInput] = useState("");

  const { setProductFetchQuery } = useSalesProductContext();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleBlur = () => {
    setProductFetchQuery((prev) => ({
      ...prev,
      keyword: searchInput,
    }));
  };

  return (
    <div className={clsx("search", className)}>
      <label className="sr-only">{"검색"}</label>
      <img src={SearchIcon} alt="검색 아이콘" />
      <input
        value={searchInput}
        onChange={handleChange}
        onBlur={handleBlur}
        className="search__input"
      />
    </div>
  );
};
