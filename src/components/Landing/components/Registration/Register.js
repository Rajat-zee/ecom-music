import Form from './Form';
import './register.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Form.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Login from '../Login/Login';
// import React, { useState } from "react";
function Register(){

//     const [isSubmitted, setIsSubmitted] = useState(false);
//   function submitForm() {
//     setIsSubmitted(true);
//   }

    return(<div>
        
        <Navbar/>
        <div className="container">
        <Form/>
        {/* {!isSubmitted ? <Form submitForm={submitForm} /> : <Login />} */}
        </div>
        <Footer/>
        </div>
    );
}
export  default Register;