const Categories = ({ title, img, handleClick }) => {
  return (
    <div>
      <div>
        <img
          src={img}
          alt="image"
          className="brightness-[0.35] md:w-[350px] md:h-[200px]"
        />
      </div>

      <div className="absolute bottom-6 left-20 flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <button
          onClick={handleClick}
          className="bg-primary- border border-primary px-3 p-2 text-white hover:bg-white hover:border-none hover:text-primary font-bold"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Categories;
