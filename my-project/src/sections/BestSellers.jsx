import React, { useEffect } from "react";
import slider from "react-slick";
import { bestsellers } from "../components/export";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const BestSellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      id="products"
      className={`${
        darkMode ? "dark bg-[#19191a]" : "light bg-slate-200"
      } w-full lg:px-20 px-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl dark:text-white text-slate-500 text-center"
      >
        Top Products
      </h1>
      <h1 className="text-5xl font-semibold dark:text-white text-black text-center">
        Best Sellers
      </h1>

      <div data-aos="slide-up" data-aos-delay="200" className="w-full mt-3">
        <Slider {...settings}>
          {bestsellers.map((item, index) => (
            <div
              key={index}
              id="product-box"
              className="flex flex-col justify-center items-start gap-2 bg-white rounded-xl dark:bg-black"
            >
              <div id="image-box" className="relative cursor-pointer">
                <img src={item.image} alt="" className="w-[400px] h-[250px]" />
                <div
                  id="icon-box"
                  className="flex-col justify-center items-center gap-1 absolute top-3 right-3 hidden"
                >
                  <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
                    <FaRegHeart />
                  </div>
                  <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
                    <IoSearch />
                  </div>
                  <div className="bg-white p-3 rounded-full hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300">
                    <AiOutlineShoppingCart />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-startgap-3 p-3">
                  <p className="italic dark:text-white">{item.category}</p>
                  <h1 className="text-xl dark:text-white text-black font-semibold ">
                    {item.title}
                  </h1>
                  <h1 className="text-red-600 dark:text-white font-bold text-2xl">
                    {item.price}
                  </h1>
                  <button className="bg-black font-bold dark:bg-white dark:text-black text-sm text-white px-5 py-2 rounded-md transform hover-scale-105 transition-transform duration-300 mt-2">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellers;
