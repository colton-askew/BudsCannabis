import React, { useState } from 'react' 
import { Link } from 'react-router-dom';
import '../App.css';
import SearchIcon from "@material-ui/icons/Search";
import './Navbar.css';
import Dropdown from './Dropdown';

//import Sidebar from './Sidebar';
//import AccountBoxIcon from "@material-ui/icons/AccountBox"; MIGHT USE LATER FOR POST SIGN IN ACCOUNT ICON
 
function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    return (
        <>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          BudsCannabis
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products 
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Locations'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Locations
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/LoginForm'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Link to='LoginForm'>
            <button className='btn'>Sign Up</button>
        </Link>
        </nav>
        </>
    )
}

export default Navbar
