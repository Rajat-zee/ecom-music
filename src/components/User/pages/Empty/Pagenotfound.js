import React from 'react'
import Navbar from "../../../Landing/components/Navbar";
import Footer from "../../../Landing/components/Footer";

const Pagenotfound = () => {
    return (<div><Navbar />
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
        <img src="/images/404.jpg" alt="" />
      </div>
      <div className="cusbtn">
        {/* <button
          style={{
            backgroundColor: "navy",
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
    )
}

export default Pagenotfound;
