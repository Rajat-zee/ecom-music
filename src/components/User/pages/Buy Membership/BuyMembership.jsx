import React from "react";
//import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './BuyMembership.css';
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";

export default class BuyMembership extends React.Component {
  state = {
    file: null,
    base64URL: ""
  }
  constructor(props) {
    super(props);
    this.state = {
      mobno: sessionStorage.getItem("MNO"),
      mem_id: '',
    }
  }
  
  GetData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  

  
  ShowData = (event) => {
    event.preventDefault();

    const music = {
      Mobno: this.state.mobno,
      mem_ID: this.state.mem_id,
      
      Membershp:[],
      Mem_Orders:[]
      
    };
   
    Axios.post("http://localhost:5160/api/U/BuyMem/", music).then(
      r => {
        if (r) {
          alert("Membership Purchased");

        }
      });

  }
  componentDidMount() {
    var Mobno = this.state.mobno;
    document.getElementById("umobno").value=Mobno;
  }

  render() {
    return (<div><Navbaru />
      <div className="container2u">
      <div className="form-container2u">
        <div className="form-content-left2u">
          <img src="../../../../images/gift4.png" className="form-img2u"/>
        </div>
        <div className="form-content-right2u">
          <form className="formu" onSubmit={this.ShowData}>
            <h2>Buy Membership</h2>
            {/*To add user id*/}
            <div className="form-inputsu">
              <label className="form-labelu">Mobile No: </label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="tel" className="form-inputu" placeholder="Enter Your Mobile No."
                 id="umobno" readOnly/>
                <br/>
            </div>
            {/*To select membership plan */}
            
              <div className="form-inputsu">
                  <label htmlFor="membership" className="form-labelu">Select Plan:</label><br/>
                  <select className="form-selectu" aria-label="Default select example" name="mem_id" id="artist" onChange={this.GetData}>
                    <option value="">Select Membership</option>
                    <option value="">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Discount</option>
                    <option value="1">Silver&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.500/-&nbsp;&nbsp;&nbsp;3 months&nbsp;&nbsp;10%</option>
                    <option value="2">Gold&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.1000/-&nbsp;&nbsp;6 months&nbsp;&nbsp;20%</option>
                    <option value="3">Diamond&nbsp;&nbsp;Rs.1500/-&nbsp;&nbsp;11 months&nbsp;&nbsp;30%</option>
                    
                  </select>
                  <br/>
                  <br/>
                </div>
              <div>
              <button className="btnu" type="submit">Buy Now</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btnu" type="reset">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div><Footer/>
        </div>
    );
  }
}
