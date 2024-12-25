import React from "react";
import { Avatar, Badge, Box, IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { orange } from "@mui/material/colors"; // Import orange color
import "./Navbar.css";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  console.log(auth + "auth");
  const navigate = useNavigate();

  const renderAvatar = () => {
    if (auth.user) {
      return (
        <Avatar sx={{ bgcolor: orange.A400 }}>
          {auth.user?.fullname[0].toUpperCase()}
        </Avatar>
      );
    } else {
      return (
        <IconButton onClick={() => navigate("/account/login")}>
          <PersonIcon />
        </IconButton>
      );
    }
  };

  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-black lg:px-20 flex justify-between">
      <div className="flex items-center cursor-pointer space-x-4">
        {/* Conditionally render the logo based on authentication */}
        <Link to="/" className="logo font-semibold text-gray-300 text-2xl">
          {auth.user ? (
            <>Welcome, {auth.user?.fullname.split(" ")[0]}</>
          ) : (
            "EatonClick"
          )}
        </Link>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="flex items-center space-x-2">
          <Tooltip title="Search">
            <IconButton>
              <SearchIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Tooltip>
        </div>
        <div>{renderAvatar()}</div>
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
