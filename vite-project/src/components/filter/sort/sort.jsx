import clsx from "clsx";
import "./sort.css";
import SortIcon from "/ic_sort.svg";
import SortArrow from "/ic_arrow_down.svg";
import { useState } from "react";
import { ORDER_BY } from "./const";
import { useSalesProductContext } from "../../../context/salesProductContext";

export const Sort = ({ className }) => {
  const {
    setProductFetchQuery,
    productFetchQuery: { orderBy: currentSort },
  } = useSalesProductContext();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const stringfiedRecent = JSON.stringify(ORDER_BY.RECENT);
  const stringfiedFavorite = JSON.stringify(ORDER_BY.FAVORITE);

  const handleClickOrder = (e) => {
    const stringfiedOrder = e.currentTarget.dataset.order;
    const order = JSON.parse(stringfiedOrder);

    setProductFetchQuery((prev) => ({
      ...prev,
      orderBy: order,
    }));

    setOpen(false);
  };

  return (
    <div className={clsx("sort", className)}>
      <button className="sort__btn" onClick={handleOpen}>
        <span className="sort__text">{currentSort.displayValue}</span>
        <img className="sort__icon--mobile" src={SortIcon} alt="정렬 아이콘" />
        <img className="sort__icon--pc" src={SortArrow} alt="정렬 화살표" />
      </button>
      {open && (
        <ul className="sort__options">
          <li
            onClick={handleClickOrder}
            data-order={stringfiedRecent}
            className="sort__option"
          >
            <span>{ORDER_BY.RECENT.displayValue}</span>
          </li>
          <li
            onClick={handleClickOrder}
            data-order={stringfiedFavorite}
            className="sort__option"
          >
            <span>{ORDER_BY.FAVORITE.displayValue}</span>
          </li>
        </ul>
      )}
    </div>
  );
};
