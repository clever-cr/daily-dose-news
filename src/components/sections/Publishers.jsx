import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublishers } from "../../features/New";
import { fetchByPublisher } from "../../features/New";
import { Filter } from "../../features/New";
import { Link } from "react-router-dom";
const Publishers = () => {
  const { publishers } = useSelector((state) => state.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublishers());
  }, []);

  return (
    <div className="px-[160px] py-36">
      <div className="grid grid-cols-6 gap-4">
        {publishers.map((publisher, index) => {
          return (
            <div
              onClick={() => {
                dispatch(fetchByPublisher(publisher.name));
              }}
              className=""
            >
              <Link to="/articlesbypublishers">{publisher.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publishers;
