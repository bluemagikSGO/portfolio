import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Metherappy from "./pages/Metherappy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/metherappy" element={<Metherappy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
