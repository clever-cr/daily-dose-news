import { useEffect } from "react";
import { fetchPublishers } from "../../features/New";
import { useSelector, useDispatch } from "react-redux";
import { fetchPublishers } from "../../features/New";
const Publishers = () => {
  const { publishers } = useSelector((state) => state.articles);
  console.log("publishers", publishers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPublishers());
  }, []);
  return <div>Publishers</div>;
};

export default Publishers;
