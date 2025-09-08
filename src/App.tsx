import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Market from "./pages/market/market";
import Board from "./pages/board/board";
import Write from "./pages/write/write";
import BoardId from "./pages/board/id/id";
import Enroll from "./pages/market/enroll/enroll";
import MarketById from "./pages/market/id/id";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/:id" element={<MarketById />} />
        <Route path="/market/enroll" element={<Enroll />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardId />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
}

export default App;
