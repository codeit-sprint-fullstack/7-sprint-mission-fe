import HeaderRegister from "../../component/register/headerRegister/headerRegister";
import ProductItem from "../../component/register/productItem/productItem";
import "./enroll.css";
const Enroll = () => {
  return (
    <>
      <div className="refContainer">
        <div className="erollContainer">
          <HeaderRegister></HeaderRegister>
          <ProductItem
            name={"상품명"}
            descript={"상품명을 입력해주세요"}
          ></ProductItem>
          <ProductItem
            name={"상품소개"}
            descript={"상품 소개를 입력해주세요"}
            height={"282px"}
          ></ProductItem>
          <ProductItem
            name={"판매가격"}
            descript={"판매 가격을 입력해주세요"}
          ></ProductItem>
          <ProductItem
            name={"태그"}
            descript={"태그를 입력해주세요"}
            className="productTag"
            textareaName="tag"
          ></ProductItem>
        </div>
      </div>
    </>
  );
};

export default Enroll;
