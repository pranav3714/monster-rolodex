import React from "react";
import "./index.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="monster" src={props.monsterImage} />
      <h2>{props.monsterName}</h2>
      <p>{props.monsterEmail}</p>
    </div>
  );
};

export default Card;
