import React from "react";
import Navbaru from "../../Navbaru";
import Footer from "../../../Landing/components/Footer";

const Emptyplaylist = () => {
  return (<div><Navbaru />
    <div
      className="container-empty"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="img">
        <img src="/images/emptymusic.jpg" alt="" height="500px" width="600px" />
      </div>
      <div className="text" style={{ fontFamily: "sans-serif" }}>
        <h1>Look like your Playlist is Empty</h1>
      </div>
      <div className="cusbtn">
        {/* <button
          style={{
            backgroundColor: "purple",
            width: "300px",
            height: "50px",
            fontFamily: "sans-serif",
            color: "white",
            fontSize:"20px",
            borderRadius:"10px"
          }}
        >
          Return to Homepage
        </button> */}
      </div>
    </div><Footer/>
        </div>
  );
};

export default Emptyplaylist;
