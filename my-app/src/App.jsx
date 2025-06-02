import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import Nav from "./components/nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/marketPage.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MarketPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
