import React from "react";
import "./homepage.css";
import Navbaru from "./Navbaru";
//import Navbar from "./Sumit/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home/Home";
import ShowCart from "./pages/Cart/Cart";
import BuyMembership from "./pages/Buy Membership/BuyMembership";
import ShowMyOrdersDetailed from "./pages/My Music/ShowMyOrdersDetailed";
import ShowMyPlaylistDetailed from "./pages/My Playlist/ShowMyPlaylistDetailed";
import ShowAllMusic from "./pages/All Music/ShowAllMusic";
import ShowMusicByGenre from "./pages/By Genre/ShowMusicByGenre";
import ShowMusicByArtist from "./pages/By Artist/ShowMusicByArtist";

import Profile from "./pages/Profile/Profile";
import Pagenotfound from "./pages/Empty/Pagenotfound";



const Homepage = () => {
  return (
    <>
      <Router>
        
        <Routes>
           <Route index element={<Home />}></Route>
          
          <Route path="/aa"  exact element={<Home />}/>
          <Route path="/reset1"  exact element={<Home />}/>
          <Route path="/cart"   element={<ShowCart />}/>
          <Route path="/mymusic"   element={<ShowMyOrdersDetailed />}/>
          <Route path="/myplaylist"   element={<ShowMyPlaylistDetailed />}/>
          <Route path="/allmusic"   element={<ShowAllMusic />}/>
          <Route path="/bygenre"   element={<ShowMusicByGenre />}/>
          <Route path="/byartist"   element={<ShowMusicByArtist />}/>
          <Route path="/profile"   element={<Profile />}/>
          <Route path="/buymem"   element={<BuyMembership />}/>
          <Route path="*"   element={<Pagenotfound />}/>

        </Routes>
      </Router>
    </>
  );
};

export default Homepage;
