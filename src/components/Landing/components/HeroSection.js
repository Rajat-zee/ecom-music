import React from "react";

import { Button } from "./Button.js";
import "./HeroSection.css";
import "../landing.css";
import bk2 from '../video/bk.mp4';


const HeroSection = () => {
  return (
    <div className="hero-container">
       <video autoPlay loop muted>
       <source src={bk2} type="video/mp4" />
       
       </video>
      <h1>MUSIC AWAITS</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button
         pat="/signup"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get STARTED
        </Button>
        <Button
        pat="/"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
