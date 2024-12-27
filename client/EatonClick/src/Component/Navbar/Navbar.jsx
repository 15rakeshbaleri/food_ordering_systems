import React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { orange } from "@mui/material/colors";
import "./Navbar.css";

function Navbar() {
  const { auth, cart } = useSelector((state) => state);
  const navigate = useNavigate();

  const handle_avatarclicked = () => {
    if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
      navigate("/admin/restaurant");
    } else {
      navigate("/my-profile");
    }
  };

  return (
    <Box className="px-4 lg:px-20 sticky top-0 z-50 py-2 bg-black flex justify-between">
      <div className="flex items-center cursor-pointer space-x-4">
        <span
          onClick={() => navigate("/")}
          className="logo font-semibold text-gray-300 text-2xl"
        >
          EatonClick
        </span>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="flex items-center space-x-2">
          <IconButton aria-label="Search">
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div>
          {auth?.user ? (
            <Avatar
              onClick={handle_avatarclicked}
              sx={{ bgcolor: orange.A400, color: "white" }}
              aria-label="User Profile"
            >
              {auth.user?.fullname?.[0]?.toUpperCase() || "?"}
            </Avatar>
          ) : (
            <IconButton
              onClick={() => navigate("/account/login")}
              aria-label="Login"
            >
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <div>
          <IconButton
            aria-label="Shopping Cart"
            onClick={() => navigate("/cart")}
          >
            <Badge
              badgeContent={cart?.cart?.items?.length || 0}
              color="primary"
            >
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

export default Navbar;
