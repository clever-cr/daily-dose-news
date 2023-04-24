import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Articles from "./components/sections/Articles";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Articles />
    </div>
  );
};

export default App;
