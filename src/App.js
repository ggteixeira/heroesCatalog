import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./tailwind.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Views/About";
import Catalog from "./Views/Catalog";
import Details from "./Views/Details";
import Login from "./Views/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-5">
          <Switch>
            <Route path="/login" component={Login} />

            <Route exact path="/" component={Catalog} />

            <Route path="/details" component={Details} />

            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
