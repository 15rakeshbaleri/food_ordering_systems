import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import Auth from "../Auth/Auth";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { Key } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRestaurantsaction } from "../State/Restaurant/Action";
function Home() {
  // const restu = [1, 1, 1, 1, 1, 1, 1];

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((state) => state);
  console.log("restaurants", restaurant);

  useEffect(() => {
    dispatch(getAllRestaurantsaction(jwt));
  }, []);

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
          {restaurant.restaurants.map((item, id) => (
            <RestaurantCard key={id} item={item} />
          ))}
        </div>
      </section>
      <Auth />
    </div>
  );
}

export default Home;
