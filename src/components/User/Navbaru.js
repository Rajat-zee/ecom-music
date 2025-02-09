import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";


const Navbaru = () => {
  var type = "My Profile";

  function logout(){
    window.location.reload(false);
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbaru">
          <Link to="#" className="menu-barsu">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img
            src="images/logo.png"
            height="230px"
            width="230px"
            className="logou"
            alt=""
          />
            
              <button className="profileu">
                <CgIcons.CgProfile className="profil" />
              </button>
            
            <Link to="/profile">
          <label className="profilenxt">{type}</label>
          </Link>
          
          {/* <div className="dropdown">
            <button className="link">
              <CgIcons.CgProfile className="profil" />
            </button>
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
              <h3>UserName: {data}</h3>
        <br />
        <h3>Email: sumitkandari8@gmail.com</h3>

        
        <br />
        <h3>Membership:{mem}</h3>
            </div>
          </div> */}
          <Link to="/">
          <button className="signoutu" onClick={logout} >Logout</button>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menuu activeu" : "nav-menuu"}>
          <ul className="nav-menu-itemsu" onClick={showSidebar}>
            <li className="navbar-toggleu">
              <Link to="#" className="menu-barsu">
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

export default Navbaru;
