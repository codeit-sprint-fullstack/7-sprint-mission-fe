import React from "react";
import "./DropdownList.css";

function DropdownList({ onSortSelection }) {
  return (
    <div className="dropdownList">
      <div className="dropdownItem" onClick={() => onSortSelection("recent")}>
        최신 순
      </div>
      <div className="dropdownItem" onClick={() => onSortSelection("favorite")}>
        좋아요 순
      </div>
    </div>
  );
}
export default DropdownList;
