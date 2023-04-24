import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <div>
      <div className="py-4 px-20 flex items-center justify-between bg-red-200- shadow-md border-b border-gray-50">
        <h3>Daily-Dose News</h3>
        <div className="flex items-center gap-10">
          <h2>Home</h2>
          <h2>Featured Articles</h2>
          <h2>Publishers</h2>
        </div>
        <BsSearch />
      </div>
    </div>
  );
};

export default Navbar;
