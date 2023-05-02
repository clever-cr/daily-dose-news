import Categories from "../ui/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { filter } from "../../features/New";
import { useDispatch } from "react-redux";
import { fetchByCategory } from "../../features/New";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import data from "../../data/categories";

const Category = () => {
  const [slide, setSlide] = useState();
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col items-center pb-[80px]  pt-[150px] gap-2 md:pt-28 md:pb-12 md:gap-0">
          <h1 className="text-7xl font-bold md:text-3xl">
            Daily-Dose <span className="text-primary">News</span>
          </h1>
          <p className="text-2xl text-primary font-semibold md:text-lg">
            We report, you decide
          </p>
        </div>

        <div className="px-[160px] md:px-5">
          <Swiper
            breakpoints={{
              639: {
                slidesPerView: 1,
              },
              1023: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            onSwiper={(slide) => setSlide(slide)}
            loop
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide>
                  <Categories
                    img={item.img}
                    title={item.title}
                    handleClick={() => {
                      dispatch(filter(item.category));
                      dispatch(fetchByCategory(item.category));
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex absolute right-[160px] gap-4 mt-2- p-3 bg-gray-50 md:right-5">
            <SlArrowLeft
              className="w-[30px] h-[30px] hover:text-primary hover:cursor-pointer"
              onClick={() => {
                slide.slidePrev();
              }}
            />
            <SlArrowRight
              className="w-[30px] h-[30px]  hover:text-primary hover:cursor-pointer"
              onClick={() => {
                slide.slideNext();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
