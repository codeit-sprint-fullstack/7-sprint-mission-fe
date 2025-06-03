import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import Nav from "./components/nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/marketPage.jsx";
import Footer from "./components/footer.jsx";
import { PATH } from "./utils/path.js";
import ProductRegisterPage from "./pages/productRegisterPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={PATH.index()} element={<MarketPage />} />
        <Route
          path={PATH.productRegister()}
          element={<ProductRegisterPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
