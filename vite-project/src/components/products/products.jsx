import "./products.css";
import { Product } from "./product/product";
import { useSalesProductContext } from "../../context/salesProductContext";

export const Products = () => {
  const {
    items: { list: items },
  } = useSalesProductContext();
  return (
    <ul className="products">
      {items.map((item) => (
        <li key={item.id}>
          <Product item={item} />
        </li>
      ))}
    </ul>
  );
};
