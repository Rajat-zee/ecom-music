import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";

export default class ShowMusicByGenre extends React.Component
{

    

constructor(props)
    {
        super(props);
        this.state={
            Genre1:[],
            Genre2:[],
            Genre3:[],
            Genre4:[],
            Genre5:[],
            st:[],
            count:0
        };
    }
    componentDidMount() //when the component is mounted this code will execute
    {
        Axios.get("http://localhost:5160/api/U/ShowMusicByGenre/Classical").then(r=>{
            
           
            this.setState({Genre1:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByGenre/Indie Pop").then(r=>{
            
           
            this.setState({Genre2:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByGenre/Bengali Folk").then(r=>{
            
           
            this.setState({Genre3:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByGenre/Rock").then(r=>{
            
           
            this.setState({Genre4:r.data});
        })
        Axios.get("http://localhost:5160/api/U/ShowMusicByGenre/Oldies").then(r=>{
            
           
            this.setState({Genre5:r.data});
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
            <div className="genreparent">
        <div className="genre">
        <h1 className="headg" >Classical</h1>
        <div className="ag">
          {this.state.Genre1.map(x=>
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

       <div className="genre">
       <h1 className="headg" >Indie Pop</h1>
       <div className="ag">
          {this.state.Genre2.map(x=>
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

       <div className="genre">
       <h1 className="headg" >Bengali Folk</h1>
       <div className="ag">
          {this.state.Genre3.map(x=>
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

       <div className="genre">
       <h1 className="headg" >Rock</h1>
       <div className="ag">
          {this.state.Genre4.map(x=>
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

       <div className="genre">
       <h1 className="headg" >Oldies</h1>
       <div className="ag">
          {this.state.Genre5.map(x=>
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
       
       

        
       </div><Footer/>
        </div>

        );
}
}