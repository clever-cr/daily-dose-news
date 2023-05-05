import React from "react";
import Navbar from "../components/layout/Navbar";
import Category from "../components/sections/Category";
import Articles from "../components/sections/Articles";
import Publishers from "../components/sections/Publishers";
import Footer from "../components/layout/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Articles />
      <Publishers />
      <Footer />
    </div>
  );
};

export default Home;
