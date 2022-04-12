import React from "react";
import CardItem from "./card-item";
import Footer from "./footer";
import "./cards.css";

function Cards() {
  return (
    <div>
      <h1>SELECT A YEAR!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.imgur.com/CACzmqD.jpg"
              text="Eddy's First Experiences!"
              label="Year Zero"
              path="/zero"
            />
            <CardItem
              src="https://i.imgur.com/Vp996Pi.jpg"
              text="He Grew So Fast!"
              label="Year One"
              path="/one"
            />
            <CardItem
              src="https://i.imgur.com/Z8fXMA8.jpg"
              text="The Terrible Two's!"
              label="Year Two"
              path="/two"
            />
            <CardItem
              src="https://i.imgur.com/I1ZK2RC.jpg"
              text="Growth Spurt Madness!"
              label="Year Three"
              path="/three"
            />
            <CardItem
              src="https://i.imgur.com/Kmcyr3R.jpg"
              text="My Little Boy Is Now Huge!"
              label="Year Four"
              path="/four"
            />
            <CardItem
              src="https://imgur.com/a/n8LfzaN"
              text="It's Official, He's A 'Big Boy' Now!"
              label="Year Five"
              path="/five"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
