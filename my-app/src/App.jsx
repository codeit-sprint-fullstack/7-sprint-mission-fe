import { useState } from "react";
import "./App.css";
import Nav from "./components/nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/marketPage.jsx";
import Footer from "./components/footer.jsx";
import { PATH } from "./utils/path.js";
import ProductRegisterPage from "./pages/productRegisterPage.jsx";
import UsedMarketPage from "./pages/usedMarketPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={PATH.market()} element={<MarketPage />} />
        <Route path={PATH.usedMarket()} element={<UsedMarketPage />} />
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
