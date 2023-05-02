import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchByKeyword } from "../../features/New";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-white fixed  z-10 w-full shadow-md">
      <div className="max-w-[1600px] mx-auto ">
        <div className="py-4 px-20 flex  items-center justify-between bg-slate-50- border-b border-gray-50 md:p-5  ">
          <Link className="font-bold text-xl md:text-base" to="/">
            Daily-Dose <span className="text-primary">News</span>
          </Link>
          <div className="flex items-center gap-10 text-lg text-semibold border-b-4 border-b-primary border-opacity-0 md:hidden">
            <h2 className=" hover:border-opacity-100 border-b-4 border-b-primary border-opacity-0">
              Home
            </h2>
            <Link
              to="/articles"
              className="hover:border-opacity-100 border-b-4 border-b-primary border-opacity-0"
            >
              Featured Articles
            </Link>
            <h2 className="hover:border-opacity-100 border-b-4 border-b-primary border-opacity-0">
              Publishers
            </h2>
          </div>
          <div className="flex items-center">
            <input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              className="outline-none md:w-[100px]"
              type="text"
              placeholder="search....."
            />
            <BsSearch
              onClick={() => {
                inputValue.trim() && dispatch(fetchByKeyword(inputValue));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
