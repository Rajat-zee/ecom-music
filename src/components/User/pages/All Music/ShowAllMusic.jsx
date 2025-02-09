import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
//import Navbar from '../../Navbar';
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";

export default class ShowAllMusic extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            Music:[],
            st:[],
            count:0
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/U/ShowAllMusic").then(r=>{
            
           
            this.setState({Music:r.data});
        })
    }
    Score(n)
    {
       
                Axios.put("http://localhost:5160/api/U/UpdateScore/"+ n).then(
                    r => {
                    if (r) {
                    
        
                    }
                });
                
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
        return(<div className="homepara"><Navbaru />
            <div className="allmusic">
                {/* <Navbar /> */}
        <h2 className="head" style={{ textAlign: "center" }}>All Music:</h2>
        <div className="a">
          {this.state.Music.map(x=>
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
              <p className="score">Score : {x.score + this.state.count}</p>
            </div>
            )}
        </div>
       </div><Footer/>
        </div>
        );
}
}