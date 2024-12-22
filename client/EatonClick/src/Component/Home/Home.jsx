import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";

import RestaurantCard from "../Restaurant/RestaurantCard";
function Home() {
  const restu = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-xl lg:text-7xl font-bold z-10 py-5 text-left ml-10">
            EatonClick
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl text-left ml-10">
            Just click and
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-5xl text-left ml-10">
            your order is ready to eat.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0 "></div>
        <div className="fadout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-white py-5">Top Meals</p>
        <MultiItemCarousel />
      </section>
      <section className="px-5 lg:px-20 pt-5">
        <h1 className="text-2xl font-semibold text-gray-300 pb-3">
          Order from favroite restaurants
        </h1>
        <div className="flex flex-wrap justify-around items-center gap-5">
          {restu.map((item) => (
            <RestaurantCard />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
