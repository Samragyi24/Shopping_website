import React, { useEffect } from "react";
import col1 from "../assets/col1.webp";
import col2 from "../assets/col2.jpg";
import col4 from "../assets/col4.webp";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Collections = () => {
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
      id="collections"
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl text-slate-500 dark:text-white text-center"
      >
        Top Collection
      </h1>
      <h1
        data-aos="zoom-in"
        className="text-5xl font-semibold dark:text-white text-black text-center"
      >
        Popular Collections
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="flex flex-col lg:flex-row justify-between lg:items-start items-center w-full mt-5"
      >
        <div className="lg:w-[60%] w-full flex flex-col justify-center items-start h-full">
          <div
            className="flex flex-col justify-center items-start  gap-4 w-full lg:h-[400px] h-full bg-cover bg-center border-[4px] border-white p-10 collection-item cursor-pointer bg-no-repeat"
            style={{ backgroundImage: `url(${col1})` }}
          >
            <h1 className="text-xl italic">Chasing Urban Allures</h1>
            <h1 className="lg:text-5xl text-4xl font-semibold text-black line-clamp-5">
              Effortless Styles <br></br>For <br></br>Women
            </h1>
            <button className="px-7 py-2 text-lg text-black bg-white font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300">
              Shop Now
            </button>
          </div>

          <div className="flex lg:flex-row flex-col w-full h-fit">
            <div
              className="flex flex-col p-6 justify-center items-end gap-4 lg:w-[50%] w-full border-[4px] border-white bg-cover bg-center cursor-pointer bg-no-repeat lg:h-[400px] h-fit"
              style={{ backgroundImage: `url(${col4})` }}
            >
              <h1 className="text-xl italic text-white">
                Chasing Urban Allures
              </h1>
              <h1 className="text-4xl font-semibold text-white ">
                Effortless Styles <br></br>For <br></br>Men
              </h1>
              <button className="px-7 py-2 text-lg text-black bg-white font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300">
                Shop Now
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 lg:w-[50%] w-full bg-slate-400 p-6 border-[4px] border-white collection-item cursor-pointer h-[400px] bg-no-repeat">
              <h1 className="text-white font-semibold text-3xl text-center">
                Mastering the Art of Men's Wear
              </h1>
              <h1 className="text-white font-bold text-8xl text-center">50%</h1>
              <button className="px-7 py-2 text-lg text-black bg-white font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[40%] w-full flex flex-col justify-start items-start gap-4 p-10 bg-cover bg-center lg:h-[756px] h-full border-[4px] border-white collection-item cursor-pointer bg-no-repeat"
          style={{ backgroundImage: `url(${col2})` }}
        >
          <h1 className="text-xl italic">Chasing Urban Allure</h1>
          <h1 className="text-5xl font-semibold text-black">
            Elevate <br></br>Your <br></br>Everyday <br></br>Look
          </h1>
          <button className="px-7 py-2 text-lg text-black bg-white font-semibold rounded-lg mt-5 transform hover:scale-105 transition-transform duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
