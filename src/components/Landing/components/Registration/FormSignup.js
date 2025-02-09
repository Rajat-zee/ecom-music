import React from "react";
import useForm from "./useForm";
import validate from './validateinfo';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange,handleSubmit,values,errors}=useForm(submitForm,validate);
  return (
    
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below
          </h1>
          <div className="form-inputs">
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
          </div>
           <div className="form-inputs">
            <label htmlFor="mobile" className="form-label">Mobile No</label>
            <input
            id="mobile"
              type="number"
              name="mobno"
              placeholder="Enter your Mobileno"
              className="form-input"
               value={values.mobno}
              onChange={handleChange}
            />
            {errors.mobno&&<p>{errors.mobno}</p>}
          </div>
           <div className="form-inputs">
            <label htmlFor="password" className="form-label">Password</label>
            <input
            id="password"
              type="text"
              name="password"
              placeholder="Enter your password"
              className="form-input"
               value={values.password}
              onChange={handleChange}
            />
            {errors.password&&<p>{errors.password}</p>}
          </div>
           <div className="form-inputs">
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
          </div>
          <div  style={{textAlign:"center",color:"black", width:"290px",}}>
            <label htmlFor="radio" style={{marginRight:"10px"}}  >Customer</label>
            <input style={{marginRight:"100px"}}
            id="radio"
              type="radio"
              name="regtype"
              onChange={handleChange} value="User" />
            <label htmlFor="radio2" style={{marginRight:"10px"}} >Admin</label>
            <input
            id="radio2"
              type="radio"
              name="regtype"  value="Admin" onChange={handleChange}
              />
          </div> 
          <button className="form-input-login"  style={{backgroundColor:"purple",color:"white",borderRadius:"5px",fontSize:"18px"}}type="submit">Sign Up</button>
          <span className="form-input-login">Already have an Account?
          <Link to="/">Login</Link>
          
          </span>
        </form>
      </div>
    
  );
};

export default FormSignup;
