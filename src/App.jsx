import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullArticle from "./pages/FullArticle";
import Home from "./pages/Home";
import ArticlesByPublishers from "./pages/ArticlesByPublishers";
import Articles from "./components/sections/Articles";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="full-article" element={<FullArticle />} />
        <Route
          path="articles-by-publishers"
          element={<ArticlesByPublishers />}
        />
        <Route path="articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
