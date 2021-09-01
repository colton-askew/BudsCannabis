import React from "react";
import './App.css';
import Home from './Home';
import Verification from './Components/login/Verification';
import './Components/login/Verification.css';
import Products from './Products';
import About from './About';
import Locations from './Locations';
import AccountManagement from "./AccountManagement";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import LoginForm from "../src/Components/login/LoginForm"


function App() {
  return (
    <Router>  
      <div className="App" >
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/AccountManagement" component={AccountManagement} />
        <Route exact path="/LoginForm" component={LoginForm} />
      </div>

      <div className = "Verification">
          <Route path ="/" component={Verification} />
      </div>

    </Router>  
  );
}


export default App;

