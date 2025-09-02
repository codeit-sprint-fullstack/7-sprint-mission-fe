import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Market from "./pages/market/market";
import Board from "./pages/board/board";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/market" element={<Market />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
