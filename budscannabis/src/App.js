import React from "react";
import './App.css';
import Home from './Home';
import Verification from './Components/login/Verification';
import './Components/login/Verification.css';
import Products from './Products';
import About from './About';
import Locations from './Components/locations/Locations';
import AccountManagement from "./AccountManagement";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import LoginForm from "../src/Components/login/LoginForm"
//import ResetPassword from "../src/Components/ResetPassword/ResetPassword"   <Route exact path="/ResetPassword" component={ResetPassword} />  THIS IS THE ROUTE AND IMPORT FOR PASSWORDRESET ONCE AWS IS IN
        


function App() {
  return (
    <Router> 
        <Navbar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Locations" component={Locations} />
          <Route exact path="/AccountManagement" component={AccountManagement} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route path ="/" component={Verification} />
      </Switch>
    </Router>  
  );
}


export default App;

