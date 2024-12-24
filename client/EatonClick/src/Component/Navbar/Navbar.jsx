import React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-black lg:px-20 flex justify-between ">
      <div className="flex items-center cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold  text-gray-300 text-2xl">
          EatonClick
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="flex items-center space-x-2">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div>
          {false ? (
            <Avatar sx={{ bgcolor: "white", color: orange.A400 }}>C</Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <div>
          <IconButton>
            <Badge badgeContent={4} color="white">
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

export default Navbar;
