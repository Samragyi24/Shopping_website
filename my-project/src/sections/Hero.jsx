import React, { useEffect } from "react";
import banner4 from "../assets/banner4.jpg";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
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
      id="hero"
      className={`${
        darkMode ? "dark bg-[#19191a]" : "light bg-gray-300"
      } w-full lg:px-20 px-10 lg:py-20 py-8 lg:h-screen h-fit dark:bg-slate-700 dark:bg-transparent flex flex-col lg:flex-row justify-between items-center bg-cover bg-center gap-10`}
    >
      <div className="flex flex-col justify-center items-start gap-6 lg:w-[60%] w-full">
        <h1
          data-aos="zoom-in"
          className="text-3xl text-slate-900 italic dark:text-white"
        >
          Own Your Style
        </h1>
        <h1
          data-aos="zoom-in"
          className="lg:text-7xl text-6xl text-black dark:text-white font-bold capitalize"
        >
          Effortless <br></br>glamour for <br></br>every occasions
        </h1>
        <button
          data-aos="zoom-in"
          className="bg-black px-10 py-4 font-semibold text-white text-lg rounded-lg mt-8 hover:bg-white dark:text-black hover:text-black cursor-pointer"
        >
          Shop Now
        </button>
      </div>

      <div id="image-box" className="lg:w-[40%] w-full">
        <img
          data-aos="zoom-in"
          src={banner4}
          alt="image"
          className="bg-cover bg-center"
        />
      </div>
    </section>
  );
};

export default Hero;
