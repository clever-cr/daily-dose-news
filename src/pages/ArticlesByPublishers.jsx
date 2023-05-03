import { Link } from "react-router-dom";
import { selectArticle } from "../features/New";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ArticlesByPublishers = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-3 gap-4 p-40 md:px-5 md:grid-cols-1 md:p-24">
          {articles.map((article, index) => {
            return (
              <Link
                to="/full-article"
                onClick={() => {
                  dispatch(selectArticle(article));
                }}
                className={`relative shadow-md ${
                  index == 1 || index == 6
                    ? "col-span-1  row-span-2 md:row-span-1"
                    : "col-span-1"
                }`}
              >
                <img
                  className="rounded-md object-cover brightness-50 h-full"
                  src={article.urlToImage}
                />
                <h1 className="absolute text-white font-bold text-lg bottom-2 left-2 right-2">
                  {article.title}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlesByPublishers;
