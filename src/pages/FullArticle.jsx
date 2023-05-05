import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FullArticle = () => {
  const { selectedArticle } = useSelector((state) => state.articles);

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <div className="py-32 space-y-8 px-48 md:px-5 md:pt-24 md:pb-20">
          <img className="rounded-md w-full" src={selectedArticle.urlToImage} />
          <h1 className="text-3xl font-bold text-center md:text-xl">
            {selectedArticle.title}
          </h1>
          <div className="text-lg">
            <h1>{selectedArticle.content}</h1>
            <h1>
              his page is supposed to display the full text of the article,
              however, the news API we are using for this exercise project does
              not deliver the full text of the article. That’s why you are only
              seeing an article summary.
            </h1>
          </div>

          <button>
            <Link
              to={selectedArticle.url}
              className="text-lg border-primary border p-2 text-primary text-bold hover:border-none hover:bg-primary hover:text-white"
            >
              Read more
            </Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FullArticle;
