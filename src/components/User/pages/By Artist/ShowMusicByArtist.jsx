import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";



export default class ShowMusicByArtist extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            Artist1:[],
            Artist2:[],
            Artist3:[],
            Artist4:[],
            Artist5:[],
            st:[],
            count:0
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/U/ShowMusicByArtist/Arijit Singh").then(r=>{
            
           
            this.setState({Artist1:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByArtist/Ed Sheeran").then(r=>{
            
           
            this.setState({Artist2:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByArtist/Sid Sriram").then(r=>{
            
           
            this.setState({Artist3:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByArtist/Shreya Ghosal").then(r=>{
            
           
            this.setState({Artist4:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByArtist/Dua Lipa").then(r=>{
            
           
            this.setState({Artist5:r.data});
        })
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
            <div className="artistparent">
        <div className="artist">
        <h1 className="heada" >Arijit Singh</h1>
        <div className="aa">
          {this.state.Artist1.map(x=>
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
              
            </div>
            )}
        </div>
        </div>

       <hr>
       </hr>

       <div className="artist">
       <h1 className="heada" >Ed Sheeran</h1>
       <div className="aa">
          {this.state.Artist2.map(x=>
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
              
            </div>
            )}
        </div>
       
       </div>

       <hr>
       </hr>

       <div className="artist">
       <h1 className="heada" >Sid Sriram</h1>
       <div className="aa">
          {this.state.Artist3.map(x=>
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
              </div>
            )}
        </div>
        </div>
       <hr>
       </hr>
       
       <div className="artist">
       <h1 className="heada" >Shreya Ghosal</h1>
       <div className="aa">
          {this.state.Artist4.map(x=>
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
              </div>
            )}
        </div>
        </div>
       <hr>
       </hr>

       <div className="artist">
       <h1 className="heada" >Dua Lipa</h1>
       <div className="aa">
          {this.state.Artist5.map(x=>
            <div key={x.m_ID}  className="card">
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
              </div>
            )}
        </div>
        </div>
       <hr>
       </hr>

        
       </div><Footer/>
        </div>
        );
}
}