import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import Market from "./pages/market/market";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </>
  );
}

export default App;
