import React from "react";
import Form from "../Login/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./login.css";
import Registration from "../Registration/Register.js";

import "./form.css";
import Navbar from "../User/Navbar";

const Login = () => {
  return (
    <div className="contain">
      
      <Form/>
        
    </div>
    
  );
};

export default Login;
