import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './ShowAllMembership.css';

import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

export default class ShowAllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            User: []
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/A/ShowAllUsers").then(r => {
            console.log(r.data);

            this.setState({ User: r.data });
        })
    }
    render() {
        return (
            <div><ANavbar/>
            <div className="table-container-a">
                    <h1>All Users</h1>
                    <table className="table-a">
                        <thead>
                            <tr>
                                <th>Mobile Number</th>
                                <th>User Name</th>
                                <th>Password</th>
                                <th>Email</th>
                                <th>User Type</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.User.map(x =>
                                <tr>
                                    <td data-label="Mobile No">{x.mobno}</td>
                                    <td data-label="User Name">{x.name}</td>
                                    <td data-label="Password">{x.pass}</td>
                                    <td data-label="Email">{x.email}</td>
                                    <td data-label="User Type">{x.regType}</td>

                                </tr>
                            )}
                        </tbody>
                    </table>
            </div><Footer/>
            </div>
        );
    }
}