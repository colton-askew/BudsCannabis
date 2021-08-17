import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Products from './Products';
import About from './About';
import Locations from './Locations';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/contact" component={Locations} />
    </div>
  );
}

export default App;
