import { useEffect, useState } from "react";
import { getProducts } from "../api/itemApi";

export function useProducts({ orderBy, page, pageSize, keyword = "" }) {
  const [itemList, setItemList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    getProducts({
      sort: orderBy,
      page,
      pageSize,
      keyword,
    })
      .then((products) => {
        if (!ignore) {
          setItemList(products.list);
          setTotalCount(products.totalCount);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [orderBy, page, pageSize, keyword]);

  return { itemList, totalCount, loading, error };
}