function SearchBox({ value, onChange }) {
  const onSearchValueChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };
  return (
    <input
      value={value}
      placeholder="검색할 상품을 입력해 주세요"
      onChange={onSearchValueChange}
    ></input>
  );
}

export default SearchBox;

/*
            <input
              value={searchValue}
              placeholder="검색할 상품을 입력해 주세요"
              onChange={appLoadSearchItems}
            ></input>

            */
