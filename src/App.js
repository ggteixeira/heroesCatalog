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
import Details from './Views/Details'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="p-5">
          <Switch>

            <Route exact path="/">
              <Catalog />
            </Route>
          
            <Route path="/details"> {/* TODO: add an id */}
              <Details />
            </Route>

            <Route path="/about">
              <About />
            </Route>

          </Switch>
        </div>
      </Router>
      <Footer />
    </div>



  )
}

export default App;