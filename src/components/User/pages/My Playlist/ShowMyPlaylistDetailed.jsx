import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Emptyplaylist from "../Empty/Emptyplaylist";
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";
export default class ShowMyPlaylistDetailed extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            CustomPlaylist:[],
            CustomPlaylist2:[],
            mid:sessionStorage.getItem("AddTOPlaylist"),
            rem:sessionStorage.getItem("AddTOPlaylist"),
            boolp:false,
        };
    }
    Remove(n)
    {
        var id = this.state.rem;
        const array = id.split(",");
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
        var unique = array.filter(onlyUnique);
        var uniquenumber = unique.map(x => parseInt(x));
        

       
        
        const index = uniquenumber.findIndex((element) => element === n);
        if (index !== -1) {
            uniquenumber.splice(index, 1);
            }
        

        var remres= uniquenumber;
        sessionStorage.setItem("AddTOPlaylist",remres);
        alert("Music Removed From Playlist");
        this.setState(({ bool }) => ({ bool: !bool }));
        window.location.reload(false);

    }
    componentDidMount() //when the component is mounted this code will execute
    {

        var id = this.state.mid;
        if(id==null)
        {

        }
        else
        {
            //Turned String To Array as data recieved from session storage is string
        const array = id.split(",");
        //console.log(array);

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
        
        //Array free of duplicates contains music IDs
        var unique = array.filter(onlyUnique);

        //console.log(unique);
        //Array that contains all the bill data to show
        var con = this.state.CustomPlaylist2;
        
        for(var i=0 ; i<unique.length ; i++)
         {
            

            Axios.get("http://localhost:5160/api/U/ShowCart/"+unique[i]).then(r=>{
                
                
                con.push(r.data);
               
                //This is not needed but If I remove this, nothing works
                this.setState({CustomPlaylist:r.data});
            })

         }
        }
        
    }

    Score(n)
    {
                Axios.put("http://localhost:5160/api/U/UpdateScore/"+ n).then(
                    r => {
                    if (r) {
                    
        
                    }
                });
    }

    

   

    //Everything is working, just need to reload this component after removal is done

    render()
    {
        if(this.state.mid == null)
        {
            return(
                <div><Emptyplaylist/></div>
            )
        }
        else
        return(<div className="homepara"><Navbaru />
            <div>
            <div className="aaaaaa" style={{marginLeft:"10%", marginRight:"5%", marginTop:"10%", marginBottom:"5%"}}>
            <div className="head">
            <h2 id="headl">My Playlist</h2><button id="btnl"  onClick={(e) => this.setState(prevState => ({boolp: !prevState.boolp}))}>+</button>
            </div>
       
       {this.state.boolp && <table className="table">
           <thead>
           <tr>
               
               <th>Music Name</th>
               
               <th>Artist</th>
               <th>Genre</th>
               
               <th>Audio</th>
               
           </tr>
           </thead>
           <tbody>
               {this.state.CustomPlaylist2.map(x=>
                <tr key={x[0].m_ID}>
                    
                    <td>{x[0].name}</td>
                    
                    <td>{x[0].artist}</td>
                    <td>{x[0].genre}</td>
                   
                    <td><audio controls>
                        <source src={x[0].audio} type="audio/ogg"/>
                        </audio></td>
                    <td>
                        <button className="btn btn-danger" onClick={()=>{this.Remove(x[0].m_ID)}}>Remove</button>
                        
                    </td>
                    
                 </tr>
                )}
           </tbody>
           
       </table> }

       </div>

       
       <div className="ap">
          {this.state.CustomPlaylist2.map(x=>
            <div key={x[0].m_ID} className="card">
            <div className="card__body">
              <img src={x[0].poster} alt="" className="card__image"/>
              <h2 className="card__title">{x[0].name}</h2>
              <p className="card__description">{x[0].des} </p>
              <p className="genre-left">{x[0].genre}</p>
              <p className="artist-right">By : {x[0].artist}</p> 
            </div>
            {/* Both of these will be icons */}
              <button className="card__btn" id="cart-left"><audio controls>
                        <source src={x[0].audio} type="audio/ogg"/>
                        </audio></button>
              
              <button className="card__btn" id="like-right" onClick={()=>{this.Score(x.m_ID)}}>Like/Heart</button>
              <p className="score">Score : {x[0].score}</p>
          </div>
          )}
        </div>

       </div><Footer/>
        </div>
        );
}
}