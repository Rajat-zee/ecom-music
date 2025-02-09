import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";
import Emptymusic from "../Empty/Emptymusic";
export default class ShowMyOrdersDetailed extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            CustomOrder:[],
            st:[],
            count:0
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        var Mobno = sessionStorage.getItem("MNO");
        Axios.get("http://localhost:5160/api/U/ShowMyOrdersDetailed/"+Mobno).then(r=>{
            
           
            this.setState({CustomOrder:r.data});
        })
    }

    Store(n)
    {
        var a = this.state.st;
        a.push(n);
        
        sessionStorage.setItem("AddTOPlaylist",a);
        alert("Added to Playlist");
    }
    Score(n)
    {
                Axios.put("http://localhost:5160/api/U/UpdateScore/"+ n).then(
                    r => {
                    if (r) {
                    
        
                    }
                });
    }

    render()
    {
        if(this.state.CustomOrder==null) return<div><Emptymusic/></div>
        else
        return(<div className="homepara"><Navbaru />
            <div className="music-container" style={{marginLeft:"10%", marginRight:"5%", marginTop:"10%", marginBottom:"5%"}}>
       <h1 className="head" style={{ textAlign: "center" }}>My Music</h1>
       

          


        <div className="ap">
          {this.state.CustomOrder.map(x=>
            <div key={x.m_ID} className="card">
            <div className="card__body">
              <img src={x.poster} alt="" className="card__image"/>
              <h2 className="card__title">{x.music_Name}</h2>
              <p className="card__description">{x.des} </p>
              <p className="genre-left">{x.genre}</p>
              <p className="artist-right">By : {x.artist_Name}</p> 
            </div>
            {/* Both of these will be icons */}
              <button className="card__btn" id="cart-left"><audio controls>
                        <source src={x.audio} type="audio/ogg"/>
                        </audio></button>
              
              <button className="card__btn" id="like-right" onClick={()=>{this.setState(prevState => ({count: 1+prevState.count}));this.Score(x.m_ID);}}>Like/Heart</button>
              <p className="score">Score : {x.score + this.state.count}</p>
              <button className="card__btn" id="like-right" onClick={()=>{this.Store(x.music_Id)}}>Add TO Playlist</button>
          </div>
          )}
        </div>           

       </div><Footer/>
        </div>
        );
}
}