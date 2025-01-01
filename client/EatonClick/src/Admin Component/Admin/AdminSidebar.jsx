import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import CategoryIcon from "@mui/icons-material/Category";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import EventIcon from "@mui/icons-material/Event";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import zIndex from "@mui/material/styles/zIndex";
import { Divider } from "@mui/material";
import { Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../Component/State/Authentication/Action";
const menu = [
  { title: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { title: "Orders", icon: <ShoppingBagIcon />, path: "/orders" },
  { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
  { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
  { title: "Events", icon: <EventIcon />, path: "/events" },
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" },
];
function AdminSidebar({ handleClose }) {
  const issmallscreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handlenavigate = (item) => {
    navigate(`/admin/restaurants${item.path}`);

    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
      handleClose();
    }
  };

  return (
    <div>
      <Drawer
        variant={issmallscreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={true}
        anchor="left"
        sx={{ zIndex: 1 }}
      >
        <div className="w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-start text-xl space-y-[1.65] py-5">
          {menu.map((item, index) => (
            <>
              <div
                key={index}
                onClick={() => handlenavigate(item)}
                className="px-5 flex items-center gap-5 cursor-pointer hover:bg-gray-800 transition-all h-20"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              <Divider />
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default AdminSidebar;
