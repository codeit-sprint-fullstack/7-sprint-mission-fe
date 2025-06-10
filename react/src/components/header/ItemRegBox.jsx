import "./ItemRegBox.css";

function ItemRegBox() {
  const onClick = (e) => {
    e.preventDefault();
  };
  return <button onClick={onClick}>상품 등록하기</button>;
}

export default ItemRegBox;
