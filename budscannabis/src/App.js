import React from "react";
import './App.css';
import Home from './Home';
import Products from './Products';
import About from './About';
import Locations from './Locations';
import AccountManagement from "./AccountManagement";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Router>  
      <div className="App" style={{height: '100%'}}>
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/AccountManagement" component={AccountManagement} />
      </div>
    </Router>  
  );
}


export default App;

