import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Emptycart from '../Empty/Emptycart';
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";
import './Cart.css';

export default class ShowCart extends React.Component
{

    

constructor(props)
    {
        super(props);
        this.state={
            Cart1:[],
            Cart2:[],
            cart:[],
            cart:sessionStorage.getItem("AddTOCart"),
            price:[],
            buy:[],
            buy:sessionStorage.getItem("AddTOCart"),
            
            
            
        };
    }

    
    componentDidMount() //when the component is mounted this code will execute
    {
        
        var id = this.state.cart;
        //Turned String To Array as data recieved from session storage is string
        if(id==null)
        {   
        }
        else
        {
            const array = id.split(",");
            //console.log(array);
    
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
              }
            
            //Array free of duplicates contains music IDs
            var unique = array.filter(onlyUnique);
            
            //console.log(unique);
            //Array that contains all the bill data to show
            var con = this.state.Cart2;
             for(var i=0 ; i<unique.length ; i++)
             {
                
    
                Axios.get("http://localhost:5160/api/U/ShowCart/"+unique[i]).then(r=>{
                    
                    
                    con.push(r.data);
                   
                    //This is not needed but If I remove this, nothing works
                    this.setState({Cart1:r.data});
                })
    
             }
             
            
            
            
            
            var mobno=sessionStorage.getItem("MNO");
            
            
            //membership name
            let mm='None';
            //discount
            let di=0;
            let temp;
                //Mem Name is not working. 
                //Mem name is now woeking
            async function getDetails(){
                try
                {
                        di = await fetch("http://localhost:5160/api/U/GetUserMembershipDiscount/"+mobno).then(res => res.json());
                        mm = await fetch("http://localhost:5160/api/U/GetUserMembershipName/"+mobno, {
                        headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        }}).then((response) => response.json());
    
                        var price = [];
                        for(var i=0 ; i<unique.length ; i++)
                        {
                            temp = await fetch("http://localhost:5160/api/U/Price/"+unique[i]).then(res => res.json());
                            price.push(temp);
                        }
                }
                catch (err)
                {
                    
                }
                finally
                {
                   
                    document.getElementById("Mem_Name").innerHTML = mm;
                    document.getElementById("Discount").innerHTML = di+"%";
                    const sum = price.reduce((partialSum, a) => partialSum + a, 0);
                    var tot = sum;
                    var totdis = (tot*di)/100;
                    var final = tot-totdis;
                    document.getElementById("Res").innerHTML = tot+" - "+totdis+" = "+final;
                    document.getElementById("Total").innerHTML = tot;
                    document.getElementById("DiscountAmount").innerHTML = totdis;
                    
                }
                
            }
    
            getDetails();
        }
           
    }

    Buy=(event)=>{
        
        var id = this.state.buy ;
        //Turned String To Array as data recieved from session storage is string
        const array = id.split(",");

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
        
        //Array free of duplicates contains music IDs
        var unique = array.filter(onlyUnique);
        //console.log(unique);
        for(var i=0 ; i<unique.length ; i++)
                {
                    const order={
                        //use session storage here for mobile
                        mobNo:2222222222,
                        m_ID: unique[i],
                        user:null,
                        membership:null
                    };
                    //console.log("Order:", order );
                    Axios.post('http://localhost:5160/api/U/BuyMusic',order).then(r=>{
                            if(r)
                            {
                                //console.log("Music Bought");
                                alert("Music Purchased \n Check -My Muisc- ");
                            }
                    });
                    
                    
                }

    }
    
    
    render()
    {
        if(this.state.cart==null) return<div><Emptycart/></div>
        else
        return(<div className="homepara"><Navbaru />
            <div>
            <div className="container-sm p-5 my-5 border">
       <h1 className="head" style={{textAlign:"center"}}>My Cart</h1>
       
       <table className="table">
           <thead>
           <tr>
               
               <th>Music Name</th>
               
               <th>Artist</th>
               <th>Genre</th>
               
               <th>Price</th>
               
           </tr>
           </thead>
           <tbody>
               {this.state.Cart2.map(x=>
                <tr key={x.m_ID}>
                    
                    <td>{x.name}</td>
                    
                    <td>{x.artist}</td>
                    <td>{x.genre}</td>
                   
                    <td>{x.price}</td>
                    
                 </tr>
                )}
                <tr>
                    <td></td>
                    <td></td>
                    <td><h5>Total</h5></td>
                    <td><h5 id="Total"></h5></td>
                </tr>
           </tbody>
       </table>
       <table className="table table-striped">
       <thead>
           <tr>
               <th>Membership Name</th>
               <th>Discount Applicable</th>
               <th>Discount Amount</th>
           </tr>
           </thead>
           <tbody>
               <tr>
                   <td id="Mem_Name"></td>
                   <td id="Discount"></td>
                   <td id="DiscountAmount"></td>
               </tr>
           </tbody>
       </table>
       <table className="table table-striped" style={{textAlign:"center"}}>
       <thead>
           <tr>
               <th>Final Amount</th>
           </tr>
           </thead>
           <tbody>
               <tr>
                   <td ><h5 id="Res"></h5></td>
               </tr>
           </tbody>
       </table>
       <div style={{textAlign:"center"}}>
       <button className="btn btn-primary" onClick={this.Buy} >Buy Now</button>
       </div>
       </div>

       
       </div><Footer/>
        </div>

        );
}
}