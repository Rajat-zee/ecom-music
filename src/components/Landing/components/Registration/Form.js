import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import Login from '../Login/Login'
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <div className="form-content-left">
        <img src="../images/form.jpg" alt="" className="form-img" />
      </div>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />} 
      {/* <FormSignup/> */}
    </div>
  );
};

export default Form;
