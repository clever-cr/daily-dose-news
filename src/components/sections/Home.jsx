import Categories from "../ui/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
const Home = () => {
  const data = [
    {
      img: "/Images/business.avif",
      title: "Business News",
    },
    {
      img: "/Images/business.avif",
      title: "Politics News",
    },
    {
      img: "/Images/business.avif",
      title: "Sports News",
    },
  ];
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
            return <Categories img={item.img} title={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
