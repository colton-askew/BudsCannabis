import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Products from './Products';
import About from './About';
import Locations from './Locations';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import SideDrawer from "./Components/SideDrawer";
import Backdrop from "./Components/Backdrop";

function App() {
  return (
    <div className="App" style={{height: '100%'}}>
      <Navbar />
      <SideDrawer />
      <Backdrop />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/locations" component={Locations} />
    </div>
  );
}


export default App;

