import { Link } from "react-router-dom";
import SearchIcon from "../../assets/image/ic_search.svg";
import CustomButton from "../customSelect/customSelect.jsx";
import "./SalesHeader.css";
const SalesHeader = ({ sort, onSortChange, onSearch }) => {
  return (
    <div className="salesHeaderContainer">
      <div className="saleMargin">
        <p className="PandaMaketItemsLabel">판매 중인 상품</p>
      </div>
      <span className="productRegistration">상품 등록하기</span>
      <div className="salesControlGroup">
        <div className="searchGroup">
          <img className="searchGroupIcon" src={SearchIcon} alt="search" />
          <input
            placeholder={"검색할 상품을 입력해주세요"}
            className="salesSearch"
            onKeyDown={onSearch}
          />
        </div>
        <Link to={"/enroll"}>
          <span className="productRegistration">상품 등록하기</span>
        </Link>
        <select value={sort} onChange={onSortChange} className="sortStyle">
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
        <CustomButton
          value={sort}
          onChange={onSortChange}
          className="customSelect"
        />
      </div>
    </div>
  );
};

export default SalesHeader;
