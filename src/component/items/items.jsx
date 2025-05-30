import React from "react";
import "./items.css";
import HeartLogo from "../../assets/image/ic_heart.svg";

const Items = ({ className, image, name, price, favoriteCount }) => {
  return (
    <div className="ItemsTopLevel">
      <div className={`ItemWrapper ${className || ""}`}>
        <img
          className="ItemImg"
          src={image || "/path/to/default/image.png"}
          alt={name || "상품 이미지"}
        />
      </div>
      <div>
        <p className="ItemsBoxText">{name || "상품 이름 없음"}</p>
        <p className="ItemBoxPrice">
          {price !== undefined
            ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원"
            : "가격 정보 없음"}
        </p>
        <div className="ItemLikeBox">
          <img src={HeartLogo} alt="하트로고" />
          <p className="ItemBoxLike">{favoriteCount ?? 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
