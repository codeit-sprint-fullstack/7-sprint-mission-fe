import { useState } from "react";
import btnSort from "../../assets/image/btn_sort.png";
import "./customSelect.css";

const CustomSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["최신순", "좋아요순"];

  const handleSortClick = (option) => {
    onChange({
      target: { value: option === "최신순" ? "recent" : "favorite" },
    });
    setIsOpen(false);
  };

  return (
    <div className="display">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <img src={btnSort} alt="정렬 버튼" />
      </div>

      {isOpen && (
        <div className="modelBox">
          {options.map((option, index) => (
            <div
              className="model"
              key={index}
              onClick={() => handleSortClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
