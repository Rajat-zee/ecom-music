import React from "react";
import useForm from "./useForm";
import validate from "./validateinfo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import "./form.css";
import Register from "../Registration/Register.js";

const Loginup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    
        <div className="form-left">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <h1>
              Great! you are in login which means you are our lovely Customer
              enter you detail to login
            </h1>
            {/* <div className="form-inputs">
            <label htmlFor="username" className="form-label">Username</label>
            <input
            id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="form-input"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username&&<p>{errors.username}</p>}
          </div> */}
            <div className="form-inputs">
              <label htmlFor="mobile" className="form-label">
                Mobile No
              </label>
              <input
                id="mobile"
                type="number"
                name="mobno"
                placeholder="Enter your Mobileno"
                className="form-input"
                value={values.mobno}
                onChange={handleChange}
              />
              {errors.mobno && <p>{errors.mobno}</p>}
            </div>
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-input"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            {/* <div className="form-inputs">
            <label htmlFor="email" className="form-label">Email</label>
            <input
            id="email"
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="form-input"
               value={values.email}
              onChange={handleChange}
            />
            {errors.email&&<p>{errors.email}</p>}
          </div> */}
            {/* <div  style={{textAlign:"center",color:"black", width:"290px",}}>
            <label htmlFor="radio" style={{marginRight:"10px"}}  >Customer</label>
            <input style={{marginRight:"100px"}}
            id="radio"
              type="radio"
              name="regtype"
              onChange={handleChange} value="customer" checked="checked"/>
            <label htmlFor="radio2" style={{marginRight:"10px"}} >Admin</label>
            <input
            id="radio2"
              type="radio"
              name="regtype"  value="admin" onChange={handleChange}
              />
          </div>  */}
          
            <button
              className="form-login"
              style={{
                backgroundColor: "navy",
                color: "white",
                borderRadius: "5px",
                fontSize: "18px",
              }}
              type="submit"
            >
              Login
            </button>
            <span className="form-login">
              Don't have an Account?
              <Link to="/signup">Signup</Link>
            </span>
            <span className="form-login" style={{margin:"-4%"}}> 
              Forgot your password?
              <Link to="/reset1">Reset</Link>
            </span>
          </form>
        </div>
        
  );
};

export default Loginup;
