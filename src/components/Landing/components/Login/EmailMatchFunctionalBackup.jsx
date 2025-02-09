import React from "react";

import ForgotPassword from "./ForgotPassword";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";


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
                <form>
                <label>New Password:- </label>
                <input className="newemail" name="newemail" onInput={this.GetData} placeholder="Enter Your Email"></input>
                <button className="btn btn-primary" onClick={this.Match} >Match Email</button>
                
                </form>
                <button style={{opacity:"0"}} className="btn btn-primary" id="nxt" onClick={(e) => this.setState(prevState => ({bool: !prevState.bool}))}>Next Page</button>
            </div>
        );
    }
}