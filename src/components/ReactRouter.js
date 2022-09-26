import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<div>Home</div>}></Route>
        <Route path="/about" element={<div>About</div>}></Route>
        <Route path="*" element={<div> doesn't exist</div>}></Route>
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
