import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to={"/home"} />
      <Link to={"/"} />
    </div>
  );
}

export default Navigation;
