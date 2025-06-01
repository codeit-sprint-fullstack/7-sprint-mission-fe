import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import "./styles/reset.css";
import "./styles/common.css";
import App from "./App.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path={"/"} element={<ProductListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>
);
