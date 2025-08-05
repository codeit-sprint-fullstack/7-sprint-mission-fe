import { useRouter } from "next/router";
import { getProduct } from "../api/productItem";
import { useEffect, useState } from "react";
import style from "@/styles/pages.module.css";

export default function ItemHome() {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  async function getList(count = 1) {
    const { list } = await getProduct(count, 10);
    setProducts(list);
  }
  useEffect(() => {
    getList(nextPage);
  }, [nextPage]);
  const router = useRouter();
  return (
    <div>
      아이템 목록 페이지입니다.
      <div>
        <div className={style.itemListBox}>
          {products.map((item) => (
            <div
              onClick={() => {
                router.push(`/item/${item.id}`);
              }}
              key={item.id}
              className={style.ItemPageBox}
            >
              <p>{item.name}</p>
              <p>{item.price}원</p>
              <p>{item.tags?.join(", ")}</p>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              setNextPage(nextPage - 1);
              getList(nextPage);
            }}
          >
            페이지네이션 -
          </button>
          <button
            onClick={() => {
              setNextPage(nextPage + 1);
              getList(nextPage);
            }}
          >
            페이지네이션 +
          </button>
        </div>
      </div>
    </div>
  );
}
