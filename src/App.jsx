import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { PATH } from "../utils/path.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.index()} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
