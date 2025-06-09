import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Metherappy from "./pages/Metherappy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/metherappy" element={<Metherappy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
