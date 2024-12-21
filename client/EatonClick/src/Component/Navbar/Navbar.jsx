import React from "react";
import { Avatar, Badge, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          EatonClick
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="flex items-center space-x-2">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          <Avatar sx={{ bgcolor: "white", color: pink.A400 }}></Avatar>
        </div>
        <div>
          <IconButton>
            <Badge badgeContent={4} color="white">
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
