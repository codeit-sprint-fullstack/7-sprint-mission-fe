import { Link } from "react-router-dom";
import "./HeaderRegister.css";
const HeaderRegister = () => {
  return (
    <>
      <div className="container">
        <span className="fontStyle">상품 등록하기</span>
        <Link to={"/empty"}>
          <button className="button">등록</button>
        </Link>
      </div>
    </>
  );
};

export default HeaderRegister;
