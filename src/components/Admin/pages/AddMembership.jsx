import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

import './AddMembership.css'

class AddMembership extends React.Component {
  state = {
    file: null,
    base64URL: ""
  }
  constructor(props) {
    super(props);
    this.state = {
      memname: '',
      discount: '',
      price: '',
      time: ''
    }
  }
  //var name=document.getElementsByName[0].value;
  //var name=document.getElementById.value;
  GetData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }


  ShowData = (event) => {
    event.preventDefault();

    const membership = {
      Mem_Name: this.state.memname,
      Discount: this.state.discount,
      Price: parseFloat(this.state.price),
      Time: parseInt(this.state.time),
      MemOrders: []

    };
    console.log(membership);
    Axios.post("http://localhost:5160/api/A/InsertMembership", membership).then(
      r => {
        if (r) {
          alert("New Membership Added");

        }
      });

  }
  componentDidMount() {

  }

  render() {
    return (
      <div><ANavbar/>

      <div className="container-a2">
        <div className="form-container-a2">
          <div className="form-content-left-a2">
            <img src="../../../../images/memb.jpg" className="form-img-a2"/>
          </div>
          <div className="form-content-right-a2">
            <form className="form-a2" onSubmit={this.ShowData}>
              <h1>Add New Membership</h1>
              {/*To add membership name*/}
              <div className="form-inputs-a2">
                <br/>
                <label className="form-label-a2">Membership Name</label>
                <input type="text" className="form-input-a2" placeholder="Enter Membership name"
                  required name="memname" onInput={this.GetData} />
              </div>
              {/*To add membership discount*/}
              <div className="form-inputs-a2">
                <label className="form-label-a2">Music Discount</label>
                <input type="number" className="form-input-a2" placeholder="Enter Membership discount"
                  required name="discount" onInput={this.GetData} />
              </div>
              {/*To add membership price*/}
              <div className="form-inputs-a2">
                <label className="form-label-a2">Enter Price</label>
                <input type="number" className="form-input-a2" placeholder="Enter Membership Price"
                  required name="price" onInput={this.GetData}></input>
              </div>
              {/*To add membership time*/}
              <div className="form-inputs-a2">
                <label className="form-label-a2">Enter Time</label>
                <input type="number" className="form-input-a2" placeholder="Enter Duration"
                  required name="time" onInput={this.GetData}></input>
              </div>
              <br/>
              <div>
                <button className="btn-mem" type="submit">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-mem" type="reset">Reset</button>
              </div>
              <hr></hr>
            </form>
          </div>
         
        </div>
      </div>
      <Footer/>
      </div>

    );
  }
}
export default AddMembership;