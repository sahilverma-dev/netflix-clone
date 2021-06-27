import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing styling
import "./Style/App.css";

// importing components
import Header from "./Header";

// importing pages
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
