import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Axios from 'axios';
import './Home.css';
import Search from '../Search/Search';
import Navbar from "../../Navbar";
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";
export default class Home extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            MusicS:[],
            MusicL:[],
            st:[],
            bool:false,
            bools:false,
            booll:false,
            count:0
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/U/ShowMusicByLatest").then(r=>{
            
           
            this.setState({MusicL:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByScore").then(r=>{
            
           
            this.setState({MusicS:r.data});
        })
    }
    Score(n)
    {
        var r = this.state.count;
        
                Axios.put("http://localhost:5160/api/U/UpdateScore/"+ n).then(
                    r => {
                    if (r) {
                    
        
                    }
                });
                alert("Gave a Like");

        // var b = this.state.bool;
        // if(b)
        // {
        //     document.getElementById("like-right").innerHTML="AAAA";
        // }
        //onClick={(e) => this.setState(prevState => ({bool: !prevState.bool}))}
        
        
        
    }
    Store(n)
    {
        var a = this.state.st;
        a.push(n);
        
        sessionStorage.setItem("AddTOCart",a);
        alert("Added Item to cart");
    }
    render()
    {
        return(
            <div className="homepara"><Navbaru />
            <div>
                
                <Search/>
            <div className="MuByScore">
                <div className="headps">
                <h2 id="heads">Highly Rated</h2><button  id="btns" onClick={(e) => this.setState(prevState => ({bools: !prevState.bools}))}>+</button>
                </div>
                {this.state.bools && <div className="a">
          {this.state.MusicS.map(x=>
            <div key={x.m_ID} className="card">
            <div className="card__body">
              <img src={x.poster} alt="" className="card__image"/>
              <h2 className="card__title">{x.name}</h2>
              <p className="card__description">{x.des} </p>
              <p className="genre-left">{x.genre}</p>
              <p className="artist-right">By : {x.artist}</p>
            </div>
            {/* Both of these will be icons */}
              <button className="card__btn" id="cart-left" onClick={()=>{this.Store(x.m_ID)}}>Add To Cart</button>
              <p className="price">Price : {x.price}</p>
              <button className="card__btn" id="like-right" >Score : {x.score}</button>
            </div>
            )}
            </div>
          }
            </div>
        {/*------------------------------------*/}
            <div className="MuByLatest">
                <div className="headpl">
                <h2 id="headl">Latest Music</h2><button id="btnl"  onClick={(e) => this.setState(prevState => ({booll: !prevState.booll}))}>+</button>
                </div>
                {this.state.booll && <div className="a">
                {this.state.MusicL.map(x=>
                    <div key={x.m_ID} className="card">
                    <div className="card__body">
                    <img src={x.poster} alt="" className="card__image"/>
                    <h2 className="card__title">{x.name}</h2>
                    <p className="card__description">{x.des} </p>
                    <p className="genre-left">{x.genre}</p>
                    <p className="artist-right">By : {x.artist}</p>
                    </div>
                    {/* Both of these will be icons */}
                    <button className="card__btn" id="cart-left" onClick={()=>{this.Store(x.m_ID)}}>Add To Cart</button>
                    <p className="price">Price : {x.price}</p>
                    <button className="card__btn" id="like-right" onClick={()=>{this.setState(prevState => ({count: 1+prevState.count}));this.Score(x.m_ID);}}>Like/Heart</button>
                    <p className="score">Score : {x.score +this.state.count}</p>
          </div>
          )}
        </div>
        }
        </div>
        </div><Footer/>
        </div>
        );
}
}