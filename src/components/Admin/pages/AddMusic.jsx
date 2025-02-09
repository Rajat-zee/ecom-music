import React from "react";
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ANavbar from "../ANavbar";
import Footer from "../../Landing/components/Footer";

import './AddMusic.css';
//import './images/form.jpg';

export default class AddMusic extends React.Component {
  state = {
    file: null,
    base64URL: ""
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      des: '',
      artist: '',
      genre: '',
      price: '',
      score: '',
      poster: '',
      audio: ''
    }
  }

  GetData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  getBase64poster = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        //console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
        this.poster = baseURL;
      };



    });
  };

  getBase64audio = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        //console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
        this.audio = baseURL;
      };



    });
  };

  handleFileInputChangeposter = e => {

    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64poster(file)
      .then(result => {
        file["base64"] = result;
        //console.log("File Is", file);
        this.setState({
          base64URL: result,
          file
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });
  };

  handleFileInputChangeaudio = e => {

    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64audio(file)
      .then(result => {
        file["base64"] = result;
        //console.log("File Is", file);
        this.setState({
          base64URL: result,
          file
        });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });
  };


  ShowData = (event) => {
    event.preventDefault();

    const music = {
      Name: this.state.name,
      Des: this.state.des,
      Poster: this.poster,
      Artist: this.state.artist,
      Genre: this.state.genre,
      Audio: this.audio,
      Price: parseFloat(this.state.price),
      Score: 0,
      Orders: [],
      Playlists: []

    };
    console.log(music);
    Axios.post("http://localhost:5160/api/A/InsertMusic", music).then(
      r => {
        if (r) {
          alert("New Music Added");

        }
      });

  }
  componentDidMount() {

  }

  render() {
    return (
      <div><ANavbar/>

      <div className="container-a1">
        <div className="form-container-a1">
          <div className="form-content-left-a1">
            <img src="../../../../images/addm2.jpg" alt="" className="form-img"/>
          </div>
          <div className="form-content-right-a1">
            <form className="form-a1" onSubmit={this.ShowData} noValidate>
              <h1>Add New Music</h1>

              {/*To add music name*/}
              <div className="form-inputs-a1">
                <label htmlFor="musicname" className="form-label-a1">Album Name</label><br/>
                <input type="text" className="form-input-a1" placeholder="Enter Music name"
                  required name="name" onInput={this.GetData} />
                {/*<div className="invalid-feedback">Please Enter Music Name. It cannot be blank.</div>*/}
              </div>
              {/*To add music description*/}
          
              <div className="form-inputs-a1">
                <label htmlFor="musicdesc" className="form-label-a1">About the Music</label><br/>
                <input type="text" className="form-input-a1" placeholder="Enter Music Desc"
                  required name="des" onInput={this.GetData}/>
              </div>
              <div className="form-inputs-a1" style={{width:"80%"}}>
                {/*To add music artist*/}
              
                <div className="form-inputs-a1" style={{float:"left",width:"45%"}}>
                    <label htmlFor="artist" className="form-label-a1">Artist</label><br/>
                    <select className="form-select" aria-label="Default select example" name="artist" id="artist" onChange={this.GetData}>
                      <option value="">Select Artist</option>
                      <option value="Arijit Singh">Arijit Singh</option>
                      <option value="Ed Sheeran">Ed Sheeran</option>
                      <option value="Sid Sriram">Sid Sriram</option>
                      <option value="Shreya Ghosal">Shreya Ghosal</option>
                      <option value="Dua Lipa">Dua Lipa</option>
                    </select>
                  </div>
                {/*To add music genre*/}
              
                <div className="form-inputs-a1" style={{marginLeft:"50%",width:"50%"}}>
                  <label htmlFor="musicgenre" className="form-label-a1">Genre</label><br/>
                  <select className="form-select" aria-label="Default select example"  name="genre" id="genre" onChange={this.GetData}>
                    <option value="">Select Genre</option>
                    <option value="Classical">Classical</option>
                    <option value="Indie Pop">Indie Pop</option>
                    <option value="Bengali Folk">Bengali Folk</option>
                    <option value="Rock">Rock</option>
                    <option value="Oldies">Oldies</option>
                  </select>
                  {/*<div className="invalid-feedback">Please Select Music Genre. It cannot be blank.</div>*/}
                </div>
              </div>
            
              {/*To add music poster & audio*/}
              <div className="form-inputs-a1" style={{width:"80%"}}>
                <div className="form-inputs-a1" style={{float:"left",width:"45%"}}>
                  <label htmlFor="musicposter" className="form-label-a1">Upload Poster</label><br/>
                  <input type="file" className="form-input-a1" 
                    required name="file" id="file" accept=".png,.jpeg,.jpg,.gif" onChange={this.handleFileInputChangeposter} />
                  
                </div>
                {/*To add music audio*/}
            
                <div className="form-inputs-a1" style={{marginLeft:"50%",width:"50%"}}>
                  <label htmlFor="musicaudio" className="form-label-a1">Upload Audio</label><br/>
                  <input type="file" className="form-input-a1" placeholder="Select Img file to upload"
                    required name="audiofile" id="audiofile" accept=".mp3" onChange={this.handleFileInputChangeaudio} />
                  
                </div>
              </div>
              
              {/*To add music price*/}
              <div className="form-inputs-a1">
                <label htmlFor="musicprice" className="form-label-a1">Enter Price: Rs</label><br/>
                <input type="number" className="form-input-a1" placeholder="Enter Music Price"
                  required name="price" onInput={this.GetData}></input> 
              </div>
              <br/>
               {/*To add music score
                <div className="form-inputs">
                  <label htmlFor="musicratings" className="form-label">Ratings :</label><br/>
                  <input type="number" className="form-Control" placeholder="Enter Quantity In Hand"
                  required name="score" onInput={this.GetData}></input>
                <div className="invalid-feedback">Enter Score rated. It cannot be blank.</div>
              </div>*/}
            
              <div>
                <button className="btn-music" type="submit">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-music" type="reset">Reset</button>
              </div>
              
            </form>
          </div>
          
        </div>
      </div><Footer/>
      </div>
    );
  }
}