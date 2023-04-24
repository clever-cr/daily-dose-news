import React from "react";

const Categories = ({ title, img }) => {
  return (
    <div className="relative">
      <div>
        <img src={img} alt="image" className=" relative-" />
        <div className="bg-black h-fit- absolute w-full top-0 h-72 opacity-70"></div>
      </div>

      <div className="absolute top-40 left-40 flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <button className="bg-primary- border border-primary px-3 p-2 text-white hover:bg-white hover:border-none hover:text-primary font-bold">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Categories;
