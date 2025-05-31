import { Header } from "../../layouts/Header";
import { PopularProductList } from "../../components/PopularProductList";
import { ProductList } from "../../components/ProductList";
import { Footer } from "../../layouts/Footer";
import { Navigation } from "../../components/Navigation";
import styles from "../ProductPage/ProductPage.module.css";

export const ProductPage = () => {
  return (
    <div className={styles.ProductPage}>
      <Header />
      <div className={styles.productContainer}>
        <PopularProductList />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};
