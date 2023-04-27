import { Link } from "react-router-dom";
import { selectArticle } from "../src/features/New";

import { useSelector, useDispatch } from "react-redux";
const ArticlesByPublishers = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <Link
            to="/fullarticle"
            onClick={() => {
              dispatch(selectArticle(article));
            }}
          >
            <img src={article.urlToImage} />
            <h1>{article.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default ArticlesByPublishers;
