import React from "react";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useSelector } from "react-redux";

function Favraiotes() {
  const { auth } = useSelector((state) => state);
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center"> My Favorites</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {auth.favorites.map((item) => (
          <RestaurantCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favraiotes;
