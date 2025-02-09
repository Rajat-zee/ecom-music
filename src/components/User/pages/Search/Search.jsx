import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import SearchShowTable from "./SearchShowTable";
import ReactDOM from 'react-dom';
import './search.css'
//--------This needs to be implemented in the navbar
export default class Search extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            Music:[],
            search:'',
            music:null,
            bool:false
            
        };
    }

    GetData=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        }

    ShowData=(event)=>{
        let s = this.state.search;
        
        
        sessionStorage.setItem("Search",s);
        
        //this.setState({this.state.bool=a});
        this.setState(({ bool }) => ({ bool: !bool }));
        
        
        
        Axios.get("http://localhost:5160/api/RL/Search/"+s).then(r=>{
            
            
            //ReactDOM.render(<SearchShowTable/>,document.getElementById('root'));
            
            
            });
           
            event.preventDefault();
            
            }

    
    render()
    {
        if(this.state.bool) return<SearchShowTable/>
        else
        return(
            <div className="searchpa">
                <form onSubmit={this.ShowData}>
                <input type="text" name="search" className="search-input" placeholder="Search by Music Name, Artist Name, Genre " onInput={this.GetData}></input>
                <button type="submit" className="search-btn" onClick={this.ShowData}>Search</button>
                
                </form>
            
    
       
       </div>
        );
}
}