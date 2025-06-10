import { useState } from "react";
import "./RegItem.css";
import IcX from "../../../assets/icon/ic_X.svg";
//import Input from "../../../components/Input";

function RegItem({ itemData, handleItemData }) {
  // dataset속성 이용.

  const [tag, setTag] = useState("");
  const tags = itemData.tags;

  const onChange = (e) => {
    console.log(e);
    const newValue = e.target.value;
    const newKey = e.target.dataset.key;
    handleItemData(newKey, newValue);
  };

  const onChangeTag = (e) => {
    const tagRegExp = new RegExp(/\s/i);
    const newValue = e.target.value;
    if (tagRegExp.test(newValue)) {
      return;
    }
    setTag(newValue);
    console.log(tag);
  };

  const onKeyDownTag = (e) => {
    if (e.key === " ") {
      if (tags.includes(tag)) {
        setTag("");
        return;
      }
      tags.push(tag);
      setTag("");
      handleItemData("tags", tags);
    }
  };
  return (
    <form className="regItem">
      <div className="regItemName">
        <label htmlFor="regItemName">상품명</label>
        <input
          id="regItemName"
          value={itemData.name}
          onChange={onChange}
          data-key="name"
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="regItemDesc">
        <label htmlFor="regItemDesc">상품 소개</label>
        <div>
          <input
            id="regItemDesc"
            value={itemData.description}
            onChange={onChange}
            data-key="description"
          />
          <span className="regItemDescText">상품 소개를 입력해주세요</span>
        </div>
      </div>
      <div className="regItemPrice">
        <label htmlFor="regItemPrice">판매 가격</label>
        <input
          id="regItemPrice"
          type="number"
          value={itemData.price}
          onChange={onChange}
          data-key="price"
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div className="regItemTag">
        <label htmlFor="regItemTag">태그</label>
        <input
          id="regItemTag"
          value={tag}
          onChange={onChangeTag}
          onKeyDown={onKeyDownTag}
          placeholder="태그를 입력해주세요"
        />
        <ul className="regItemTags">
          {tags.map((tag) => {
            return (
              <li id={tag} className="regItemTagBox">
                <span className="regItemTagText">#{tag}</span>
                <img className="regItemTagX" src={IcX} alt="태그 삭제 아이콘" />
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
}

export default RegItem;
