import React from "react";
import stacks from "../services/stacks";
import "./card.scss";

function Card() {
  return (
    <>
      {stacks.map((stack) => (
        <>
          <div className="Card">
            <h1 className="titleCard">
              <img src={stack.img} width="50px" alt={stack.alt} />
              {stack.name}
            </h1>
            <div className="bodyCard">
              <p className="description">
                {stack.descPartOne}
                <span>{stack.descHighlight}</span>
                {stack.descPartTwo}
              </p>
              <p className="hashtags">{stack.hashtags}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Card;
