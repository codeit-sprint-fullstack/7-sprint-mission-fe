import { useState } from "react";
import Items from "../component/items/items";
import "./pandaMaket.css";
import { useEffect } from "react";
const PandaMaket = () => {
  const [ItemsCount, setItemsCount] = useState(4);

  useEffect(() => {
    const updatedItems = () => {
      const width = window.innerWidth;
      if (width >= 375 && width <= 743) {
        setItemsCount(1); // Mobile
      } else if (width >= 744 && width <= 1199) {
        setItemsCount(2); // Tablet
      } else if (width >= 1200) {
        setItemsCount(4); // PC
      }
    };
    updatedItems();
    const result = window.addEventListener("resize", updatedItems);
    return result;
  }, []);
  return (
    <div className="PandaMaketTopLevel">
      <div className="BestItemsBox">
        <div>
          <p className="BestItemsLabel">베스트 상품</p>
        </div>
        <div className="BestItemList">
          {Array.from({ length: ItemsCount }).map((_, i) => (
            <Items key={i} />
          ))}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
export default PandaMaket;
