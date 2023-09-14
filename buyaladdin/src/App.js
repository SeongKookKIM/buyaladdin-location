import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Detial from "./pages/Detial";
import { useEffect } from "react";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/detail" element={<Detial />}></Route>
      </Routes>
    </div>
  );
}

export default App;
