import { Card, IconButton, Chip } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoFavorite } from "../State/Authentication/Action";
import { isPresentInFavourites } from "../config/logic";
function RestaurantCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);

  const handleAddtoFavorite = () => {
    dispatch(addtoFavorite(jwt, item.id));
  };

  const handlenavigate_to_restaurant = () => {
    if (item.open) {
      navigate(`/resturant/${item.address.city}/${item.name}/${item.id}`);
    } else {
      alert("Restaurant is closed");
    }
  };

  return (
    <Card onClick={handlenavigate_to_restaurant} className=" w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          src={item.images[0]}
          alt=""
          className="w-full h-[10rem] rounded-t-md object-cover"
        />
        <Chip
          size="small"
          className="absolute top-2 right-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        ></Chip>
      </div>
      <div
        onClick={handlenavigate_to_restaurant}
        className="p-4 cursor-pointer textPart lg:flex w-full justify-between"
      >
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
        <div>
          <IconButton onClick={handleAddtoFavorite}>
            {isPresentInFavourites(auth.favorites, item) ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
