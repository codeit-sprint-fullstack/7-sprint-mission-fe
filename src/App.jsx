import { Routes, Route } from "react-router-dom";
import Nav from "./component/nav/nav";
import Footer from "./component/footer/footer";
import Homepage from "./pages/homepage/homepage";
import PandaMaket from "./pages/pandaMaket/pandaMaket";
import Selling from "./pages/selling/selling";
import Enroll from "./pages/Enroll/enroll";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/panda-market" element={<PandaMaket />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
