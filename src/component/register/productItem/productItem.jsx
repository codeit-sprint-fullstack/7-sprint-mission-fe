import { useState } from "react";
import "./productItem.css";
import deleteImg from "../../../assets/image/ic_X.png";
const ProductItem = ({ name, descript, height, textareaName }) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = text.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setText("");
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      <div className="productContainer">
        <span className="ProductItemName">{name}</span>
        <textarea
          className="productItemInput"
          placeholder={descript}
          value={text}
          style={{ height: height || "56px" }}
          onChange={handleChange}
          onKeyDown={textareaName === "tag" ? handleKeyDown : undefined}
        ></textarea>
      </div>

      {textareaName === "tag" && (
        <div className="tagsContainer">
          {tags.map((tag, index) => (
            <span key={index} className="tagItem">
              #{tag}
              <button
                type="button"
                className="tagDeleteBtn"
                onClick={() => handleDeleteTag(tag)}
                aria-label={`Delete tag ${tag}`}
              >
                <img src={deleteImg} alt="X"></img>
              </button>
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductItem;
