import React, {useState} from 'react' 
import '../App.css';
import SearchIcon from "@material-ui/icons/Search";
import './Navbar.css';
import Sidebar from './Sidebar';
 
function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar"> 
        <Sidebar />
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/Home">Home</a>
                    <a href="/Products">Products</a>
                    <a href="/Locations">Locations</a>
                    <a href="/About">About us</a>
                </div>
            </div>

            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button><SearchIcon /></button>
                <div className="links">
                    <a href="/AccountManagement">Account</a>
                </div>
            </div>                
        </div>
    )
}

export default Navbar