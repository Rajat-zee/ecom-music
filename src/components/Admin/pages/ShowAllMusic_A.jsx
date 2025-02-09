import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './ShowAllMembership.css';
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

export default class ShowAllMusic_A extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Music: []
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/U/ShowAllMusic").then(r => {
            console.log(r.data);

            this.setState({ Music: r.data });
        })
    }
    render() {
        return (
            <div><ANavbar/>

            <div className="table-container-a" style={{height:"100%"}}>
                <h1>All Music</h1>
                <table className="table-a">
                    <thead>
                        <tr>
                            <th>Music ID</th>
                            <th>Music Name</th>
                            <th>Music Description</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Music Image</th>
                            <th>Music File</th>
                            <th>Price</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Music.map(x =>
                            <tr>
                                <td data-label="Music Id">{x.m_ID}</td>
                                <td data-label="Music Name">{x.name}</td>
                                <td data-label="Description">{x.des}</td>
                                <td data-label="Artist Name">{x.artist}</td>
                                <td data-label="Genre">{x.genre}</td>
                                <td data-label="Music Poster"><img src={x.poster} width={150} height={150} /></td>
                                <td data-label="Music Audio"><audio controls>
                                    <source src={x.audio} type="audio/ogg" />
                                </audio></td>
                                <td data-label="Price">Rs.{x.price} /-</td>
                                <td data-label="Ratings">{x.score}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div><Footer/>
            </div>
        );
    }
}