import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Metherappy from "./pages/Metherappy";
import ScrollToTop from "./components/ScrollToTop";
import Sportsloc from "./pages/Sportsloc";
import Novabeak from "./pages/Novabeak";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/metherappy" element={<Metherappy />} />
          <Route path="/sportloc" element={<Sportsloc />} />
          <Route path="/novabeak" element={<Novabeak />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
