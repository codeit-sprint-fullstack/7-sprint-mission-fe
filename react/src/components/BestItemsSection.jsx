import { useEffect, useState } from "react";
import { getItems } from "../api.jsx";
import ItemsList from "./ItemsList.jsx";
import "./BestItemsSection.css";

function BestItemsSection() {
  const [bestItems, setBestItems] = useState([]);

  const fetchBestItems = async () => {
    const { list } = await getItems({ pageSize: 4, orderBy: "favorite" });
    setBestItems(list);
  };

  useEffect(() => {
    fetchBestItems();
  }, []);

  return (
    <div className="BestItemsSection">
      <h2 className="SectionTitle">베스트 상품</h2>
      <ItemsList itemsSection="best" items={bestItems} />
    </div>
  );
}

export default BestItemsSection;
