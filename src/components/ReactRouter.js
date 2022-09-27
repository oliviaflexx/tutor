import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<div>About</div>}></Route>
        <Route path="/contact" element={<div>Contact</div>}></Route>
        <Route path="*" element={<div> doesn't exist</div>}></Route>
      </Routes>
      <div className="bg-cyan-600 text-white text-center text-sm py-6">
        <p>© Copyright Dr. Felix Tutoring. All Rights Reserved</p>
        <p className="text-white/60">Designed by Olivia Felix</p>
      </div>
    </Router>
  );
};

export default ReactRouterSetup;
