import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [button,setButton]=useState(true);
  const closeMobileMenu=()=>{
    setClick(false);
  }
  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
  useEffect(()=>{
    showButton();
  },[])
window.addEventListener('resize',showButton);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
             <img
            src="images/logo.png"
            height="200px"
            width="200px"
            alt=""
            className="fa-typo3"
          />
          </Link>
          <div onClick={handleClick} className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Pricing
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
              Signup
              </Link>
            </li>
             <li className="nav-item">
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
              login
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
              Login
              </Link>
            </li> */}
          </ul>
          {button &&<Button  pat="/signup" buttonStyle='btn--outline'>SIGN UP</Button>}
          {button &&<Button  pat="/aa" buttonStyle='btn--outline'>LOGIN</Button>}
        </div>
      </div>
      <footer>
      
      </footer>
    </>
  );
};

export default Navbar;
