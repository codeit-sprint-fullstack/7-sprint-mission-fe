import { createContext, useContext } from "react";

const SalesProductsContext = createContext({
  items: [],
  productFetchQuery: {},
  setProductFetchQuery: () => {},
});
export const useSalesProductContext = () => useContext(SalesProductsContext);

export const SalesProductsProvider = ({ children, value }) => (
  <SalesProductsContext.Provider value={value}>
    {children}
  </SalesProductsContext.Provider>
);
