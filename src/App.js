import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import './App.scss'
import './tailwind.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Views/About'
import Catalog from './Views/Catalog'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-3 bg-gray-500">
          <Switch>

          <Route exact path="/">
              <Catalog />
            </Route>

            <Route path="/about">
              <About />
            </Route>

          </Switch>
        <Footer />
        </div>
      </Router>
    </div>

  )
}

export default App;