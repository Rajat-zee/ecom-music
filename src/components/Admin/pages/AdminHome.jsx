import React from "react";
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";
import './admin-home.css';

export default class AdminHome extends React.Component
{
    render()
    {
        return(
            <div>
                <ANavbar />
                <div className="contain">
            <div style={{paddingTop:"10%"}} className="admin-home">
            </div>
            </div><Footer/>
            </div>
        );
    }
}