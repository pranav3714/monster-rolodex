import React from "react";
import Card from "../card";
import "./index.style.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters
        ? props.monsters.map((item) => (
            <Card
              key={item.id}
              monsterEmail={item.email}
              monsterImage={`https://robohash.org/${item.id}?set=set2&size=180x180`}
              monsterName={item.name}
            />
          ))
        : null}
    </div>
  );
};

export default CardList;
