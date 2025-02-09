import React from "react";
import Axios from 'axios';
import Login from './Login';
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class ForgotPassword extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            newpwd: '',
            mobno:sessionStorage.getItem("MNO"),
            bool:false,
        }
      }
      
      GetData = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

      Reset = (event) => {
        event.preventDefault();
        var mobno = this.state.mobno
        const user = {
          Mobno: mobno,
          Name: 'update',
          Pass: this.state.newpwd,
          Email: 'update',
          regType: 'update',
          Playlists:[],
          Orders:[],
          MemOrders:[],
        };
        
        Axios.put("http://localhost:5160/api/RL/ResetPassword/"+mobno, user).then(
          r => {
            if (r) {
              alert("Password Changed");
              this.setState(({ bool }) => ({ bool: !bool }));
    
            }
          });
    
      }

    render()
    {   if(this.state.bool) return<Login/>
        else
        return(<div>
          <Navbar/>
          <div className="contain">
          
              <div className="form-contain">
                  <div className="form-left">
                      <form className="form" onSubmit={this.Reset}>
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
                          New Password
                      </label>
                      </div>
                      <input className="form-input" style={{width:"350px"}} name="newpwd" onInput={this.GetData} placeholder="Enter New Password"></input>
                      
                      <button type="submit" className="form-login" style={{
                                                                          backgroundColor: "navy",
                                                                          color: "white",
                                                                          borderRadius: "5px",
                                                                          fontSize: "18px",
                                                                          width:"200px"
                                                                          }}>
                      Reset Password</button>
                      {/* <button className="form-login" style={{
                                                              backgroundColor: "navy",
                                                              color: "white",
                                                              borderRadius: "5px",
                                                              fontSize: "18px",
                                                              width:"200px"
                                                          }} 
                      onClick={(e) => this.setState(prevState => ({bool: !prevState.bool}))}>Login</button> */}
                 
                      
                      </form>
                  </div>                            
                   <div className="form-right">
                      <img src="../images/login.jpg" alt="" className="form-img" />
                   </div>
               </div>
              
          </div>
          <Footer/>
      </div>     
            // <div>
            //     <form onSubmit={this.Reset}>
            //     <label>New Password:- </label>
            //     <input className="newpwd" name="newpwd" onInput={this.GetData} placeholder="Enter New Password"></input>
            //     <button type="submit" className="btn btn-primary">Reset Password</button>
            //     </form>
            //     <button className="btn btn-primary" onClick={(e) => this.setState(prevState => ({bool: !prevState.bool}))}>Login</button>
            // </div>
        );
    }
}