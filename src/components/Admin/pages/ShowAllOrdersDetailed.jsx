import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './ShowAllMembership.css';
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

export default class ShowAllOrdersDetailed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CustomOrder: []
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/A/ShowAllOrdersDetailed").then(r => {
            console.log(r.data);

            this.setState({ CustomOrder: r.data });
        })
    }
    render() {
        return (
            <div><ANavbar/>

            <div className="table-container-a">
                    <h1>Show All Order Details</h1>
                    <table className="table-a">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Mobile No.</th>
                                <th>User Name</th>
                                <th>Music Name</th>
                                <th>Artist Name</th>
                                <th>Genre</th>
                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.CustomOrder.map(x =>
                                <tr>
                                    <td data-label="Order ID">{x.orderId}</td>
                                    <td data-label="User Name">{x.user_Name}</td>
                                    <td data-label="Mobile No">{x.mobNo}</td>
                                    <td data-label="Purchased Music">{x.music_Name}</td>
                                    <td data-label="Artist">{x.artist_Name}</td>
                                    <td data-label="Genre">{x.genre}</td>
                                   
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div><Footer/>
                </div>
        );
    }
}