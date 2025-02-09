import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

import Login from '../Login/Login'
import ReactDOM from 'react-dom';

const Navbar = () => {
  var data = "sumit";
  var mem = "Gold";
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
    
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img className="logo"
            src="images/logo.png"
            height="200px"
            width="200px"
            
            alt=""
          />
         
          <div className="dropdown">
            <Link to="/profile">
            <button className="link">
              <CgIcons.CgProfile className="profil" />
            </button>
            </Link>
            <div className="dropdown-menu">
              <table style={{ width: "100%" }}>
                <tr>
                  <td style={{ fontSize: "20px" }}>Name:</td>
                  <td style={{ fontSize: "20px" }}>{data}</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px" }}>Email:</td>
                  <td style={{ fontSize: "20px" }}>sumitkandari8@gmail.com</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "20px" }}>MemberShip:</td>
                  <td style={{ fontSize: "20px" }}>Gold</td>
                </tr>
              </table>
              
              {/* <h3>UserName: {data}</h3>
          <br />
          <h3>Email: sumitkandari8@gmail.com</h3>

        
          <br />
          <h3>Membership:{mem}</h3> */}
            </div>
          </div>
          
          {/* <Link to="/">
          <button className="signout" >Logout</button>
          
          {/* </Link> */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      
    </>
  );
};

export default Navbar;
