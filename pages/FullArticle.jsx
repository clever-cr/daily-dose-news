import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const FullArticle = () => {
  const { selectedArticle } = useSelector((state) => state.articles);
  return (
    <div>
      <div className="">
        <div>
          <img src={selectedArticle.urlToImage} />
          <h1> {selectedArticle.title}</h1>
          <h1>{selectedArticle.content}</h1>
          <button>
            <Link to={selectedArticle.url}>Readmore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
