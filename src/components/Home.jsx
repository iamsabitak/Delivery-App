import React from "react";
import Navbar from "./cartl-list-item/Navbar";
import Cards from "./cartl-list-item/Cards";
import ListOrder from "./cartl-list-item/ListOrder";
import Amount from "./cartl-list-item/Amount";

function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <ListOrder />
      <Amount />
    </>
  );
}

export default Home;
