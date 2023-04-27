import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FullArticle from "../pages/FullArticle";
import Home from "../pages/Home";
import ArticlesByPublishers from "../pages/ArticlesByPublishers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fullarticle" element={<FullArticle />} />
        <Route path="articlesbypublishers" element={<ArticlesByPublishers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
