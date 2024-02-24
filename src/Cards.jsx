import React from "react";
import TimerShape from "./Group 756-2.svg";
import Mapimg from "./Rectangle 536.svg";
import EntypoLocation from "./entypo_location.svg";

function Cards() {
  return (
    <div className="card">
      <div className="cardtextandtimer">
        <h3 className="cardText" style={{ marginTop: "3px" }}>
          Thai Long Vogue
          <p style={{ marginTop: "3px" }}> Clothes</p>
        </h3>
        <img src={TimerShape} alt="timerimg" style={{ marginBottom: "25px" }} />
      </div>
      <div className="CitynameAnduser">
        <img src={Mapimg} alt="Map" />
        <div className="cityandusername">
          <p
            style={{
              fontSize: "16px",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          >
            City name or user
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#8D8D8D",
              marginTop: "-5px",
              marginLeft: "15px",
            }}
          >
            {" "}
            <img src={EntypoLocation} alt="location" /> Avineda Palmbeach
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
