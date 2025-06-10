import { useState } from "react";
import RegHeader from "./header/RegHeader";
import RegItem from "./RegItem";
import "./RegSection.css";

function RegSection() {
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    price: 0,
    tags: [],
    images: [],
  });

  const handleItemData = (key, value) => {
    setItemData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="regSection">
      <RegHeader itemData={itemData} />
      <RegItem itemData={itemData} handleItemData={handleItemData} />
    </div>
  );
}

export default RegSection;
