import PandaMaket from "./pages/pandaMaket";
import Nav from "./component/nav/nav";
import Footer from "./component/footer/footer";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Nav />
      <PandaMaket />
      <Footer />
    </>
  );
}

export default App;
