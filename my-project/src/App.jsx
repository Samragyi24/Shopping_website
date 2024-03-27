import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Collections from "./sections/Collections";
import BestSellers from "./sections/BestSellers";
import Banner from "./sections/Banner";
import NewArrivals from "./sections/NewArrivals";
import Clients from "./sections/Clients";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import { DarkModeProvider } from "./components/DarkModeContext";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <Collections />
        <BestSellers />
        <Banner />
        <NewArrivals />
        <Clients />
        <Blogs />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
