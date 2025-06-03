import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getItems } from "./api";
import ItemsList from "./components/ItemsList.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [orderBy, setOrderBy] = useState(["recent"]);
  const [searchValue, setSearchValue] = useState([""]);
  const [itemsCount, setItemsCount] = useState(100);
  const [page, setPage] = useState(1);
  const oneToFive = [1, 2, 3, 4, 5];

  //orderBy를 한<->영 변환용 함수
  function orderByKorEng(word) {
    switch (word) {
      case "최신순":
        return "recent";
      case "좋아요순":
        return "favorite";
      default:
        console.log("orderByKorEng 함수 잘못 사용됨");
        console.log(word[0]);
        console.log(typeof word[0]);
        return;
    }
  }

  // 데이터 가져오기, items 변경
  const appLoadItems = async (options) => {
    const { list, totalCount } = await getItems(options);
    setItemsCount(totalCount);
    setItems(list);
  };

  // 데이터 가져오기, bestItems 변경
  const appLoadBestItems = async () => {
    const { list } = await getItems({ pageSize: 4, orderBy: "favorite" });
    setBestItems(list);
  };

  // 사용자가 검색하는 경우 맞춰서 데이터 가져오기(결과적으로 items 변경)
  const appLoadSearchItems = async (e) => {
    setSearchValue(e.target.value);
    //appLoadItems({ orderBy, keyword: searchValue });
  };

  // 정렬 최신순/좋아요순 변경
  const appOrderByChange = (e) => {
    const newOrderBy = orderByKorEng(e.target.value);
    setOrderBy(newOrderBy);
  };

  // 페이지가 속한 범위 찾기. [1,2,3,4,5], [6,7,8,9,10], [11,12] 등의 배열을 리턴한다.
  function pageFieldFind(page) {
    const num = Math.floor((page - 1) / 5) * 5;
    const result = oneToFive.map((n) => {
      const maxPage = Math.floor((itemsCount - 1) / 10) + 1;
      if (num + n > maxPage) {
        return;
      } else {
        return num + n;
      }
    });
    const pageFieldArray = result.filter(Boolean);
    return pageFieldArray;
  }

  // 페이지 변경
  const appPageChange = (e) => {
    e.preventDefault();
    const newPage = Number(e.target.textContent);
    setPage(newPage);
  };

  // 페이지 왼, 오 버튼
  const appPageLeftRight = (e) => {
    e.preventDefault();
    const pageArray = pageFieldFind(page);
    const newPage =
      e.target.textContent === "<"
        ? Math.max(pageArray[0] - 5, 1)
        : pageArray[pageArray.length - 1] + 1;
    setPage(newPage);
  };

  useEffect(() => {
    appLoadItems({ page, orderBy, keyword: searchValue });
    appLoadBestItems();
  }, [orderBy, searchValue, page]);

  return (
    <>
      <div className="ItemsSection">
        <div className="BestItemsSection">
          <h2 className="SectionTitle">베스트 상품</h2>
          <ItemsList itemsSection="best" items={bestItems} />
        </div>
        <div className="SellingItemsSection">
          <div className="SellingItemsHeader">
            <h2 className="SectionTitle">판매 중인 상품</h2>
            <input
              value={searchValue}
              placeholder="검색할 상품을 입력해 주세요"
              onChange={appLoadSearchItems}
            ></input>
            <select onChange={appOrderByChange}>
              <option>{orderBy[0] === "recent" ? "최신순" : "좋아요순"}</option>
              <option>{orderBy[0] !== "recent" ? "최신순" : "좋아요순"}</option>
            </select>
            <button>상품 등록하기</button>
          </div>
          <ItemsList itemsSection="selling" items={items} />
        </div>
      </div>
      <div className="PageButtonBox">
        <ol>
          <button key="pageLeftButton" onClick={appPageLeftRight}>
            {"<"}
          </button>
          {pageFieldFind(page).map((p) => {
            return (
              <button key={((p - 1) % 5) + 1} onClick={appPageChange}>
                {p}
              </button>
            );
          })}
          {pageFieldFind(page).length === 5 && (
            <button key="pageRightButton" onClick={appPageLeftRight}>
              {">"}
            </button>
          )}
        </ol>
      </div>
    </>
  );
}

export default App;
