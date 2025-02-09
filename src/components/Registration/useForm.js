import { useState,useEffect } from "react";
import React from 'react'
import axios from 'axios'


const useForm = (callback,validate) => {
    const [values,setValues]=useState({
        username:'',
        email:'',
        password:'',
        regtype:'',
        mobno:''
    });
    const [errors,setErrors]=useState({});
    const [isSubmitting,setIsSubmitting]=useState(false);
    function handleChange(e){
         const { name, value } = e.target;
        setValues({
            ...values,[name]:value
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        

        let AppUser={
            Email:"super@jwt.com",
            Password:"abc@123"
        }
        var token=null;
        axios.post("http://localhost:5160/api/token",AppUser).then(
            r=>
            {
                
                token=r.data;
        
        axios.post("http://localhost:5160/api/RL/InsertCustomer", {
            Mobno: values.mobno,
            Name: values.username,
            Pass: values.password,
            Email: values.email,
            regType: values.regtype,
            Orders: [],
            Playlists: [],
            MemOrders:[]
          },{headers:{'Authorization': `Bearer  ${token}`}})
          .then((res) => {
            
            
        });
    });
        //Route this page to login
          //ReactDOM.render(<Login/>,document.getElementById('root'));


    }

   
        
            
      
    
    
    
    
    useEffect(()=>{
        if(Object.keys(errors).length===0 &&isSubmitting){
            callback();
        }
    },[errors]);
    return{handleChange,values,handleSubmit,errors};
};

export default useForm
