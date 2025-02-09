
import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Home from "../Home/Home";
import Search from "./Search";


export default class SearchShowTable extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            Music:[],
            search:sessionStorage.getItem("Search"),
            bool:false
            
          
        }
       
    
    }
    componentDidMount() 
    {   
        var s = this.state.search;
        Axios.get("http://localhost:5160/api/RL/Search/"+s).then(r=>{
            
           
            this.setState({Music:r.data});
        })
    }
    
    render()
    {
    
           
      if(this.state.bool) return<Search/>
      else      
      return(
        <div className="container-sm p-5 my-5 border">
        <h1 style={{color:"white"}}>Search Results</h1>
        <div className="a">
        {this.state.Music.map(x=>
          <div className="card">
          <div className="card__body">
            <img src={x.poster} alt="" className="card__image"/>
            <h2 className="card__title">{x.name}</h2>
            <p className="card__description">{x.des} </p>
            <p className="genre-left">{x.genre}</p>
            <p className="artist-right">By : {x.artist}</p>
            
            
          </div>
          {/* Both of these will be icons */}
            <button className="card__btn" id="cart-left">Add To Cart</button>
            <p className="price">Price : {x.price}</p>
            <button className="card__btn" id="like-right">Like/Heart</button>
            <p className="score">Score : {x.score}</p>

        </div>
        )}


        
        



          
      </div>
      <button className="btn btn-primary" onClick={()=>{this.setState(prevState => ({bool: !prevState.bool}))}}>Home</button>
      </div>
      );
    
    }
}