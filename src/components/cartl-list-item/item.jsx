import React from "react";

function item({ Item, itemName }) {
  return (
    <div className="item1">
      <img src={Item} alt="img" />
      <div className="nameandquantity">
        <p className="itemname">{itemName}</p>
        <p className="itemquantity">Quantity: 01 Bottle</p>
      </div>
      <button className="buttons">01</button>
      <button className="buttons">$10.99</button>
    </div>
  );
}

export default item;
