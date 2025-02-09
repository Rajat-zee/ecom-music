import React from "react";
import Form from "../Login/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./login.css";
import Registration from "../Registration/Register.js";

import "./form.css";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Login = () => {
  return (<div>
    <Navbar/>
    <div className="contain">
      
      <Form/>
        
    </div>
    <Footer/>
    </div>
    
  );
};

export default Login;
