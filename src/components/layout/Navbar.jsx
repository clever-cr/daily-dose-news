import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchByKeyword } from "../../features/New";
const Navbar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState([]);
  return (
    <div>
      <div className="py-4 px-20 flex items-center justify-between bg-red-200- shadow-md border-b border-gray-50">
        <h3>Daily-Dose News</h3>
        <div className="flex items-center gap-10">
          <h2>Home</h2>
          <h2>Featured Articles</h2>
          <h2>Publishers</h2>
        </div>
        <div className="flex items-center ">
          <input
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            className="outline-none"
            type="text"
            placeholder="search....."
          />
          <BsSearch
            onClick={() => {
              dispatch(fetchByKeyword(inputValue));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
