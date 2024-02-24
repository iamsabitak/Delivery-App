import React from "react";
import Items from "./item";

import Item1 from "./Rectangle.svg";
import Item2 from "./Rectangle-2.svg";
import Item3 from "./Rectangle-3.svg";

function ListOrder() {
  return (
    <div className="itemcontainer">
      <Items Item={Item1} itemName="Strawberry Desert" />
      <Items Item={Item3} itemName="Orange Fruit Jam" />
      <Items Item={Item2} itemName="Golden Fruit Jam" />
    </div>
  );
}

export default ListOrder;
