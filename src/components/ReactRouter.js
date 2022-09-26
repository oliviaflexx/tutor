import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="*">
          <div> doesn't exist</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
