import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login'
import Register from './components/Registration/Register';


import ShowCart from "./components/User/pages/Cart/Cart";
import BuyMembership from "./components/User/pages/Buy Membership/BuyMembership";
import ShowMyOrdersDetailed from "./components/User/pages/My Music/ShowMyOrdersDetailed";
import ShowMyPlaylistDetailed from "./components/User/pages/My Playlist/ShowMyPlaylistDetailed";
import ShowAllMusic from "./components/User/pages/All Music/ShowAllMusic";
import ShowMusicByGenre from "./components/User/pages/By Genre/ShowMusicByGenre";
import ShowMusicByArtist from "./components/User/pages/By Artist/ShowMusicByArtist";
import Profile from "./components/User/pages/Profile/Profile";
import ForgotPassword from './components/Login/ForgotPassword';
import EmailMatch from './components/Login/EmailMatch';
import Pagenotfound from './components/User/pages/Empty/Pagenotfound';

import Landing from './components/Landing/Landing'
import AddMembership from './components/Admin/pages/AddMembership';
import AddMusic from './components/Admin/pages/AddMusic';
import ShowAllMembership from './components/Admin/pages/ShowAllMembership';
import ShowAllMemDetailed from './components/Admin/pages/ShowAllMemDetailed';
import ShowAllMusic_A from './components/Admin/pages/ShowAllMusic_A';
import ShowAllOrdersDetailed from './components/Admin/pages/ShowAllOrdersDetailed';
import ShowAllPlaylistDetailed from './components/Admin/pages/ShowAllPlaylistDetailed';
import ShowAllUsers from './components/Admin/pages/ShowAllUsers';
import AHomepage from './components/Admin/AHomepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //       <Router>
  //      <Routes>
  //        <Route path="/" element={<Login />} />
  //        <Route path="/signup" element={<Register/>} />
  //        <Route path="/reset1" element={<EmailMatch/>} />
  //        <Route path="/reset2" element={<ForgotPassword/>} />

  //         <Route path="/cart"   element={<ShowCart />}/>
  //         <Route path="/buymem"   element={<BuyMembership />}/>
  //         <Route path="/mymusic"   element={<ShowMyOrdersDetailed />}/>
  //         <Route path="/myplaylist"   element={<ShowMyPlaylistDetailed />}/>
  //         <Route path="/allmusic"   element={<ShowAllMusic />}/>
  //         <Route path="/bygenre"   element={<ShowMusicByGenre />}/>
  //         <Route path="/byartist"   element={<ShowMusicByArtist />}/>
  //         <Route path="/profile"   element={<Profile />}/>
  //         <Route path="*"   element={<Pagenotfound />}/>
  //      </Routes>
  //    </Router> 
  //    </React.StrictMode> 

    <Landing/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
