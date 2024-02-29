import React, { useEffect } from "react";
import Navbar from "./cartl-list-item/Navbar";
import Cards from "./cartl-list-item/Cards";
import ListOrder from "./cartl-list-item/ListOrder";
import Amount from "./cartl-list-item/Amount";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
