import React from "react";
import Categories from "../components/home/Categories";
import DaillySells from "../components/home/DaillySells";
import DealsDay from "../components/home/DealsDay";
import HomeSlider from "../components/home/HomeSlider";
import Products from "../components/home/Products";
import Populate from "../components/home/Populate";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Categories />
      <Products />
      <DaillySells />
      <DealsDay />
      <Populate />
    </>
  );
};

export default Home;
