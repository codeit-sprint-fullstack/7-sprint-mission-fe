import "./filter.css";
import { MyButton } from "../../ui/button";
import { SearchInput } from "./searchInput/searchInput";
import { Sort } from "./sort/sort";

export const Filter = () => {
  return (
    <div className="filter">
      <h3 className="filter__title">{"판매 중인 상품"}</h3>
      <MyButton className={"filter__btn"}>{"상품 등록하기"}</MyButton>
      <SearchInput className={"filter__input"} />
      <Sort className={"filter__sort"} />
    </div>
  );
};
