import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublishers } from "../../features/New";
import { fetchByPublisher } from "../../features/New";
import { RiNewspaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Publishers = () => {
  const { publishers } = useSelector((state) => state.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublishers());
  }, []);

  return (
    <div className="px-[160px] relative py-36 bg-wite sm:px-5 sm:py-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center group">
          <h1 className="text-4xl font-bold  group-hover:text-primary pl-9 md:pl-0">
            Publishers
          </h1>
          <div className="border-b-2 w-full border-primary pt-4  group-hover:border-none"></div>
        </div>

        <div className="grid grid-cols-6 gap-4 pt-10 md:grid-cols-2">
          {publishers.map((publisher, index) => {
            return (
              <div
                onClick={() => {
                  dispatch(fetchByPublisher(publisher.name));
                }}
                className=""
              >
                <button className="flex items-center gap-1 border p-4 border-primary hover:text-primary hover:border-white font-bold">
                  <RiNewspaperLine />
                  <Link to="/articles-by-publishers">{publisher.name}</Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Publishers;
