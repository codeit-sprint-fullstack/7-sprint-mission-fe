import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import Nav from "./components/nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/marketPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
