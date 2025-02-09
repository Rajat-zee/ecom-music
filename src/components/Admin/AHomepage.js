import React from "react";
import "./Ahomepage.css";
import ANavbar from "./ANavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home/Home";
//import ShowCart from "./pages/Cart/Cart";
import AddMusic from "./pages/AddMusic";
import AddMembership from "./pages/AddMembership";
import ShowAllMusic_A  from "./pages/ShowAllMusic_A";
import ShowAllMembership from "./pages/ShowAllMembership";
import ShowAllUsers  from "./pages/ShowAllUsers";
import ShowAllPlaylistDetailed  from "./pages/ShowAllPlaylistDetailed";
import ShowAllMemDetailed from "./pages/ShowAllMemDetailed";
import ShowAllOrdersDetailed from "./pages/ShowAllOrdersDetailed";
import Login from "../Login/Login";
import AdminHome from "./pages/AdminHome";

const AHomepage = () => {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/aa"  exact element={<AdminHome />}/>
          <Route path="/reset1"  exact element={<AdminHome />}/>
          <Route path="/addmusic"  exact element={<AddMusic />}/>
          <Route path="/addmembership"  exact element={<AddMembership />}/>
          <Route path="/allmusic" exact element={<ShowAllMusic_A/>}/>
          <Route path="allmemberships" exact element={<ShowAllMembership/>}/>
          <Route path="/allplaylists" exact element={<ShowAllPlaylistDetailed/>}/>
          <Route path="/allusers" exact element={<ShowAllUsers/>}/>
          <Route path="/membershiporders" exact element={<ShowAllMemDetailed/>}/>
          <Route path="/musicorders" exact element={<ShowAllOrdersDetailed/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default AHomepage;
