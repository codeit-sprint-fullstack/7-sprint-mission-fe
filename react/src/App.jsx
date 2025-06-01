import Header from "./component/Header";
import styles from "./styles/App.module.css";
import Footer from "./component/Footer";

function App({ children }) {
  return (
    <div className={styles.wrap}>
      <Header className={styles.header} />
      <div className={styles.container}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
