import React from "react";
import Navbar from "../src/components/layout/Navbar";
import Category from "../src/components/sections/Category";
import Articles from "../src/components/sections/Articles";
import Publishers from "../src/components/sections/Publishers";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Articles />
      <Publishers />
    </div>
  );
};

export default Home;
