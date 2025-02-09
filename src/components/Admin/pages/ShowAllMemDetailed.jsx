import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './ShowAllMembership.css';
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

export default class ShowAllMemDetailed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Mem: []
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/A/ShowAllMembershipsDetailed").then(r => {
            console.log(r.data);

            this.setState({ Mem: r.data });
        })
    }
    render() {
        return (
            <div><ANavbar/>

            <div className="table-container-a">

                <h1>All Membership Orders</h1>
                <table className="table-a">
                    <thead>
                        <tr>
                            <th>Mobile NO</th>
                            <th>User Name</th>
                            <th>MemOrder_ID</th>
                            <th>Mem_Name</th>
                            <th>Discount</th>
                            <th>Price</th>
                            <th>Duration</th>


                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Mem.map(x =>
                            <tr>
                                <td data-label="Membership Order ID">{x.memOrder_ID}</td>
                                <td data-label="User Name">{x.user_Name}</td>
                                <td data-label="Mobile No">{x.mobNo}</td>
                                <td data-label="Membership Name">{x.mem_Name}</td>
                                <td data-label="Discount">{x.discount} %</td>
                                <td data-label="Price">Rs.{x.price} /-</td>
                                <td data-label="Duration">{x.time} months</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div><Footer/>
            </div>
        );
    }
}