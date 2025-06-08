import PandaMaket from "./pages/pandaMaket/pandaMaket";
import Nav from "./component/nav/nav";
import Footer from "./component/footer/footer";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selling from "./pages/selling/selling";
import Enroll from "./pages/Enroll/enroll";

function App() {
  return (
    <>
      <Nav />
      {/* <Homepage /> */}
      {/* <PandaMaket /> */}
      {/* <Selling /> */}
      <Enroll></Enroll>
      <Footer />
    </>
  );
}

export default App;
