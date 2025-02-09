import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './ShowAllMembership.css';
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

export default class ShowAllMembership extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Membership: []
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/A/ShowAllMemberships").then(r => {
            console.log(r.data);

            this.setState({ Membership: r.data });
        })
    }
    render() {
        return (
            <div><ANavbar/>

            <div className="table-container-a">
                <h1>Available Memberships</h1>
                <table className="table-a">
                    <thead>
                        <tr>
                            <th>Membership ID</th>
                            <th>Membership Name</th>
                            <th>Discount</th>
                            <th>Price</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.Membership.map(x =>
                            <tr>
                                <td data-label="Membership ID">{x.mem_ID}</td>
                                <td data-label="Membership Name">{x.mem_Name}</td>
                                <td data-label="Discount">{x.discount} %</td>
                                <td data-label="Price">Rs. {x.price} /-</td>
                                <td data-label="Time">{x.time} months</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div><Footer/>
            </div>
        );
    }
}