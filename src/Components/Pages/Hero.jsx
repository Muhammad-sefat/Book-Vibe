import book from "../../assets/book.png";
const Hero = () => {
  return (
    <div className="p-5 md:px-10 mx-auto">
      <div className="hero bg-base-200 rounded-md md:h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse gap-5">
          <img src={book} />
          <div className="md:w-[50%]">
            <h1 className="text-2xl md:text-5xl font-bold pb-8">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn bg-green-600 text-white font-semibold">
              View the List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
