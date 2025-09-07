import { Link } from "react-router-dom";
import Select from "../../components/market/select";
import Table from "../../components/market/table";
import style from "./market.module.css";

function Market() {
  return (
    <div className={style.Container}>
      <p>베스트상품</p>
      <Table Count={4} title={"예시 제목입니다."} price={2000} like={3000} />
      <div className={style.title}>
        <p>판매중인 상품</p>
        <div className={style.titleBox}>
          <input></input>
          <Link to={"/market/enroll"}>
            <button className={style.titleButton}>상품 등록하기</button>
          </Link>
          <Select></Select>
        </div>
      </div>
      <Table
        Count={10}
        title={"예시 제목입니다."}
        price={2000}
        like={3000}
        option={true}
      />
    </div>
  );
}

export default Market;
