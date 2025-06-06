import "./OrderByBox.css";

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

function OrderByBox({ orderBy, onChange }) {
  const onOrderByChange = (e) => {
    const newOrderBy = orderByKorEng(e.target.value);
    onChange(newOrderBy);
  };

  return (
    <select onChange={onOrderByChange}>
      <option>{orderBy[0] === "recent" ? "최신순" : "좋아요순"}</option>
      <option>{orderBy[0] !== "recent" ? "최신순" : "좋아요순"}</option>
    </select>
  );
}

export default OrderByBox;
