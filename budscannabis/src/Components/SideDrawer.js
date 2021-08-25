import React from "react";
import './SideDrawer.css';
 
const SideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><a href="/Home">Home</a></li>   
      <li><a href="/Products">Products</a></li>
      <li><a href="/Locations">Locations</a></li>
      <li><a href="/About">About us</a></li>
    </ul>
  </nav>
);


 
export default SideDrawer;