import ProductItem from "./ProductItem";
function ProductList({ items, className }) {
  return (
    <div className={className}>
      {items.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductList;
