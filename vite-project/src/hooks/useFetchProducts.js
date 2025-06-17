import { useEffect, useState } from "react";
import { usePageSize } from "./usePageSize";
import { getProduct } from "../api/getProducts";
import { ORDER_BY } from "../components/filter/sort/const";

export const useFetchProducts = () => {
  const { currentPageSize } = usePageSize();
  const [productFetchQuery, setProductFetchQuery] = useState({
    page: 1,
    pageSize: currentPageSize,
    orderBy: ORDER_BY.RECENT,
    keyword: "",
  });

  const [items, setItems] = useState({
    list: [],
    totalCount: 0,
  });

  useEffect(() => {
    if (currentPageSize !== productFetchQuery.pageSize) {
      setProductFetchQuery((prev) => ({
        ...prev,
        pageSize: currentPageSize,
      }));
    }
  }, [currentPageSize]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProduct(productFetchQuery);
      setItems(data);
    };
    fetchProducts();
  }, [productFetchQuery]);

  return {
    productFetchQuery,
    setProductFetchQuery,
    items,
  };
};
