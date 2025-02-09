import React from "react";
import Axios from "axios";
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";
import FormSignup from "../../../../components/Landing/components/Registration/FormSignup"
import  './Profile.css';

export default class Profile extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            Profile:[],
            
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        var Mobno = sessionStorage.getItem("MNO");
        // Axios.get("http://localhost:5160//api/RL/GetUserByMobileNumber/"+Mobno).then(r=>{
        //     console.log(r.data);
           
        //     this.setState({Profile:r.data});
        // })
        

        async function getDetails()
        {
            
                    var username = await fetch("http://localhost:5160/api/RL/GetUserName/"+Mobno, {
                        headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        }}).then((response) => response.json());
                    var useremail = await fetch("http://localhost:5160/api/RL/GetUserEmail/"+Mobno, {
                        headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        }}).then((response) => response.json());
                    var membershipname = await fetch("http://localhost:5160/api/U/GetUserMembershipName/"+Mobno, {
                        headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        }}).then((response) => response.json());
                    var membershipdiscount = await fetch("http://localhost:5160/api/U/GetUserMembershipDiscount/"+Mobno).then(res => res.json());
                    document.getElementById('UN').innerHTML=username;
                    document.getElementById('UE').innerHTML=useremail;
                    document.getElementById('MN').innerHTML=membershipname;
                    document.getElementById('MD').innerHTML= membershipdiscount+"%";
                     
        }
        getDetails();
                 
            
    }

    render()
    {
        return(<div><Navbaru />
                <div className="container">
                    <div className="form-container">
                        <div className="form-content-left">
                            <img src="../images/form.jpg" alt="" className="form-img" />
                        </div>
                        <div className="form-content-right">
                            <div className="myprofile">
                            <h1 className="mphead">My Profile</h1>
                            <div className="mpcontent">
                                <div className="connected">
                                    <label className="mp">User Name</label><h2 className="mpd" id="UN"></h2>
                                </div>
                                <div className="connected">
                                    <label className="mp">My Email</label><h2 className="mpd" id="UE"></h2>
                                </div>
                                <div className="connected">
                                    <label className="mp">Membership Name</label><h2 className="mpd" id="MN"></h2>
                                </div>
                                <div className="connected">
                                    <label className="mp">Membership Discount</label><h2 className="mpd" id="MD"></h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                
                
                
            <Footer/>
        </div>
        );
    }
}