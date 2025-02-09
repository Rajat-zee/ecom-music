import React from "react";
import './card.css'
import CardItem from "./CardItem";
const Cards = () => {
  return (
    <div className="cards">
      <h1>Checout the FAMOUS SINGERS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <CardItem  src="images/charlie.jpg" text="Charlie Puth" label="Adventure" path="/"/>
          <CardItem  src="images/ellie.jpg" text="Ellie Goulding" label="Adventure" path="/"/>
          <CardItem  src="images/neha.jpg" text="Neha Kakkar" label="Adventure" path="/"/>
          <CardItem  src="images/ed.jpg" text="Ed Sheeren" label="Adventure" path="/"/>
          </ul>
           <ul className="cards__items">
          <CardItem  src="images/tandon.jpg" text="Sachit Tandon" label="Adventure" path="/"/>
          <CardItem  src="images/snake.jpg" text="DJ Snake" label="Adventure" path="/"/>
          <CardItem  src="images/arijit.jpg" text="Arijit Singh" label="Adventure" path="/"/>
          <CardItem  src="images/cam.jpg" text="Camila Cabello" label="Adventure" path="/"/>
          <CardItem  src="images/clean.jpg" text="Clean Bandits" label="Adventure" path="/"/>
          <CardItem  src="images/jubin.jpg" text="Jubin Nautiyal" label="Adventure" path="/"/>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Cards;
