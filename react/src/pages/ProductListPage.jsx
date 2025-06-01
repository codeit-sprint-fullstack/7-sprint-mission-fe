import { useEffect, useState } from "react";
import heartIcon from "../assets/ic_heart.svg";
import { Link } from "react-router";
import { getProducts, getBestProducts } from "../api/products";
import ProductList from "../component/ProductList";
import "../styles/Products.css";

function ProductListPage() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  let sortedItems = [...items];
  if (orderBy === "recent") {
    sortedItems.sort((a, b) => b.createdAt - a.createdAt);
  } else if (orderBy === "favorite") {
    sortedItems.sort((a, b) => b.favoriteCount - a.favoriteCount);
  }

  const handleRecentClick = () => setOrderBy("recent");
  const handleLikesClick = () => setOrderBy("favorite");

  const handleLoadProducts = async (options) => {
    const { list } = await getProducts(options);
    //console.log(list);
    setItems(list);
  };
  const handleLoadBestProducts = async () => {
    const { list } = await getBestProducts();
    setBestItems(list);
  };

  useEffect(() => {
    handleLoadProducts({ orderBy, page, pageSize });
  }, [orderBy]);

  useEffect(() => {
    handleLoadBestProducts();
  }, []);
  return (
    <>
      <section className="subSection">
        <div className="inner">
          <div className="titleArea">
            <h3>베스트상품</h3>
          </div>
          <div className="contentArea">
            <ProductList items={bestItems} className={"productList col4"} />
          </div>
        </div>
      </section>
      <section className="subSection">
        <div className="inner">
          <div className="titleArea">
            <h3>판매 중인 상품</h3>
            <div className="titleAreaUtil">
              <form className="searchForm">
                <div className="inputBox">
                  <span className="ico"></span>
                  <input
                    type="text"
                    name="keywords"
                    id="keywords"
                    value={""}
                    placeholder="검색할 상품을 입력해주세요."
                  />
                </div>
              </form>
              <Link to={"/"} className={`btn active`}>
                상품 등록하기
              </Link>
              <div className="selectBox active">
                <button type="button" className={`btn`}>
                  최신순
                </button>
                <ul>
                  <li>
                    <button
                      type="button"
                      className={`btn`}
                      onClick={handleRecentClick}
                    >
                      최신순
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={`btn`}
                      onClick={handleLikesClick}
                    >
                      좋아요순
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contentArea">
            <ProductList items={sortedItems} className={"productList col5"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductListPage;
