import React from "react";
import Restuarnt from "./restuarnt";
import Open from "./open";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Temp from "./weather/Temp";

const App = () => {
  return (
    <>
      {/* <Temp/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/home" element={<Restuarnt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
