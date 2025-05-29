import React from "react";
import ItemImg from "../../assets/image/ItemImage.png";
import "./items.css";
import HeartLogo from "../../assets/image/ic_heart.svg";
const Items = () => {
  return (
    <div className="ItemsTopLevel">
      <div>
        <img className="ItemImg" src={ItemImg} alt="설명" />
      </div>
      <div>
        <p className="ItemsBoxText">아이패드 미니 팝니다</p>
        <p className="ItemBoxPrice">500,000</p>
        <div className="ItemLikeBox">
          <img src={HeartLogo} alt="하트로고"></img>
          <p className="ItemBoxLike">240</p>
        </div>
      </div>
    </div>
  );
};
export default Items;
