import "./salesProducts.css";
import { Filter } from "./filter/filter";
import { Products } from "./products/products";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Pagiation } from "./pagination/pagination";
import { SalesProductsProvider } from "../context/salesProductContext";

export const SalesProducts = () => {
  const { items, productFetchQuery, setProductFetchQuery } = useFetchProducts();

  return (
    <main className="app-main">
      <SalesProductsProvider
        value={{
          items,
          productFetchQuery,
          setProductFetchQuery,
        }}
      >
        <Filter />
        <Products />
        <Pagiation />
      </SalesProductsProvider>
    </main>
  );
};
