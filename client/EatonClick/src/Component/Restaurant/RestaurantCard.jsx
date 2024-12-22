import { Card, IconButton, Chip } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function RestaurantCard() {
  return (
    <Card className=" w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-[10rem] rounded-t-md object-cover"
        />
        <Chip
          size="small"
          className="absolute top-2 right-2"
          color={true ? "success" : "error"}
          lable={true ? "Open" : "Closed"}
        ></Chip>
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Restaurant name</p>
          <p className="text-gray-400 text-sm">Description</p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
