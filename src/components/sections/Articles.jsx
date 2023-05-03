import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/New";
import { selectArticle } from "../../features/New";
import { Link } from "react-router-dom";

const Articles = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-[1500px] mx-auto">
        <h1 className="flex flex-col items-center p-[70px] md:pt-28 text-5xl font-bold md:pb-8">
          <Link>Articles</Link>
        </h1>
        <div className="grid grid-cols-3 gap-4 px-40 md:grid-cols-1 md:px-5">
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
                <div className="h-full">
                  <img
                    src={article.urlToImage || "/Images/business.avif"}
                    className={`rounded-md object-cover brightness-50 h-full `}
                  />
                </div>
                <h1 className="absolute text-white p-2 bottom-0 font-bold right-6 left-0 text-base  text-whitep-2">
                  {article.title}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
