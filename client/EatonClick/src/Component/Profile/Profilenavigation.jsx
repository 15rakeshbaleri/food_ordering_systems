import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, Drawer, Divider } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

const Profilenavigation = ({ open, handleclose }) => {
  const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <HomeWorkIcon /> },
    { title: "Payments", icon: <AccountBalanceWalletIcon /> },
    { title: "Notifications", icon: <NotificationsIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> },
  ];

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const navigate = useNavigate();
  const handlenavigate = (title) => {
    navigate(`/my-profile/${title.toLowerCase()}`); // Corrected toLowercase to toLowerCase
  };

  return (
    <div>
      <Drawer
        open={isSmallScreen ? open : true}
        onClose={handleclose}
        variant={isSmallScreen ? "temporary" : "permanent"}
        anchor="left"
        sx={{ zIndex: -1, position: "sticky" }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[90vh]  pt-16 flex flex-col justify-center text-xl gap-8 pt-20">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => handlenavigate(item.title)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Profilenavigation;
