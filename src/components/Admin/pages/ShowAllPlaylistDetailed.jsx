import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './ShowAllMembership.css'
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

export default class ShowAllPlaylistDetailed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CustomPlaylist: []
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/A/ShowAllPlaylistDetailed").then(r => {
            console.log(r.data);

            this.setState({ CustomPlaylist: r.data });
        })
    }
    render() {
        return (
            <div><ANavbar/>

            <div className="table-container-a">
                <h1>All PlayList Details</h1>
                <table className="table-a">
                    <thead>
                        <tr>
                            <th>Playlist Id</th>
                            <th>Mobile No.</th>
                            <th>User Name</th>
                            <th>Music Name</th>
                            <th>Artist Name</th>
                            <th>Genre</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.CustomPlaylist.map(x =>
                            <tr>
                                <td data-label="Playlist ID">{x.playlist_Id}</td>
                                <td data-label="Mobile No">{x.mobNo}</td>
                                <td data-label="User Name">{x.user_Name}</td>
                                <td data-label="Music Name">{x.music_Name}</td>
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