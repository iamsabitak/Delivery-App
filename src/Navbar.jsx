import React from "react";
import Arrowback from "./arrow_back.svg";

function Navbar() {
  return (
    <footer className="navcontainer">
      <img src={Arrowback} alt="arrow" className="imgforarrow" />
      <p className="deliverySummary">Delivery Summary</p>
      <p className="item">3 items</p>
    </footer>
  );
}

export default Navbar;
