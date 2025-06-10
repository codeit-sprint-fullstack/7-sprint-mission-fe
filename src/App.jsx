import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import RandingPage from "./pages/LandingPage/LandingPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import RegPage from "./pages/RegPage/RegPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./style/reset.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Nav />
              <div>
                <Outlet />
              </div>
              <Footer />
            </>
          }
        >
          <Route path="/" element={<RandingPage />} />
          <Route path="/items">
            <Route index element={<ItemsPage />} />
            <Route path=":itemId" element={<ItemPage />} />
          </Route>
          <Route path="/registration" element={<RegPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
