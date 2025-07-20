import Image from "next/image";
import styles from "./SearchInput.module.css";

export default function SearchInput({
  placeholder = "검색할 상품을 입력해주세요",
  value,
  onChange,
}) {
  console.log("input: ", value);
  return (
    <div className={styles.searchInputWrapper}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Image
        className={styles.searchIcon}
        src="/images/icons/ic_search.svg"
        alt="검색"
        width={16}
        height={16}
      />
    </div>
  );
}
