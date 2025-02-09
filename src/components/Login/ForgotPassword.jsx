import React from "react";
import Axios from 'axios';
import Login from './Login';

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
    
            }
          });
    
      }

    render()
    {   if(this.state.bool) return<Login/>
        else
        return(
            <div>
                <form onSubmit={this.Reset}>
                <label>New Password:- </label>
                <input className="newpwd" name="newpwd" onInput={this.GetData} placeholder="Enter New Password"></input>
                <button type="submit" className="btn btn-primary">Reset Password</button>
                </form>
                <button className="btn btn-primary" onClick={(e) => this.setState(prevState => ({bool: !prevState.bool}))}>Login</button>
            </div>
        );
    }
}