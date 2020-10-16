import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Home from './components/pages/home/Home.js';
import Projects from './components/pages/projects/Projects.js';
import About from './components/pages/about/About.js';
import Contact from './components/pages/contact/Contact.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route exact path ="/projects">
            <Projects></Projects>
          </Route>
          <Route exact path ="/about">
            <About></About>
          </Route>
          <Route exact path ="/contact">
            <Contact></Contact>
          </Route>                  
        </Switch>          
      </div>           
    </Router>
  );
}

export default App;
