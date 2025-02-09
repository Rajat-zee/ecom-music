import React from "react";
import Navbar from "./components/Navbar";
import "./landing.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Register from "./components/Registration/Register";
import Login from "./components/Login/Login";
import EmailMatch from "./components/Login/EmailMatch"

import AddMusic from "../Admin/pages/AddMusic";
import AddMembership from "../Admin/pages/AddMembership";
import ShowAllMusic_A from "../Admin/pages/ShowAllMusic_A";
import ShowAllMembership from "../Admin/pages/ShowAllMembership";
import ShowAllPlaylistDetailed from "../Admin/pages/ShowAllPlaylistDetailed";
import ShowAllUsers from "../Admin/pages/ShowAllUsers";
import ShowAllMemDetailed from "../Admin/pages/ShowAllMemDetailed";
import ShowAllOrdersDetailed from "../Admin/pages/ShowAllOrdersDetailed";

import ShowCart from "../User/pages/Cart/Cart";
import ShowMyOrdersDetailed from "../User/pages/My Music/ShowMyOrdersDetailed";
import ShowMyPlaylistDetailed from "../User/pages/My Playlist/ShowMyPlaylistDetailed";
import ShowAllMusic from "../User/pages/All Music/ShowAllMusic";
import ShowMusicByGenre from "../User/pages/By Genre/ShowMusicByGenre";
import ShowMusicByArtist from "../User/pages/By Artist/ShowMusicByArtist";
import BuyMembership from "../User/pages/Buy Membership/BuyMembership";



import Profile from "../User/pages/Profile/Profile";
import Pagenotfound from "../User/pages/Empty/Pagenotfound";


const Landing = () => {
  return (
    <>
      <Router>
        
        <Routes>
        {/* LANDING */}
        <Route path='/' exact element={<Home />} /> 
        <Route path='/LL' exact element={<Home />} /> 
        <Route path='/signup'  element={<Register />} /> 
        <Route path='/reset1'  element={<EmailMatch />} /> 
        <Route path='/aa'  element={<Login />} /> 
        <Route path="*"   element={<Pagenotfound />}/>

        {/* ADMIN */}
        <Route path="/addmusic"  exact element={<AddMusic />}/>
        <Route path="/addmembership"  exact element={<AddMembership />}/>
        <Route path="/allmusic" exact element={<ShowAllMusic_A/>}/>
        <Route path="allmemberships" exact element={<ShowAllMembership/>}/>
        <Route path="/allplaylists" exact element={<ShowAllPlaylistDetailed/>}/>
        <Route path="/allusers" exact element={<ShowAllUsers/>}/>
        <Route path="/membershiporders" exact element={<ShowAllMemDetailed/>}/>
        <Route path="/musicorders" exact element={<ShowAllOrdersDetailed/>}/>  

        {/* USER */}
        <Route path="/cart"   element={<ShowCart />}/>
        <Route path="/mymusic"   element={<ShowMyOrdersDetailed />}/>
        <Route path="/myplaylist"   element={<ShowMyPlaylistDetailed />}/>
        <Route path="/allmusic"   element={<ShowAllMusic />}/>
        <Route path="/bygenre"   element={<ShowMusicByGenre />}/>
        <Route path="/byartist"   element={<ShowMusicByArtist />}/>
        <Route path="/profile"   element={<Profile />}/>
        <Route path="/buymem"   element={<BuyMembership />}/>
        
        
    
        </Routes>
      </Router>
        
    </>
  );
};

export default Landing;
