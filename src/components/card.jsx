import React from "react";
import reactLogo from "../assets/react.png";
import "./card.scss";

function Card() {
  return (
    <div className="Card">
      <h1 className="titleCard">
        <img src={reactLogo} width="50px" />
        React
      </h1>
      <div className="bodyCard">
        <p className="description">
          React is a <span>javascript Library</span> which makes a lot of things
          possible. You have a really open way of coding in it compared to
          frameworks like Angular.
        </p>
        <p className="hashtags">#JS #React #Code #Library</p>
      </div>
    </div>
  );
}

export default Card;
