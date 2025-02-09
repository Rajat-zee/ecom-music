import React, { useState } from "react";
import Loginup from "./Loginup";

import "./form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-contain">
          <Loginup submitForm={submitForm} />
        <div className="form-right">
          <img src="../images/login.jpg" alt="" className="form-img" />
        </div>
      </div>
    </>
  );
};

export default Form;
