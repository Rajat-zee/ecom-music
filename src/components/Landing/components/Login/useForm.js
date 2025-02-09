import { useState,useEffect } from "react";
import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import Homepage from "../../../User/Homepage";
import AHomepage from "../../../Admin/AHomepage";


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    password: "",
    mobno: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    //----------
    console.log(values);
    
    var longmob= Number(values.mobno);
    var mobno = longmob;
    var pwd = values.password;
    sessionStorage.setItem("MNO",mobno);
    axios.get("http://localhost:5160/api/RL/Login/"+mobno+"/"+pwd).then(r=>{
        console.log(r.data);
        if(r.data!='')
        {
            //this.type=r.data;
            console.log("User:"+r.data);
           
            if(r.data=="User")
            {
            alert("Welcome Customer!");
            ReactDOM.render(<Homepage/>,document.getElementById('root'));
            }
            else if(r.data=="Admin")
            {
            alert("Welcome Admin!");
            ReactDOM.render(<AHomepage/>,document.getElementById('root'));
            }
        }
        
      })
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
