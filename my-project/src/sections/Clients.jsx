import React, { useEffect } from "react";
import logo1 from "../assets/clients/logo1.png";
import logo2 from "../assets/clients/logo2.png";
import logo3 from "../assets/clients/logo3.png";
import logo4 from "../assets/clients/logo4.png";
import logo5 from "../assets/clients/logo5.png";
import logo6 from "../assets/clients/logo6.png";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {
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
      className={`${
        darkMode ? "dark bg-black" : "light bg-white"
      } w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}
    >
      <h1
        data-aos="zoom-in"
        className="uppercase text-2xl text-slate-500 dark:text-white text-center"
      >
        Top Brands
      </h1>
      <h1
        data-aos="zoom-in"
        className="text-5xl font-semibold text-black dark:text-white text-center"
      >
        Popular Brands
      </h1>

      <div className="flex flex-wrap flex-col lg:flex-row justify-between items-center gap-6 w-full lg:mt-10 mt-6">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={logo1}
          alt="client logo"
          width={180}
          height={180}
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={logo2}
          alt="client logo"
          width={180}
          height={180}
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={logo3}
          alt="client logo"
          width={180}
          height={180}
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={logo4}
          alt="client logo"
          width={180}
          height={180}
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={logo5}
          alt="client logo"
          width={180}
          height={180}
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={logo6}
          alt="client logo"
          width={180}
          height={180}
        />
      </div>
    </section>
  );
};

export default Clients;
