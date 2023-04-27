import Categories from "../ui/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { useState } from "react";
import { Filter } from "../../features/New";
import { useDispatch } from "react-redux";
import { fetchByCategory } from "../../features/New";
const Category = () => {
  const data = [
    {
      img: "/Images/business.avif",
      title: "Business News",
      category: "business",
    },
    {
      img: "/Images/business.avif",
      title: "Entertainment news",
      category: "entertainment",
    },
    {
      img: "/Images/business.avif",
      title: "Sports News",
      category: "sports",
    },
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col items-center p-[70px]">
        <h1 className="text-7xl font-bold ">
          Daily-Dose <span className="text-primary">News</span>
        </h1>
        <p className="text-xl text-primary"> We report, you decide</p>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          {data.map((item, index) => {
            return (
              <Categories
                img={item.img}
                title={item.title}
                handleClick={() => {
                  dispatch(Filter(item.category));
                  dispatch(fetchByCategory(item.category));
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
