import "./SearchBox.css";
import IcSearch from "../../assets/ic_search.svg";

function SearchBox({ value, onChange }) {
  const onSearchValueChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };
  return (
    <div>
      <input
        value={value}
        placeholder="검색할 단어를 입력해 주세요"
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export default SearchBox;
