import React from "react";

import Login from "./loginpage/Login";

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
// import Menu from "./components/Menu";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
