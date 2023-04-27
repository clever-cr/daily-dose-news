import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../features/New";
import { selectArticle } from "../../features/New";
import { Link } from "react-router-dom";
const Articles = () => {
  const { articles, loading } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  return (
    <div>
      <h1 className="flex flex-col items-center p-[70px] text-5xl font-bold">
        <Link>Article</Link>
      </h1>

      <div className="grid grid-cols-3 gap-4 px-40">
        {articles.map((article, index) => {
          return (
            <Link
              to="/fullarticle"
              onClick={() => {
                dispatch(selectArticle(article));
              }}
              className={`relative shadow-md ${
                index == 1 || index == 6
                  ? "col-span-1  row-span-2"
                  : "col-span-1"
              }`}
            >
              <div className="h-full">
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    className={`rounded-md object-cover ${
                      index === 1 || index === 6 ? "h-full" : ""
                    }`}
                  />
                ) : (
                  <img src="/Images/business.avif" />
                )}

                <div className="bg-black h-fit- absolute w-full top-0 h-full opacity-40 rounded-md"></div>
              </div>

              <h1
                className={`absolute bg-white- bottom-0   font-bold  right-6 left-0 text-base text-white- opacity-90- p-2 text-center-  rounded-sm- rounded-tr-md ${
                  index === 1 || index === 6
                    ? "bg-none text-left text-white"
                    : "bg-white  text-gray-700"
                }`}
              >
                {article.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
