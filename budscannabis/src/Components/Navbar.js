import React from 'react' 
import '../App.css';
import SearchIcon from "@material-ui/icons/Search";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import './Navbar.css';
import Sidebar from './Sidebar';
 
function Navbar() {
    return (
        <div className="Navbar"> 
        <Sidebar />
            <div className="leftSide">
                <div className="links">
                    <a href="/Home">Home</a>
                    <a href="/Products">Products</a>
                    <a href="/Locations">Locations</a>
                    <a href="/About">Contact Us</a>
                </div>
            </div>

            <div className="rightSide">
                <div className="searchbar"><input type="text" placeholder="Search..."/></div>
                <button><SearchIcon /></button>
                <div className="links">
                    <a href="/LoginForm"><button><AccountBoxIcon /></button></a>
                </div>
            </div>                
        </div>
    )
}

export default Navbar