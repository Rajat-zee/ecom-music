import React from "react";

import ForgotPassword from "./ForgotPassword";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class EmailMatch extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            mobno:sessionStorage.getItem("MNO"),
            newemail:'',
            bool:false,
            
        }
        this.Match = this.Match.bind(this);
        
      }
      
      GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

      

    Match = (event) => {
        event.preventDefault();
        var Mobno = this.state.mobno;
        var newe = this.state.newemail;
        
        
        async function getDetails()
        {        
            function BoolToggle()
            {
            
            //this.setState(({ bool }) => ({ bool: !bool }));
            document.getElementById("nxt").click();
            }
                    var useremail = await fetch("http://localhost:5160/api/RL/GetUserEmail/"+Mobno, {
                        headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        }}).then((response) => response.json()); 
                        
                        console.log("NEW "+newe);
                        console.log("OLD "+useremail);
                        if(newe==useremail) 
                        {
                            alert('Email Matched');
                            BoolToggle();
                        }
                        else
                        {
                            alert('Email Did not match ');
                        }
                       
        }
        getDetails();
        // var test = fetch("http://localhost:5160/api/RL/GetUserEmail/"+Mobno, {
        //     headers : { 
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //     }}).then((response) => response.json()); 
        // console.log(test);
        // var test2=test.then(function(result) {
        //     console.log(result);
        //     return result;
        //  }) 
        //  console.log(test2);      
        
    }

    render()
    {
        if(this.state.bool) return<ForgotPassword/>
        else
        return(
            <div>
                    <Navbar/>
                    <div className="contain">
                    
                        <div className="form-contain">
                            <div className="form-left">
            
                <form className="form">
                <h1 style={{width:"400px", fontSize:"17px" , textAlign:"center"}}>
                                        Looks like you forgot your password. No worries we will change
                                        it according to your liking.
                                    </h1>
                                    <h1 style={{width:"400px", fontSize:"17px", textAlign:"center"}}>
                                        But first please enter your registered email. If the email matches,
                                        then you will be allowed to change your password.
                                    </h1>
                                    <br></br>
                                    <div className="form-inputs">
                                <label htmlFor="mobile" className="form-label">
                                Enter your email 
                                </label>
                                </div>
                <input className="form-input" style={{width:"350px"}} name="newemail" onInput={this.GetData} placeholder="Enter Your Email"></input>
                <button className="form-login" style={{
                                                                backgroundColor: "navy",
                                                                color: "white",
                                                                borderRadius: "5px",
                                                                fontSize: "18px",
                                                                width:"200px"
                                                            }} 
                 onClick={this.Match} >Match Email</button>
                
                </form>
                <button style={{opacity:"0"}} className="btn btn-primary" id="nxt" onClick={(e) => this.setState(prevState => ({bool: !prevState.bool}))}>Next Page</button>
            </div>
            <div className="form-right">
                                <img src="../images/login.jpg" alt="" className="form-img" />
                             </div>
                         </div>
                        
                    </div>
                    <Footer/>
                </div>            
        );
    }
}