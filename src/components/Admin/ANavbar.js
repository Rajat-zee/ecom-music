import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { ASidebarData } from "./ASidebarData";
import "./ANavbar.css";
import { IconContext } from "react-icons";

import Login from '../Login/Login'
import ReactDOM from 'react-dom';

const ANavbar = () => {
  var type = "Hi Admin";

  function logout(){
    window.location.reload(false);
  }
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar-a">
          <Link to="#" className="menu-bars-a">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img
            src="images/logo.png"
            height="200px"
            width="200px"
            className="logoa"
            alt=""
          />
          <button className="profilea">
                <CgIcons.CgProfile className="profil" />
              </button>
              
          <label className="profileanxt">{type}</label>
          
          {/*<div className="dropdown-a">
            <button className="link-a">
              <CgIcons.CgProfile className="profile-a" />
            </button>
            <div className="dropdown-menu-a">
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
            <h3>Membership:{mem}</h3>
            </div>
          </div> */}
           <Link to="/LL"> 
          <button className="signout-a"  >Logout</button>
           </Link> 
        </div>
        <nav className={sidebar ? "nav-menu-a active-a" : "nav-menu-a"}>
          <ul className="nav-menu-items-a" onClick={showSidebar}>
            <li className="navbar-toggle-a">
              <Link to="#" className="menu-bars-a">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {ASidebarData.map((item, index) => {
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

export default ANavbar;
